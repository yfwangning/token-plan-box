# AI API 性价比

面向国内用户的 AI API 与 Code Plan 价格比较、人民币成本估算和智能购买顾问 MVP。

## 本地运行

```bash
python3 -m http.server 5178
```

打开：

```text
http://127.0.0.1:5178/
```

## 上线前检查

```bash
node --check app.js
node scripts/validate-site-data.mjs
```

验证脚本会检查：

- 生成数据中不得出现美元或 USD。
- 每个厂商必须有官方来源；有订阅套餐的厂商必须有购买入口。
- 官方套餐必须有价格字段和官方来源。
- 官方 API 模型必须有价格字段和官方来源。
- 每个厂商必须有旗舰或 API 模型条目。

## 部署说明

- `robots.txt` 已允许搜索引擎抓取全站。
- `_headers` 提供 Cloudflare Pages / Netlify 类静态平台可用的基础安全头和缓存策略。
- 正式域名确定后，再补 `canonical`、绝对地址 `og:image` 和 `sitemap.xml`。

## 已实现

- 首页热门推荐和 API / Code Plan 双榜。
- 30 秒问答式智能建议向导。
- 基于成本、场景匹配、能力、使用门槛、时效风险的透明评分。
- 人民币主价展示、折扣状态、可信度标签和官方来源链接。
- 供应商库、模型/套餐详情弹窗、价格变更审核台演示。
- API 定价页默认每个厂商最多展示 2 个模型，优先旗舰模型和次旗舰模型。
- Code Plan 榜展示厂商官方套餐和参考页待核验套餐；API 估算、本站组合方案不得进入 Code Plan 榜，未核验套餐必须显著标记。

## 每日官方数据更新

官方来源集中维护在 `data/vendor-sources.json`。运行：

```bash
node scripts/update-official-data.mjs
```

脚本会抓取每个厂商的官方页面，生成 `data/official-price-data.json` 和人工可读的 `data/update-report.md`：

- 已实现解析器的厂商会输出结构化 API 模型价格与订阅套餐。
- 未实现解析器的厂商只做官方页面快照和 SHA-256 变更检测。
- 解析失败、页面变化、抓取失败、缺少解析器都会进入 `reviewQueue`，不会自动发布为官方价格。
- `data/update-report.md` 会列出本次解析到的套餐、结构化字段变化、待审核项目和来源健康状况。

当前已接入结构化解析器：

- DeepSeek API 价格。
- 小米 MiMo API 价格与 Token Plan。
- 阿里百炼 Token Plan 团队版。
- 百度千帆 Coding Plan。
- 京东云 Coding Plan 活动规则价格。
- 讯飞星辰 MaaS Astron Coding Plan 焕新版。

GitHub Actions 已配置 `.github/workflows/daily-price-update.yml`，每天北京时间 09:00 自动运行一次并提交更新后的 `data/official-price-data.json` 与 `data/update-report.md`。生产使用时建议把自动提交改成自动开 PR，由人工审核后合并。

### 展示与同步规则

- 模型名称、上下文长度、最大输出、输入价、输出价、缓存价必须来自厂商官方文档或官方价格页。
- 每个厂商的 API 榜默认最多展示 2 个模型，一般是旗舰和次旗舰；超过 2 个时必须按 `displayRank` 排序截断。
- Code Plan 优先采用厂商官方明确声明的套餐；来自参考对比表的套餐必须标记为“参考页待核验”，不得标为官方确认。DeepSeek 当前登记为 `codePlanAvailability: none`，因此不会出现在 Code Plan 榜。
- 未实现解析器的厂商只进入快照监控和审核队列，不自动覆盖前台官方价格。
- 抓取失败或解析失败时，脚本会保留上一版已确认官方数据，并将问题写入 `reviewQueue`。

## 数据说明

当前为可运行 MVP 的结构化样例数据，用来验证产品、UI 和推荐逻辑。DeepSeek 条目已按官方中文价格页复核到 2026-04-29：

- `deepseek-v4-flash`：上下文 1M，最大输出 384K，缓存命中输入 ¥0.02 / 百万 tokens，缓存未命中输入 ¥1 / 百万 tokens，输出 ¥2 / 百万 tokens。
- `deepseek-v4-pro`：上下文 1M，最大输出 384K，2.5 折期间缓存命中输入 ¥0.025 / 百万 tokens，缓存未命中输入 ¥3 / 百万 tokens，输出 ¥6 / 百万 tokens；优惠至北京时间 2026-05-31 23:59。原价为缓存命中输入 ¥0.1，缓存未命中输入 ¥12，输出 ¥24 / 百万 tokens。

其他厂商条目仍是产品演示样例，已在界面中标为“自动抓取待确认”。生产上线前应接入半自动抓取和人工审核流程，并逐条复核官方价格、折扣结束时间、外币汇率和套餐限制。
