import fs from "node:fs";
import vm from "node:vm";

const appSource = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const officialData = JSON.parse(fs.readFileSync(new URL("../data/official-price-data.json", import.meta.url), "utf8"));
const failures = [];

const context = {
  console,
  document: {
    querySelector() {
      return { innerHTML: "", textContent: "", addEventListener() {}, classList: { toggle() {} }, setAttribute() {} };
    },
    querySelectorAll() {
      return [];
    }
  },
  window: {
    setTimeout() {},
    clearTimeout() {},
    requestAnimationFrame() {},
    location: { hash: "", origin: "", pathname: "" },
    history: { replaceState() {} },
    navigator: {}
  },
  fetch() {
    return Promise.resolve({ ok: false, status: 418 });
  },
  AbortController: class {
    signal = {};
    abort() {}
  }
};

vm.createContext(context);
vm.runInContext(`${appSource}\nthis.__providers = providers; this.__catalog = catalog;`, context, { filename: "app.js" });

const providers = context.__providers;
const catalog = context.__catalog;
const officialItems = catalog.filter((item) => item.status === "official" || item.status === "reviewed");

if (JSON.stringify(officialData).includes("$") || JSON.stringify(officialData).includes("USD")) {
  failures.push("official-price-data.json contains USD or dollar symbols.");
}

for (const provider of providers) {
  if (!provider.source) failures.push(`${provider.id} is missing source URL.`);
  if (!provider.purchaseUrl && provider.codePlanStatus !== "none") failures.push(`${provider.id} is missing purchase URL.`);

  const models = catalog.filter((item) => item.providerId === provider.id && item.type === "api");
  const flagship = models.find((item) => item.displayTier === "flagship") || models[0];
  if (!flagship) failures.push(`${provider.id} is missing flagship/API model.`);
}

for (const plan of officialItems.filter((item) => item.type === "plan")) {
  const hasPrice = Boolean(plan.recurringMonthly || plan.monthly || plan.firstMonth || plan.yearly || plan.quarterly);
  if (!hasPrice) failures.push(`${plan.id} is missing plan price.`);
  if (!plan.source) failures.push(`${plan.id} is missing official source.`);
}

for (const model of officialItems.filter((item) => item.type === "api")) {
  const hasPrice = Boolean(model.priceText || (Number.isFinite(Number(model.input)) && Number.isFinite(Number(model.output))));
  if (!hasPrice) failures.push(`${model.id} is missing API price.`);
  if (!model.source) failures.push(`${model.id} is missing official source.`);
}

if (failures.length) {
  console.error(`Site data validation failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site data validation passed: ${providers.length} providers, ${officialItems.length} official items.`);
