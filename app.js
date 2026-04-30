const providers = [
  { id: "aliyun", name: "阿里百炼", region: "中国", status: "official", updated: "2026-04-30", source: "https://help.aliyun.com/zh/model-studio/token-plan-overview", purchaseUrl: "https://common-buy.aliyun.com/token-plan/", codePlanStatus: "available" },
  { id: "kimi", name: "Kimi", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.kimi.com/docs/pricing/chat-k26", purchaseUrl: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694", codePlanStatus: "available" },
  { id: "zhipu", name: "智谱 AI", region: "中国", status: "official", updated: "2026-04-30", source: "https://docs.bigmodel.cn/cn/coding-plan/overview", purchaseUrl: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v", codePlanStatus: "available" },
  { id: "minimax", name: "MiniMax", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.minimaxi.com/docs/guides/pricing-token-plan", purchaseUrl: "https://platform.minimaxi.com/subscribe/token-plan", codePlanStatus: "token" },
  { id: "volcengine", name: "火山方舟", region: "中国", status: "official", updated: "2026-04-30", source: "https://www.volcengine.com/docs/82379/1925114", purchaseUrl: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU", codePlanStatus: "available" },
  { id: "mimo", name: "小米 MiMo", region: "中国", status: "official", updated: "2026-04-30", source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md", purchaseUrl: "https://platform.xiaomimimo.com/#/token-plan", codePlanStatus: "token" },
  { id: "baidu", name: "百度千帆", region: "中国", status: "official", updated: "2026-04-30", source: "https://cloud.baidu.com/product/codingplan.html", purchaseUrl: "https://cloud.baidu.com/product/codingplan.html", codePlanStatus: "available" },
  { id: "tencent", name: "腾讯云", region: "中国", status: "official", updated: "2026-04-30", source: "https://cloud.tencent.com/act/pro/tokenplan", purchaseUrl: "https://cloud.tencent.com/act/pro/tokenplan", codePlanStatus: "token" },
  { id: "jdcloud", name: "京东云", region: "中国", status: "official", updated: "2026-04-30", source: "https://developer.jdcloud.com/topics/4467", purchaseUrl: "https://www.jdcloud.com/cn/pages/codingplan", codePlanStatus: "available" },
  { id: "xfyun", name: "讯飞星火", region: "中国", status: "official", updated: "2026-04-30", source: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE", purchaseUrl: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE", codePlanStatus: "available" },
  { id: "deepseek", name: "DeepSeek", region: "中国", status: "official", updated: "2026-04-29", source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing", codePlanStatus: "none" },
  { id: "longcat", name: "美团 LongCat", region: "中国", status: "official", updated: "2026-04-29", source: "https://longcat.chat/platform/docs/zh/", codePlanStatus: "none" }
];

const catalog = [
  {
    id: "deepseek-v4-pro",
    type: "api",
    providerId: "deepseek",
    name: "deepseek-v4-pro",
    displayTier: "flagship",
    displayRank: 1,
    input: 3,
    output: 6,
    cache: 0.025,
    originalInput: 12,
    originalOutput: 24,
    originalCache: 0.1,
    context: "1M",
    maxOutput: "384K",
    quality: 88,
    ease: 66,
    scenarios: ["coding", "content", "long", "general"],
    strengths: ["官方标注 1M 上下文与 384K 最大输出", "V4 Pro 折扣期内价格为输入 3 元、输出 6 元 / 百万 tokens", "缓存命中价 0.025 元 / 百万 tokens，适合重复上下文"],
    weaknesses: ["2.5 折优惠有明确结束时间，长期预算需按原价复算", "非开发者需要通过第三方工具或 API 使用"],
    discount: { label: "V4 Pro 2.5 折", end: "北京时间 2026-05-31 23:59", source: "DeepSeek 官方价格页" },
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "deepseek-v4-flash",
    type: "api",
    providerId: "deepseek",
    name: "deepseek-v4-flash",
    displayTier: "subFlagship",
    displayRank: 2,
    input: 1,
    output: 2,
    cache: 0.02,
    context: "1M",
    maxOutput: "384K",
    quality: 76,
    ease: 68,
    scenarios: ["content", "service", "general"],
    strengths: ["官方标注 1M 上下文与 384K 最大输出", "输入 1 元、输出 2 元 / 百万 tokens，适合批量轻任务"],
    weaknesses: ["复杂代码和深度推理不如 Pro", "官方价格可能调整，需定期复核"],
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-k2",
    type: "api",
    providerId: "kimi",
    name: "Kimi K2.6",
    displayTier: "flagship",
    displayRank: 1,
    input: 6.5,
    output: 27,
    cache: 1.1,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "256K",
    quality: 86,
    ease: 78,
    scenarios: ["content", "long", "general"],
    strengths: ["中文开放平台价格口径为人民币 / 百万 tokens", "适合长文档、中文写作和通用任务"],
    weaknesses: ["会员套餐与 API 按量计费是不同体系", "Kimi Code 额度按统一额度池和 token 消耗计算"],
    source: "https://platform.kimi.com/docs/pricing/chat-k26",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "glm-4-plus",
    type: "api",
    providerId: "zhipu",
    name: "GLM-5.1",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "中文官网价格页未公开结构化单价",
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "官方模型页为准",
    quality: 84,
    ease: 82,
    scenarios: ["content", "service", "general"],
    strengths: ["国内 BigModel 文档确认 GLM Coding Plan 与额度口径", "适合中文通用和企业知识库场景"],
    weaknesses: ["国内中文官网未公开 GLM-5.1 结构化 API 单价", "Z.AI 国际站价格不直接用于中国用户卡片"],
    source: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-text-01",
    type: "api",
    providerId: "minimax",
    name: "MiniMax-M2.7",
    displayTier: "flagship",
    displayRank: 1,
    input: 2.1,
    output: 8.4,
    cache: 0.42,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "256K",
    quality: 83,
    ease: 77,
    scenarios: ["long", "content", "general"],
    strengths: ["中文开放平台按量计费页列出缓存输入、输入、输出人民币价格", "同厂商另有 Token Plan 套餐入口"],
    weaknesses: ["Token Plan 与按量 API 是不同计费体系", "高并发高速模型需单独看 Token Plan 档位"],
    source: "https://platform.minimaxi.com/docs/guides/pricing-paygo",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "longcat-2-preview",
    type: "api",
    providerId: "longcat",
    name: "LongCat-2.0-Preview",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "公测免费；2.0 Preview 内测 1000万 tokens/2小时；暂不支持付费购买",
    context: "1M",
    maxOutput: "128K",
    quality: 82,
    ease: 76,
    scenarios: ["coding", "content", "long", "general"],
    strengths: ["官方快速开始页列入支持模型，标注为高性能 Agentic 模型", "2.0 Preview 内测额度为每两小时 1000 万 Tokens"],
    weaknesses: ["LongCat-2.0-Preview 当前处于内测阶段，仅向部分受邀开发者开放", "官方暂未发布付费单价，不能按 API 单价预算"],
    source: "https://longcat.chat/platform/docs/zh/",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "mimo-v25-pro",
    type: "api",
    providerId: "mimo",
    name: "Xiaomi MiMo-V2.5-Pro",
    displayTier: "flagship",
    displayRank: 1,
    input: 7,
    output: 21,
    cache: 1.4,
    priceCurrency: "CNY",
    priceUnit: "1M tokens",
    context: "1M",
    maxOutput: "128K",
    quality: 80,
    ease: 82,
    scenarios: ["coding", "content", "general"],
    strengths: ["官方 Pricing 文档列出国内模型单价，单位为元 / 1M tokens", "Token Plan 支持包月和包年订阅"],
    weaknesses: ["Token Plan 与常规 API 按量计费是不同体系", "超过 256K 输入时按长上下文价格计费"],
    source: "https://platform.xiaomimimo.com/static/docs/pricing.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "doubao-pro",
    type: "api",
    providerId: "volcengine",
    name: "豆包 Pro",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "官方价格待同步",
    context: "128K",
    quality: 80,
    ease: 80,
    scenarios: ["content", "service", "general"],
    strengths: ["云平台集成能力强", "适合客服、内容和企业应用"],
    weaknesses: ["实际价格可能受活动和资源包影响", "模型命名和版本需要持续校验"],
    source: "https://www.volcengine.com/product/ark",
    status: "pending",
    updated: "2026-04-27"
  },
  {
    id: "qwen-plus",
    type: "api",
    providerId: "aliyun",
    name: "Qwen3.6-Plus",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "官方价格待同步",
    context: "1M",
    quality: 82,
    ease: 82,
    scenarios: ["coding", "content", "service", "general"],
    strengths: ["阿里官方发布 Qwen3.6-Plus，默认 1M 上下文", "适合已有阿里云业务集成"],
    weaknesses: ["当前百炼官方价格页尚未给出 Qwen3.6-Plus 明确单价", "价格字段在官方价格页发布前保持待同步"],
    source: "https://www.alibabacloud.com/blog/603043",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "hunyuan-t1",
    type: "api",
    providerId: "tencent",
    name: "混元 T1",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "官方价格待同步",
    context: "64K",
    quality: 82,
    ease: 80,
    scenarios: ["content", "service", "general"],
    strengths: ["腾讯云生态和企业接入路径清晰", "适合已有腾讯云用户"],
    weaknesses: ["个人极致性价比不一定领先", "价格随模型版本和资源包变化"],
    source: "https://cloud.tencent.com/document/product/1729/97731",
    status: "pending",
    updated: "2026-04-24"
  },
  {
    id: "ernie-4",
    type: "api",
    providerId: "baidu",
    name: "文心 ERNIE 4",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "官方价格待同步",
    context: "128K",
    quality: 81,
    ease: 79,
    scenarios: ["content", "service", "general"],
    strengths: ["百度云与搜索、知识库场景结合较好", "适合中文企业应用"],
    weaknesses: ["当前样例价格待人工确认", "订阅和资源包口径需分开"],
    source: "https://cloud.baidu.com/product/wenxinworkshop",
    status: "pending",
    updated: "2026-04-22"
  },
  {
    id: "spark-max",
    type: "api",
    providerId: "xfyun",
    name: "讯飞星火 Max",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "官方价格待同步",
    context: "128K",
    quality: 80,
    ease: 84,
    scenarios: ["content", "audio", "general"],
    strengths: ["语音和教育办公生态突出", "对非开发者更友好"],
    weaknesses: ["纯文本 API 极致低价不是核心卖点", "多模态价格需要单独核对"],
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html#四、套餐与计费",
    status: "pending",
    updated: "2026-04-25"
  },
  {
    id: "jdcloud-coding-models",
    type: "api",
    providerId: "jdcloud",
    name: "官方订阅页未公开模型名",
    displayTier: "flagship",
    displayRank: 1,
    input: null,
    output: null,
    cache: null,
    priceText: "Coding Plan 特惠页动态展示，具体模型与价格以官网为准",
    priceCurrency: "CNY",
    priceUnit: "订阅套餐",
    context: "官方页面为准",
    quality: 76,
    ease: 78,
    scenarios: ["coding"],
    strengths: ["京东云官方页面确认 Coding Plan 特惠入口", "购买入口已指向官方中文订阅页"],
    weaknesses: ["静态 HTML 未公开结构化模型名、价格和额度表", "不把页面外推测信息写成确定值"],
    source: "https://www.jdcloud.com/cn/pages/codingplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "zhipu-glm-coding-lite",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "低至 ¥20",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "1,200",
    weeklyRequests: "12,000",
    monthlyRequests: "40,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 12,000 / 月 40,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "zhipu-glm-coding-pro",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "见中文官网",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://www.bigmodel.cn/glm-coding?cc=fission_glmcode_sub_v1&ic=UX7NF0VZ4S&n=v",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "zhipu-glm-coding-max",
    type: "plan",
    providerId: "zhipu",
    name: "GLM Coding Plan Max",
    planType: "Code Plan",
    recurringMonthly: "见中文官网",
    quarterly: "见中文官网",
    yearly: "见中文官网",
    request5h: "24,000",
    weeklyRequests: "180,000",
    monthlyRequests: "360,000",
    tokenLimit: "按请求额度",
    quota: "5h 24,000 / 周 180,000 / 月 360,000 请求",
    scenarios: ["coding"],
    discount: { label: "新用户首单 9 折" },
    source: "https://docs.bigmodel.cn/cn/coding-plan/overview",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-andante",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Andante",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥49",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 1 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 30 个；Kimi Code 1 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-moderato",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Moderato",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥99",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 4 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 60 个；Kimi Code 4 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-allegretto",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Allegretto",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥199",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 20 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 150 个；Kimi Code 20 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年更优惠" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "kimi-code-allegro",
    type: "plan",
    providerId: "kimi",
    name: "Kimi Allegro",
    planType: "会员 / Code Plan",
    recurringMonthly: "¥699",
    yearly: "年付更优惠",
    request5h: "以页面提示为准",
    weeklyRequests: "以页面提示为准",
    monthlyRequests: "Kimi Code 60 倍额度",
    tokenLimit: "统一额度池，按 token 消耗",
    quota: "Agent 约 360 个；Kimi Code 60 倍额度",
    scenarios: ["coding", "content"],
    discount: { label: "连续包年最高立省 ¥1,680" },
    source: "https://www.kimi.com/membership/pricing?track_id=ace3f1b9-bb9d-4941-887c-751e4b091694",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-basic",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Starter",
    planType: "Token Plan",
    recurringMonthly: "¥29",
    yearly: "¥290",
    request5h: "600",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 600 requests/5hrs",
    quota: "M2.7 600 requests/5hrs",
    scenarios: ["general"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-premium",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Plus",
    planType: "Token Plan",
    recurringMonthly: "¥49",
    yearly: "¥490",
    request5h: "1,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 1,500 requests/5hrs",
    quota: "M2.7 1,500 requests/5hrs",
    scenarios: ["general"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-business",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Max",
    planType: "Token Plan",
    recurringMonthly: "¥119",
    yearly: "¥1,190",
    request5h: "4,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7 4,500 requests/5hrs",
    quota: "M2.7 4,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-plus-highspeed",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Plus-Highspeed",
    planType: "Token Plan",
    recurringMonthly: "¥98",
    yearly: "¥980",
    request5h: "1,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 1,500 requests/5hrs",
    quota: "M2.7-highspeed 1,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-token-plan-max-highspeed",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Max-Highspeed",
    planType: "Token Plan",
    recurringMonthly: "¥199",
    yearly: "¥1,990",
    request5h: "4,500",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 4,500 requests/5hrs",
    quota: "M2.7-highspeed 4,500 requests/5hrs",
    scenarios: ["general", "team"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "minimax-coding-plan",
    type: "plan",
    providerId: "minimax",
    name: "MiniMax Token Plan Ultra-Highspeed",
    planType: "Token Plan",
    monthly: null,
    firstMonth: "-",
    recurringMonthly: "¥899",
    quarterly: "-",
    yearly: "¥8,990",
    request5h: "30,000",
    weeklyRequests: "官网未公开",
    monthlyRequests: "官网未公开",
    tokenLimit: "M2.7-highspeed 30,000 requests/5hrs",
    seats: "个人",
    quota: "M2.7-highspeed 30,000 requests/5hrs",
    tools: ["MiniMax API", "Token Plan"],
    quality: 84,
    ease: 86,
    scenarios: ["coding", "general"],
    strengths: ["官方 Token Plan 页面列出 M2.7 每 5 小时请求额度", "适合固定额度预算"],
    weaknesses: ["Token Plan 与按量 API 是不同计费体系", "不是通用后端批量 API 额度"],
    discount: { label: "包年约 8.3 折" },
    source: "https://platform.minimaxi.com/subscribe/token-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "aliyun-coding-plan-pro",
    type: "plan",
    providerId: "aliyun",
    name: "百炼 Coding Plan Pro",
    planType: "Code Plan",
    monthly: 200,
    firstMonth: "-",
    recurringMonthly: "¥200",
    quarterly: "-",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按模型调用次数扣额",
    seats: "个人",
    quota: "Pro 高级套餐；Lite 自 2026-03-20 起停止新购",
    tools: ["通义千问", "Claude Sonnet 4", "Claude Opus 4"],
    quality: 84,
    ease: 78,
    scenarios: ["coding"],
    strengths: ["官方 Coding Plan 页面列出 Pro 高级套餐价格和三类请求额度", "整合千问、GLM、Kimi、MiniMax 模型并兼容主流 AI 编程工具"],
    weaknesses: ["Lite 基础套餐已停止新购，不作为可购买档位展示", "套餐仅限编程工具交互使用，不得当作通用 API 调用"],
    source: "https://help.aliyun.com/zh/model-studio/coding-plan",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "aliyun-token-standard-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 标准坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥198/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "25,000 Credits/坐席",
    tokenLimit: "25,000 Credits/坐席/月",
    quota: "25,000 Credits/坐席/月；适合轻度使用 AI 辅助的团队成员",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-advanced-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 高级坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥698/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "100,000 Credits/坐席",
    tokenLimit: "100,000 Credits/坐席/月",
    quota: "100,000 Credits/坐席/月；适合日常高频使用 AI 编码的团队成员",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-premium-seat",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 尊享坐席",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥1,398/坐席",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "250,000 Credits/坐席",
    tokenLimit: "250,000 Credits/坐席/月",
    quota: "250,000 Credits/坐席/月；适合重度依赖 AI 编码的核心开发者",
    scenarios: ["coding", "team", "general"],
    discount: { label: "包月订阅；共享用量包可补充超额消耗" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "aliyun-token-shared-pack",
    type: "plan",
    providerId: "aliyun",
    name: "Token Plan 团队版 共享用量包",
    planType: "Token Plan 团队版",
    recurringMonthly: "¥5,000/个",
    yearly: "-",
    request5h: "无限制",
    weeklyRequests: "无限制",
    monthlyRequests: "625,000 Credits/个",
    tokenLimit: "625,000 Credits/个，有效期 1 个月",
    quota: "跨坐席共享；坐席额度超出后抵扣，多个包优先抵扣最近到期",
    scenarios: ["coding", "team", "general"],
    discount: { label: "到期未使用额度自动清零" },
    source: "https://help.aliyun.com/zh/model-studio/token-plan-overview",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "volcengine-coding-lite",
    type: "plan",
    providerId: "volcengine",
    name: "火山方舟 Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "¥40",
    quarterly: "¥99",
    yearly: "¥400",
    request5h: "1,200",
    weeklyRequests: "12,000",
    monthlyRequests: "40,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 12,000 / 月 40,000 请求",
    scenarios: ["coding"],
    discount: { label: "包季约 8.3 折" },
    source: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "volcengine-coding-pro",
    type: "plan",
    providerId: "volcengine",
    name: "火山方舟 Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "¥200",
    quarterly: "¥499",
    yearly: "¥2,000",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "包季约 8.3 折" },
    source: "https://www.volcengine.com/activity/codingplan?ac=MMAP8JTTCAQ2&rc=T84FFCKU",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "baidu-coding-lite",
    type: "plan",
    providerId: "baidu",
    name: "千帆 Coding Plan Lite",
    planType: "Code Plan",
    recurringMonthly: "¥40",
    firstMonth: "¥9.9",
    yearly: "-",
    request5h: "1,200",
    weeklyRequests: "9,000",
    monthlyRequests: "18,000",
    tokenLimit: "按请求额度",
    quota: "5h 1,200 / 周 9,000 / 月 18,000 请求",
    scenarios: ["coding"],
    discount: { label: "新客首月 ¥9.9，续费 ¥40/月" },
    source: "https://cloud.baidu.com/product/codingplan.html",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "baidu-coding-pro",
    type: "plan",
    providerId: "baidu",
    name: "千帆 Coding Plan Pro",
    planType: "Code Plan",
    recurringMonthly: "¥200",
    firstMonth: "¥49.9",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求额度",
    quota: "5h 6,000 / 周 45,000 / 月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "新客首月 ¥49.9，续费 ¥200/月" },
    source: "https://cloud.baidu.com/product/codingplan.html",
    status: "official",
    updated: "2026-04-29"
  },
  {
    id: "tencent-hy-token-lite",
    type: "plan",
    providerId: "tencent",
    name: "Hy 个人版-体验套餐 Lite",
    planType: "Token Plan",
    recurringMonthly: "¥39 起",
    yearly: "-",
    request5h: "按 Tokens 抵扣",
    weeklyRequests: "按 Tokens 抵扣",
    monthlyRequests: "3,500 万 Tokens",
    tokenLimit: "3,500 万 Tokens",
    quota: "3,500 万 Tokens；约 70 轮问答",
    scenarios: ["coding", "general"],
    discount: { label: "2026-04-30 至 05-06 Lite/Standard 享 5 折" },
    source: "https://cloud.tencent.com/act/pro/tokenplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "tencent-hy-token-standard",
    type: "plan",
    providerId: "tencent",
    name: "Hy 个人版-基础套餐 Standard",
    planType: "Token Plan",
    recurringMonthly: "见官网购买页",
    yearly: "-",
    request5h: "按 Tokens 抵扣",
    weeklyRequests: "按 Tokens 抵扣",
    monthlyRequests: "1 亿 Tokens",
    tokenLimit: "1 亿 Tokens",
    quota: "1 亿 Tokens；约 200 轮问答",
    scenarios: ["coding", "general"],
    discount: { label: "2026-04-30 至 05-06 Lite/Standard 享 5 折" },
    source: "https://cloud.tencent.com/act/pro/tokenplan",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "jdcloud-coding-lite",
    type: "plan",
    providerId: "jdcloud",
    name: "京东云 Coding Plan Lite",
    planType: "Code Plan",
    firstMonth: "¥19.9",
    recurringMonthly: "¥40",
    yearly: "-",
    request5h: "活动规则页未公开",
    weeklyRequests: "活动规则页未公开",
    monthlyRequests: "活动规则页未公开",
    tokenLimit: "按官方套餐页",
    quota: "1 个月订阅；新用户首订特惠 ¥19.9，售罄后原价 ¥40/月",
    scenarios: ["coding"],
    discount: { label: "新用户首购特惠每日 10:30 限量开放" },
    source: "https://developer.jdcloud.com/topics/4467",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "jdcloud-coding-pro",
    type: "plan",
    providerId: "jdcloud",
    name: "京东云 Coding Plan Pro",
    planType: "Code Plan",
    firstMonth: "¥99.9",
    recurringMonthly: "¥200",
    yearly: "-",
    request5h: "活动规则页未公开",
    weeklyRequests: "活动规则页未公开",
    monthlyRequests: "活动规则页未公开",
    tokenLimit: "按官方套餐页",
    quota: "1 个月订阅；新用户首订特惠 ¥99.9，售罄后原价 ¥200/月",
    scenarios: ["coding"],
    discount: { label: "新用户首购特惠每日 10:30 限量开放" },
    source: "https://developer.jdcloud.com/topics/4467",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-wuyou",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 无忧版",
    planType: "Code Plan",
    firstMonth: "¥3.9",
    recurringMonthly: "¥19",
    yearly: "-",
    request5h: "不限",
    weeklyRequests: "不限",
    monthlyRequests: "不限",
    tokenLimit: "焕新版请求次数不限",
    quota: "焕新版 2026-04-09 上线；请求次数不限，支持模型以订阅页展示为准",
    scenarios: ["coding"],
    discount: { label: "首购 ¥3.9/月，重复购买 ¥19/月" },
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html#四、套餐与计费",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-professional",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 专业版",
    planType: "Code Plan",
    recurringMonthly: "¥39",
    yearly: "-",
    request5h: "1,200",
    weeklyRequests: "9,000",
    monthlyRequests: "18,000",
    tokenLimit: "按请求次数周期性流控",
    quota: "5h 1,200 / 周 9,000 / 订阅月 18,000 请求",
    scenarios: ["coding"],
    discount: { label: "焕新版 2026-04-09 上线" },
    source: "https://www.xfyun.cn/doc/spark/CodingPlan.html#四、套餐与计费",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "xfyun-coding-efficient",
    type: "plan",
    providerId: "xfyun",
    name: "Astron Coding Plan 高效版",
    planType: "Code Plan",
    recurringMonthly: "¥199",
    yearly: "-",
    request5h: "6,000",
    weeklyRequests: "45,000",
    monthlyRequests: "90,000",
    tokenLimit: "按请求次数周期性流控",
    quota: "5h 6,000 / 周 45,000 / 订阅月 90,000 请求",
    scenarios: ["coding"],
    discount: { label: "焕新版 2026-04-09 上线" },
    source: "https://maas.xfyun.cn/packageSubscription?inviteCode=MAAS-A4227EAE",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-lite",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Lite",
    planType: "Token Plan",
    recurringMonthly: "¥39",
    yearly: "¥411.84",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "60M Credits",
    tokenLimit: "60M Credits/月；720M Credits/年",
    quota: "60M Credits/月；约 120 轮中复杂任务",
    scenarios: ["general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-standard",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Standard",
    planType: "Token Plan",
    recurringMonthly: "¥99",
    yearly: "¥1,045.44",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "200M Credits",
    tokenLimit: "200M Credits/月；2400M Credits/年",
    quota: "200M Credits/月；约 400 轮中复杂任务",
    scenarios: ["general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-pro",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Pro",
    planType: "Token Plan",
    recurringMonthly: "¥329",
    yearly: "¥3,474.24",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "700M Credits",
    tokenLimit: "700M Credits/月；8400M Credits/年",
    quota: "700M Credits/月；约 1,400 轮中复杂任务",
    scenarios: ["coding", "general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  },
  {
    id: "mimo-token-max",
    type: "plan",
    providerId: "mimo",
    name: "MiMo Token Plan Max",
    planType: "Token Plan",
    recurringMonthly: "¥659",
    yearly: "¥6,959.04",
    request5h: "按 Credits 抵扣",
    weeklyRequests: "按 Credits 抵扣",
    monthlyRequests: "1600M Credits",
    tokenLimit: "1600M Credits/月；19200M Credits/年",
    quota: "1600M Credits/月；约 3,200 轮中复杂任务",
    scenarios: ["coding", "general"],
    discount: { label: "首购 88 折；首次自动续费新用户 77 折/老用户 7 折；连续包年 88 折；夜间 0.8x 消耗" },
    source: "https://platform.xiaomimimo.com/static/docs/tokenplan/subscription.md",
    status: "official",
    updated: "2026-04-30"
  }
];

const reviewQueue = [
  {
    id: "rq-1",
    item: "deepseek-v4-pro",
    field: "输出价 / 百万 tokens",
    before: "¥24.00",
    after: "¥6.00",
    reason: "官方中文价格页显示 deepseek-v4-pro 2.5 折，输入缓存命中 ¥0.025、缓存未命中 ¥3、输出 ¥6 / 百万 tokens，优惠至北京时间 2026-05-31 23:59。",
    source: "https://api-docs.deepseek.com/zh-cn/quick_start/pricing"
  },
  {
    id: "rq-3",
    item: "百度千帆 ERNIE 4",
    field: "价格可信度",
    before: "自动抓取待确认",
    after: "需要人工复核",
    reason: "云文档价格入口多，需确认模型版本与资源包口径。",
    source: "https://cloud.baidu.com/product/wenxinworkshop"
  }
];

const scenarioLabels = {
  coding: "编程",
  content: "内容创作",
  long: "长文档",
  multimodal: "视频/多模态",
  audio: "语音/办公",
  service: "客服/知识库",
  general: "综合使用",
  team: "团队"
};

const statusLabels = {
  official: "官方确认",
  reviewed: "人工复核",
  estimated: "本站估算",
  reference: "参考页待官方核验",
  pending: "自动抓取待确认",
  stale: "价格可能过期"
};

const codePlanLabels = {
  none: "无官方订阅套餐",
  token: "有 Token Plan",
  pending: "套餐待核验",
  reference: "参考页待核验",
  available: "有订阅套餐",
  unknown: "官网未发布套餐"
};

const profileDefaults = {
  intensity: "medium",
  scenario: "content",
  users: "personal",
  preference: "value",
  access: "easy"
};

const state = {
  profile: { ...profileDefaults },
  wizardStep: 0,
  apiFilter: "all",
  planFilter: "all",
  homeTable: "api",
  libraryFilter: "all",
  librarySort: "priority",
  libraryQuery: "",
  expandedProviders: new Set(),
  officialData: null,
  officialDataError: null
};

const wizardSteps = [
  {
    key: "intensity",
    title: "你大概属于哪种使用强度？",
    options: [
      ["light", "轻度", "每天少量问答、写作或代码辅助。"],
      ["medium", "中度", "每天稳定使用，常处理长文档或持续编程。"],
      ["heavy", "重度", "高频 API、团队协作或批量自动化。"]
    ]
  },
  {
    key: "scenario",
    title: "主要用来做什么？",
    options: [
      ["coding", "编程", "代码生成、调试、重构、IDE 工具链。"],
      ["content", "内容创作", "文章、脚本、营销文案、改写润色。"],
      ["long", "长文档总结", "资料阅读、合同分析、研究笔记。"],
      ["multimodal", "视频/多模态", "视觉理解、脚本、语音和视频相关流程。"],
      ["service", "客服/知识库", "企业问答、机器人、知识库检索增强。"],
      ["general", "综合使用", "日常问答和多种任务混合。"]
    ]
  },
  {
    key: "users",
    title: "谁在使用？",
    options: [
      ["personal", "个人使用", "关注上手门槛、月成本和工具兼容。"],
      ["team", "多人使用", "关注额度共享、权限、预算上限和稳定性。"]
    ]
  },
  {
    key: "preference",
    title: "你更偏好什么？",
    options: [
      ["value", "最省钱", "满足需求前提下优先压低月成本。"],
      ["quality", "效果更好", "愿意为模型能力和稳定输出多付一些。"],
      ["safe", "稳定省心", "关注官方来源、文档、可持续价格。"],
      ["china", "国内服务优先", "优先国内厂商、中文文档和国内平台。"]
    ]
  },
  {
    key: "access",
    title: "你能接受 API 配置吗？",
    options: [
      ["easy", "尽量简单", "希望网页或套餐开箱即用。"],
      ["api-ok", "可以配置 API", "能接受 Key、代理、工具配置。"]
    ]
  }
];

function providerFor(item) {
  return providers.find((provider) => provider.id === item.providerId);
}

function yuan(value) {
  if (value === undefined || value === null) return "-";
  return `¥${Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 })}`;
}

function money(value, currency = "CNY") {
  if (value === undefined || value === null) return "-";
  const number = Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });
  return currency === "USD" ? `$${number}` : `¥${number}`;
}

function statusBadge(status) {
  return `<span class="status ${status}">${statusLabels[status] || status}</span>`;
}

function discountBadge(item) {
  return item.discount ? `<span class="badge discount">${item.discount.label}</span>` : "";
}

function scenarioTags(item) {
  return item.scenarios
    .slice(0, 3)
    .map((scenario) => `<span class="tag">${scenarioLabels[scenario] || scenario}</span>`)
    .join("");
}

function usagePreset(profile) {
  const presets = {
    light: { calls: 220, inputTokens: 1800, outputTokens: 900, cacheRate: 0.1 },
    medium: { calls: 1200, inputTokens: 3500, outputTokens: 1800, cacheRate: 0.2 },
    heavy: { calls: 6500, inputTokens: 5200, outputTokens: 2600, cacheRate: 0.32 }
  };
  const preset = presets[profile.intensity] || presets.medium;
  return profile.users === "team"
    ? { ...preset, calls: preset.calls * 4, cacheRate: Math.min(0.45, preset.cacheRate + 0.08) }
    : preset;
}

function estimateMonthlyCost(item, profile = state.profile) {
  if (item.type === "plan") {
    return item.monthly;
  }
  const usage = usagePreset(profile);
  const inputCost =
    (usage.calls * usage.inputTokens * ((1 - usage.cacheRate) * item.input + usage.cacheRate * (item.cache ?? item.input))) /
    1_000_000;
  const outputCost = (usage.calls * usage.outputTokens * item.output) / 1_000_000;
  return Math.max(1, inputCost + outputCost);
}

function scenarioScore(item, profile) {
  let score = 44;
  if (item.scenarios.includes(profile.scenario)) score += 34;
  if (profile.scenario === "multimodal" && (item.scenarios.includes("audio") || item.scenarios.includes("multimodal"))) score += 18;
  if (profile.scenario === "general" && item.scenarios.includes("general")) score += 18;
  if (profile.users === "team" && (item.scenarios.includes("team") || item.seats?.includes("多人"))) score += 16;
  if (profile.scenario === "coding" && item.type === "plan") score += 12;
  if (profile.scenario !== "coding" && item.type === "plan" && !item.scenarios.includes(profile.scenario)) score -= 16;
  return clamp(score, 0, 100);
}

function costScore(item, profile, allCosts) {
  const cost = estimateMonthlyCost(item, profile);
  const max = Math.max(...allCosts);
  const min = Math.min(...allCosts);
  if (max === min) return 80;
  return clamp(100 - ((cost - min) / (max - min)) * 82, 0, 100);
}

function easeScore(item, profile) {
  let score = item.ease;
  if (profile.access === "easy" && item.type === "api") score -= 16;
  if (profile.access === "api-ok" && item.type === "api") score += 8;
  if (profile.users === "team" && item.seats?.includes("多人")) score += 10;
  if (profile.preference === "china") score += 5;
  return clamp(score, 0, 100);
}

function riskScore(item) {
  let score = 72;
  if (item.status === "official") score += 16;
  if (item.status === "reviewed") score += 9;
  if (item.status === "pending") score -= 18;
  if (item.status === "stale") score -= 30;
  if (item.discount?.end === "结束时间待确认") score -= 10;
  return clamp(score, 0, 100);
}

function scoreItem(item, profile = state.profile) {
  const relevant = catalog.filter((entry) => entry.scenarios.includes(profile.scenario) || profile.scenario === "general");
  const verifiedRelevant = relevant.filter((entry) => entry.status === "official" || entry.status === "reviewed" || entry.status === "estimated");
  const pool = verifiedRelevant.length ? verifiedRelevant : relevant.length ? relevant : catalog;
  const costs = pool.map((entry) => estimateMonthlyCost(entry, profile));
  const dimensions = {
    cost: costScore(item, profile, costs),
    match: scenarioScore(item, profile),
    ability: item.quality,
    ease: easeScore(item, profile),
    risk: riskScore(item)
  };
  const weights = {
    value: { cost: 0.36, match: 0.25, ability: 0.18, ease: 0.11, risk: 0.1 },
    quality: { cost: 0.18, match: 0.26, ability: 0.34, ease: 0.1, risk: 0.12 },
    safe: { cost: 0.22, match: 0.22, ability: 0.18, ease: 0.16, risk: 0.22 },
    china: { cost: 0.28, match: 0.24, ability: 0.2, ease: 0.16, risk: 0.12 }
  }[profile.preference];
  const total = Object.entries(weights).reduce((sum, [key, weight]) => sum + dimensions[key] * weight, 0);
  return { total, dimensions };
}

function getRecommendations(profile = state.profile) {
  const relevant = catalog.filter((item) => item.scenarios.includes(profile.scenario) || item.scenarios.includes("general") || profile.scenario === "general");
  const verifiedRelevant = relevant.filter((item) => item.status === "official" || item.status === "reviewed" || item.status === "estimated");
  const recommendationPool = verifiedRelevant.length ? verifiedRelevant : relevant;
  const viable = recommendationPool
    .map((item) => ({ item, score: scoreItem(item, profile), cost: estimateMonthlyCost(item, profile) }));

  const byTotal = [...viable].sort((a, b) => b.score.total - a.score.total);
  const bestValue = byTotal[0];
  const stronger = [...viable].sort((a, b) => b.score.dimensions.ability + b.score.dimensions.match - (a.score.dimensions.ability + a.score.dimensions.match))[0];
  const safer = [...viable].sort((a, b) => b.score.dimensions.risk + b.score.dimensions.ease - (a.score.dimensions.risk + a.score.dimensions.ease))[0];

  const unique = [];
  [
    ["最划算选择", bestValue, "best"],
    ["效果更强选择", stronger, ""],
    ["省心选择", safer, ""]
  ].forEach(([title, candidate, variant]) => {
    if (!candidate) return;
    const duplicate = unique.find((entry) => entry.result.item.id === candidate.item.id);
    if (duplicate) {
      duplicate.titles.push(title);
    } else {
      unique.push({ titles: [title], result: candidate, variant });
    }
  });

  return unique;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function applyOfficialData(data) {
  if (!data?.models?.length) return;
  state.officialData = data;

  data.models.forEach((official) => {
    const item = catalog.find((entry) => entry.id === official.id);
    if (!item) return;

    item.name = official.name || item.name;
    item.input = official.cacheMissInput ?? item.input;
    item.cache = official.cacheHitInput ?? item.cache;
    item.output = official.output ?? item.output;
    item.priceCurrency = official.currency || item.priceCurrency;
    item.priceUnit = official.unit || item.priceUnit;
    item.priceText = official.priceText || item.priceText;
    item.originalInput = official.originalCacheMissInput ?? item.originalInput;
    item.originalCache = official.originalCacheHitInput ?? item.originalCache;
    item.originalOutput = official.originalOutput ?? item.originalOutput;
    item.context = official.context || item.context;
    item.maxOutput = official.maxOutput || item.maxOutput;
    item.displayTier = official.displayTier || item.displayTier;
    item.displayRank = official.displayRank ?? item.displayRank;
    item.source = official.sourceUrl || item.source;
    item.status = official.status || item.status;
    item.updated = official.verifiedAt || item.updated;

    if (official.discount) {
      item.discount = {
        label: official.discount.label,
        end: formatChinaTime(official.discount.endsAt),
        source: official.discount.source
      };
    }
  });

  data.plans?.forEach((official) => {
    const item = catalog.find((entry) => entry.id === official.id);
    if (!item) return;

    item.name = official.name || item.name;
    item.planType = official.planType || item.planType;
    item.firstMonth = official.firstMonth ?? item.firstMonth;
    item.recurringMonthly = official.recurringMonthly ?? item.recurringMonthly;
    item.quarterly = official.quarterly ?? item.quarterly;
    item.yearly = official.yearly ?? item.yearly;
    item.request5h = official.request5h ?? item.request5h;
    item.weeklyRequests = official.weeklyRequests ?? item.weeklyRequests;
    item.monthlyRequests = official.monthlyRequests ?? item.monthlyRequests;
    item.tokenLimit = official.tokenLimit ?? item.tokenLimit;
    item.quota = official.quota ?? item.quota;
    item.source = official.sourceUrl || item.source;
    item.status = official.status || item.status;
    item.updated = official.verifiedAt || item.updated;

    if (official.discount) item.discount = official.discount;
  });

  data.sources?.forEach((source) => {
    const provider = providers.find((entry) => entry.id === source.providerId);
    if (!provider) return;
    provider.updated = source.fetchedAt?.slice(0, 10) || provider.updated;
    provider.source = source.url || provider.source;
    provider.codePlanStatus = source.codePlanAvailability || provider.codePlanStatus;
    if (source.httpStatus && source.httpStatus >= 400) provider.status = "pending";
  });
}

function formatChinaTime(value) {
  if (!value) return "结束时间待确认";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return `北京时间 ${date.toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })}`;
}

function providerOrder(providerId) {
  const index = providers.findIndex((provider) => provider.id === providerId);
  return index === -1 ? 999 : index;
}

function displayTierLabel(item) {
  if (item.displayTier === "flagship") return "旗舰";
  if (item.displayTier === "subFlagship") return "次旗舰";
  return "待定";
}

function modelSort(a, b) {
  return providerOrder(a.providerId) - providerOrder(b.providerId) || (a.displayRank ?? 99) - (b.displayRank ?? 99) || b.quality - a.quality;
}

function limitApiModelsPerProvider(rows, limit = 2) {
  const buckets = new Map();
  rows.sort(modelSort).forEach((item) => {
    const list = buckets.get(item.providerId) || [];
    if (list.length < limit) {
      list.push(item);
      buckets.set(item.providerId, list);
    }
  });
  return [...buckets.values()].flat().sort(modelSort);
}

function renderQuickForm() {
  const quick = document.querySelector("#quick-form");
  quick.innerHTML = [
    quickSelect("intensity", "使用强度", wizardSteps[0].options),
    quickSelect("scenario", "主要用途", wizardSteps[1].options),
    quickSelect("users", "使用人数", wizardSteps[2].options),
    quickSelect("preference", "推荐偏好", wizardSteps[3].options)
  ].join("");
  quick.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", (event) => {
      state.profile[event.target.name] = event.target.value;
      renderAll();
    });
  });
}

function quickSelect(key, label, options) {
  return `
    <div class="field">
      <label for="quick-${key}">${label}</label>
      <select id="quick-${key}" name="${key}">
        ${options.map(([value, title]) => `<option value="${value}" ${state.profile[key] === value ? "selected" : ""}>${title}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderHotList() {
  const hot = document.querySelector("#hot-list");
  const cards = getRecommendations().map(({ titles, result }) => {
    const item = result.item;
    return `
      <article class="hot-card">
        <div class="meta-row">
          <span class="badge good">${titles.join(" / ")}</span>
          ${discountBadge(item)}
        </div>
        <strong>${providerFor(item).name} · ${item.name}</strong>
        <div class="mini-row">
          <span class="price">${yuan(result.cost)}<span class="subtle"> / 估算月</span></span>
          ${statusBadge(item.status)}
        </div>
        <p class="subtle">${item.strengths[0]}</p>
      </article>
    `;
  });
  hot.innerHTML = cards.join("");
}

function renderHomeTable() {
  const target = document.querySelector("#home-table");
  const rows = state.homeTable === "api"
    ? limitApiModelsPerProvider(catalog.filter((item) => item.type === "api")).slice(0, 8)
    : catalog.filter((item) => item.type === "plan").slice(0, 6);
  target.innerHTML = state.homeTable === "api" ? apiTable(rows, false) : planTable(rows, false);
  document.querySelectorAll("[data-home-table]").forEach((button) => {
    button.classList.toggle("active", button.dataset.homeTable === state.homeTable);
  });
}

function apiTable(rows, withToolbar = true) {
  return `
    <div class="table-shell">
      ${withToolbar ? `<div class="table-toolbar"><strong>${rows.length} 个 API 模型</strong><span class="subtle">主价均为人民币 / 百万 tokens</span></div>` : ""}
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>模型</th>
              <th>定位</th>
              <th>输入价</th>
              <th>输出价</th>
              <th>缓存命中</th>
        <th>上下文 / 输出</th>
              <th>适合场景</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (item) => `
                  <tr>
                    <td class="name-cell">
                      <strong>${providerFor(item).name} · ${item.name}</strong>
                      <span class="subtle">更新 ${item.updated}</span>
                      <div class="meta-row">${discountBadge(item)}</div>
                    </td>
                    <td><span class="tag">${displayTierLabel(item)}</span></td>
                    <td>${yuan(item.input)}</td>
                    <td>${yuan(item.output)}</td>
                    <td>${yuan(item.cache)}</td>
                    <td>${item.context}${item.maxOutput ? ` / ${item.maxOutput}` : ""}</td>
                    <td><div class="meta-row">${scenarioTags(item)}</div></td>
                    <td>${statusBadge(item.status)}</td>
                    <td><button class="small-btn" data-detail="${item.id}">详情</button></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function planTable(rows, withToolbar = true) {
  if (!rows.length) {
    return `
      <div class="table-shell">
        ${withToolbar ? `<div class="table-toolbar"><strong>0 个已核验 Code Plan</strong><span class="subtle">不会展示 API 估算或非官方组合方案</span></div>` : ""}
        <div class="hot-card">
          <strong>当前筛选下暂无 Code Plan</strong>
          <p class="subtle">Code Plan 只收录厂商官方明确发布的订阅/编程套餐。DeepSeek 目前未确认存在官方 Code Plan，因此不会出现在此榜单。</p>
        </div>
      </div>
    `;
  }
  return `
    <div class="table-shell">
      ${withToolbar ? `<div class="table-toolbar"><strong>${rows.length} 个订阅/组合方案</strong><span class="subtle">主价均为人民币 / 月</span></div>` : ""}
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th>平台 / 套餐</th>
              <th>类型</th>
              <th>首月 / 包月</th>
              <th>包季 / 包年</th>
              <th>支持模型</th>
              <th>5小时 / 周 / 月请求</th>
              <th>Token 上限</th>
              <th>权益</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (item) => `
                  <tr>
                    <td class="name-cell">
                      <strong>${providerFor(item).name} · ${item.name}</strong>
                      <span class="subtle">更新 ${item.updated}</span>
                      <div class="meta-row">${discountBadge(item)}</div>
                    </td>
                    <td>${item.planType || "编程套餐"}</td>
                    <td>${item.firstMonth || "-"} / ${item.recurringMonthly || yuan(item.monthly)}</td>
                    <td>${item.quarterly || "-"} / ${item.yearly || "-"}</td>
                    <td>${item.tools.slice(0, 3).join(" / ")}</td>
                    <td>${item.request5h || "-"} / ${item.weeklyRequests || "-"} / ${item.monthlyRequests || "-"}</td>
                    <td>${item.tokenLimit || "待核验"}</td>
                    <td>${item.quota}</td>
                    <td>${statusBadge(item.status)}</td>
                    <td><button class="small-btn" data-detail="${item.id}">详情</button></td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderFilters() {
  const options = [["all", "全部"], ["coding", "编程"], ["content", "内容创作"], ["long", "长文档"], ["service", "客服/知识库"], ["multimodal", "多模态"]];
  document.querySelector("#api-filters").innerHTML = options.map(([value, label]) => `<button data-api-filter="${value}" class="${state.apiFilter === value ? "active" : ""}">${label}</button>`).join("");
  document.querySelector("#plan-filters").innerHTML = options.map(([value, label]) => `<button data-plan-filter="${value}" class="${state.planFilter === value ? "active" : ""}">${label}</button>`).join("");
}

function renderPricingTables() {
  const apiRows = limitApiModelsPerProvider(
    catalog.filter((item) => item.type === "api" && (state.apiFilter === "all" || item.scenarios.includes(state.apiFilter)))
  );
  const planRows = catalog.filter((item) => item.type === "plan" && (state.planFilter === "all" || item.scenarios.includes(state.planFilter)));
  document.querySelector("#api-table").innerHTML = apiTable(apiRows);
  document.querySelector("#plan-table").innerHTML = planTable(planRows);
}

function renderWizard() {
  document.querySelector("#step-line").innerHTML = wizardSteps
    .map((_, index) => `<span class="step-dot ${index <= state.wizardStep ? "active" : ""}"></span>`)
    .join("");
  const step = wizardSteps[state.wizardStep];
  document.querySelector("#wizard").innerHTML = `
    <h2>${step.title}</h2>
    <div class="choice-grid">
      ${step.options
        .map(
          ([value, title, description]) => `
            <button class="choice-btn ${state.profile[step.key] === value ? "active" : ""}" data-choice-key="${step.key}" data-choice-value="${value}">
              <strong>${title}</strong>
              <span>${description}</span>
            </button>
          `
        )
        .join("")}
    </div>
    <div class="row-actions">
      <button class="ghost-btn" id="prev-step" ${state.wizardStep === 0 ? "disabled" : ""}>上一步</button>
      <button class="primary-btn" id="next-step">${state.wizardStep === wizardSteps.length - 1 ? "查看推荐" : "下一步"}</button>
    </div>
  `;
  renderProfileSummary();
}

function renderProfileSummary() {
  const summary = document.querySelector("#profile-summary");
  const labels = Object.fromEntries(wizardSteps.flatMap((step) => step.options.map(([value, title]) => [value, title])));
  const usage = usagePreset(state.profile);
  summary.innerHTML = `
    <div class="section-kicker">当前画像</div>
    <h2>${labels[state.profile.intensity]} · ${labels[state.profile.scenario]}</h2>
    <div class="detail-grid">
      <div class="metric-box"><small>使用人数</small><strong>${labels[state.profile.users]}</strong></div>
      <div class="metric-box"><small>推荐偏好</small><strong>${labels[state.profile.preference]}</strong></div>
      <div class="metric-box"><small>API 接受度</small><strong>${labels[state.profile.access]}</strong></div>
      <div class="metric-box"><small>估算请求</small><strong>${usage.calls.toLocaleString("zh-CN")} 次/月</strong></div>
    </div>
    <p class="subtle">估算会随使用强度和人数变化。重度或多人使用会自动放大月请求量，并提高缓存复用比例。</p>
  `;
}

function renderRecommendations() {
  const target = document.querySelector("#recommendations");
  const recommendations = getRecommendations();
  target.innerHTML = `
    <div class="section-head">
      <div>
        <div class="section-kicker">推荐结果</div>
        <h2>具体模型 / 套餐建议</h2>
      </div>
      <span class="freshness">规则评分模型 v1</span>
    </div>
    <div class="recommendation-grid">
      ${recommendations.map(({ titles, result, variant }) => recommendationCard(titles, result, variant)).join("")}
    </div>
    <div class="band">
      <div class="section-head">
        <div>
          <div class="section-kicker">详细对比</div>
          <h2>推荐池评分</h2>
        </div>
      </div>
      ${recommendationCompareTable()}
    </div>
  `;
}

function recommendationCard(titles, result, variant) {
  const item = result.item;
  const scores = result.score.dimensions;
  return `
    <article class="recommendation-card ${variant}">
      <div class="meta-row">
        <span class="badge good">${titles.join(" / ")}</span>
        ${discountBadge(item)}
      </div>
      <h3>${providerFor(item).name} · ${item.name}</h3>
      <div class="mini-row">
        <span class="price">${yuan(result.cost)}<span class="subtle"> / 估算月</span></span>
        ${statusBadge(item.status)}
      </div>
      <div class="score-row">
        <span class="subtle">综合分 ${Math.round(result.score.total)}</span>
        <span class="score-bar"><span style="width:${Math.round(result.score.total)}%"></span></span>
      </div>
      <ul class="reason-list">
        <li><strong>为什么推荐：</strong>${item.strengths[0]}</li>
        <li><strong>为什么不是唯一选择：</strong>${item.weaknesses[0]}</li>
        <li><strong>不适合：</strong>${item.weaknesses[1] || "对该场景没有明显硬伤，但仍需实际试用。"}</li>
        <li><strong>折扣/风险：</strong>${item.discount ? `${item.discount.label}，${item.discount.end}` : `暂无折扣，可信度 ${statusLabels[item.status]}`}</li>
      </ul>
      <div class="detail-grid">
        <div class="metric-box"><small>成本分</small><strong>${Math.round(scores.cost)}</strong></div>
        <div class="metric-box"><small>匹配分</small><strong>${Math.round(scores.match)}</strong></div>
        <div class="metric-box"><small>能力分</small><strong>${Math.round(scores.ability)}</strong></div>
        <div class="metric-box"><small>门槛分</small><strong>${Math.round(scores.ease)}</strong></div>
      </div>
      <div class="row-actions">
        <button class="small-btn" data-detail="${item.id}">查看详情</button>
      </div>
    </article>
  `;
}

function recommendationCompareTable() {
  const relevant = catalog.filter((item) => item.scenarios.includes(state.profile.scenario) || item.scenarios.includes("general") || state.profile.scenario === "general");
  const verifiedRelevant = relevant.filter((item) => item.status === "official" || item.status === "reviewed" || item.status === "estimated");
  const rows = (verifiedRelevant.length ? verifiedRelevant : relevant)
    .map((item) => ({ item, score: scoreItem(item), cost: estimateMonthlyCost(item) }))
    .sort((a, b) => b.score.total - a.score.total)
    .slice(0, 8);
  return `
    <div class="table-scroll">
      <table>
        <thead>
          <tr>
            <th>模型/套餐</th>
            <th>估算月成本</th>
            <th>综合</th>
            <th>成本</th>
            <th>匹配</th>
            <th>能力</th>
            <th>门槛</th>
            <th>风险</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ({ item, score, cost }) => `
                <tr>
                  <td class="name-cell"><strong>${providerFor(item).name} · ${item.name}</strong><span class="subtle">${item.type === "api" ? "API" : "Code Plan/组合"}</span></td>
                  <td>${yuan(cost)}</td>
                  <td>${Math.round(score.total)}</td>
                  <td>${Math.round(score.dimensions.cost)}</td>
                  <td>${Math.round(score.dimensions.match)}</td>
                  <td>${Math.round(score.dimensions.ability)}</td>
                  <td>${Math.round(score.dimensions.ease)}</td>
                  <td>${Math.round(score.dimensions.risk)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function codePlanStatus(provider, plans) {
  if (plans.length) {
    const types = [...new Set(plans.map((plan) => plan.planType || "订阅套餐"))];
    if (types.every((type) => type.includes("Token"))) return { key: "available", label: "有 Token Plan" };
    if (types.every((type) => type.includes("Code"))) return { key: "available", label: "有 Code Plan" };
    return { key: "available", label: "有订阅套餐" };
  }
  if (provider.codePlanStatus === "none") return { key: "none", label: "无官方订阅套餐" };
  if (provider.codePlanStatus === "unknown") return { key: "unknown", label: "官网未发布套餐" };
  return { key: "pending", label: codePlanLabels[provider.codePlanStatus] || "套餐待核验" };
}

function isOfficialItem(item) {
  return item.status === "official" || item.status === "reviewed";
}

function flagshipFor(provider) {
  const models = catalog
    .filter((item) => item.providerId === provider.id && item.type === "api")
    .sort(modelSort);
  return models.find((item) => isOfficialItem(item) && item.displayTier === "flagship") || models.find(isOfficialItem) || models[0];
}

function apiPriceText(model) {
  if (!model) return "待补充";
  if (model.priceText) return model.priceText;
  if (!isOfficialItem(model)) return "官方价格待同步";
  const currency = model.priceCurrency || "CNY";
  return `输入 ${money(model.input, currency)} / 输出 ${money(model.output, currency)} / 缓存 ${money(model.cache, currency)}`;
}

function planDiscountText(plan) {
  const discounts = [];
  if (plan.firstMonth && plan.firstMonth !== "-" && plan.firstMonth !== "待官方核验" && plan.firstMonth !== "参考页待核验") {
    discounts.push(`首月 ${plan.firstMonth}`);
  }
  if (plan.discount?.label) {
    discounts.push(plan.discount.label);
  } else if (plan.yearly && plan.recurringMonthly && plan.yearly !== "待官方核验" && plan.yearly !== "参考页待核验") {
    const monthly = Number(String(plan.recurringMonthly).replace(/[^\d.]/g, ""));
    const yearly = Number(String(plan.yearly).replace(/[^\d.]/g, ""));
    if (monthly && yearly) {
      const ratio = yearly / (monthly * 12);
      if (ratio > 0 && ratio < 1) discounts.push(`包年约 ${Math.round(ratio * 10)} 折`);
    }
  }
  return discounts.length ? discounts.join("；") : "暂无明确优惠";
}

function planPriceText(plan) {
  const parts = [
    plan.firstMonth && plan.firstMonth !== "-" ? `首月 ${plan.firstMonth}` : "",
    plan.recurringMonthly ? `包月 ${plan.recurringMonthly}` : plan.monthly ? `包月 ${yuan(plan.monthly)}` : "",
    plan.quarterly && plan.quarterly !== "-" ? `包季 ${plan.quarterly}` : "",
    plan.yearly && plan.yearly !== "-" ? `包年 ${plan.yearly}` : ""
  ].filter(Boolean);
  return parts.length ? parts.join(" / ") : "见官方套餐页";
}

function sourceLink(item, label = "官方来源") {
  const url = item?.sourceUrl || item?.source;
  return url ? `<a class="source-link" href="${url}" target="_blank" rel="noreferrer">${label}</a>` : "";
}

function planCard(plan) {
  const quotaLabel = plan.planType?.includes("Token") || plan.planType?.includes("会员") ? "额度" : "调用次数";
  const quotaText = plan.planType?.includes("Token") || plan.planType?.includes("会员")
    ? plan.quota || plan.tokenLimit || `5小时 ${plan.request5h || "-"} / 每周 ${plan.weeklyRequests || "-"} / 每月 ${plan.monthlyRequests || "-"}`
    : `5小时 ${plan.request5h || "-"} / 每周 ${plan.weeklyRequests || "-"} / 每月 ${plan.monthlyRequests || "-"}`;
  return `
    <article class="plan-card">
      <div class="plan-card-head">
        <h3>${plan.name}</h3>
        <span>${plan.planType || "订阅套餐"}</span>
      </div>
      <dl class="plan-fields">
        <div><dt>价格</dt><dd>${planPriceText(plan)}</dd></div>
        <div><dt>${quotaLabel}</dt><dd>${quotaText}</dd></div>
        <div><dt>优惠</dt><dd>${planDiscountText(plan)}</dd></div>
      </dl>
      ${sourceLink(plan, "套餐来源")}
    </article>
  `;
}

function providerPlans(provider) {
  return catalog.filter((item) => item.providerId === provider.id && item.type === "plan" && isOfficialItem(item));
}

function minPlanPrice(plans) {
  const prices = plans
    .map((plan) => {
      const candidates = [plan.recurringMonthly, plan.monthly, plan.firstMonth]
        .map((value) => Number(String(value ?? "").replace(/[^\d.]/g, "")))
        .filter((value) => Number.isFinite(value) && value > 0);
      return Math.min(...candidates);
    })
    .filter((value) => Number.isFinite(value));
  return prices.length ? Math.min(...prices) : Number.POSITIVE_INFINITY;
}

function providerMatchesFilter(provider, plans, flagship) {
  const query = state.libraryQuery.trim().toLowerCase();
  if (query) {
    const searchable = [
      provider.id,
      provider.name,
      flagship?.name,
      ...plans.flatMap((plan) => [plan.name, plan.planType, plan.quota, plan.tokenLimit])
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!searchable.includes(query)) return false;
  }

  if (state.libraryFilter === "available") {
    return plans.some((plan) => String(plan.planType || "").includes("Code"));
  }
  if (state.libraryFilter === "token") {
    return plans.some((plan) => String(plan.planType || "").includes("Token"));
  }
  if (state.libraryFilter === "discount") {
    return plans.some((plan) => planDiscountText(plan) !== "暂无明确优惠");
  }
  if (state.libraryFilter === "needs-review") {
    return !isOfficialItem(flagship) || provider.status === "pending" || !plans.length;
  }
  return true;
}

function sortedProviders(entries) {
  const order = new Map(providers.map((provider, index) => [provider.id, index]));
  return [...entries].sort((a, b) => {
    if (state.librarySort === "plan-count") {
      return b.plans.length - a.plans.length || order.get(a.provider.id) - order.get(b.provider.id);
    }
    if (state.librarySort === "api-input") {
      const aInput = isOfficialItem(a.flagship) ? Number(a.flagship.input) : Number.POSITIVE_INFINITY;
      const bInput = isOfficialItem(b.flagship) ? Number(b.flagship.input) : Number.POSITIVE_INFINITY;
      return aInput - bInput || order.get(a.provider.id) - order.get(b.provider.id);
    }
    if (state.librarySort === "updated") {
      return String(b.provider.updated).localeCompare(String(a.provider.updated)) || order.get(a.provider.id) - order.get(b.provider.id);
    }
    return order.get(a.provider.id) - order.get(b.provider.id);
  });
}

function renderPlanList(provider, plans) {
  if (!plans.length) return "";
  const isExpanded = state.expandedProviders.has(provider.id);
  const visiblePlans = isExpanded ? plans : plans.slice(0, 2);
  const hiddenCount = plans.length - visiblePlans.length;

  return `
    <div class="plan-list">${visiblePlans.map(planCard).join("")}</div>
    ${
      hiddenCount > 0 || isExpanded
        ? `<button class="toggle-plans" type="button" data-toggle-plans="${provider.id}" aria-expanded="${isExpanded}">${isExpanded ? "收起套餐" : `展开全部 ${plans.length} 个套餐`}</button>`
        : ""
    }
  `;
}

function renderSyncPanel() {
  const panel = document.querySelector("#sync-panel");
  if (!panel) return;
  const data = state.officialData;
  const hasError = Boolean(state.officialDataError);
  const sources = data?.sources || [];
  const reviewItems = data?.reviewQueue || [];
  const okSources = sources.filter((source) => source.httpStatus >= 200 && source.httpStatus < 400).length;
  const generatedAt = data?.generatedAt
    ? new Date(data.generatedAt).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : "使用内置数据";

  panel.innerHTML = `
    <div>
      <h2>数据同步状态</h2>
      <p class="${hasError ? "sync-warning" : ""}">
        ${
          hasError
            ? `官方同步数据加载失败，当前使用内置回退数据。${state.officialDataError}`
            : "自动同步只发布可解析的官方字段；未覆盖或动态页面会进入复核队列。"
        }
      </p>
    </div>
    <div class="sync-stats">
      <span><strong>${generatedAt}</strong><small>最近生成</small></span>
      <span><strong>${okSources}/${sources.length || "--"}</strong><small>来源可访问</small></span>
      <span><strong>${reviewItems.length}</strong><small>待复核</small></span>
    </div>
  `;
}

function renderChangePanel() {
  const target = document.querySelector("#change-panel");
  if (!target) return;

  const data = state.officialData;
  const models = data?.models || [];
  const plans = data?.plans || [];
  const reviewItems = data?.reviewQueue || [];
  const recentPlans = plans.slice(0, 4);
  const generatedAt = data?.generatedAt
    ? new Date(data.generatedAt).toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    : null;

  target.innerHTML = `
    <div class="change-head">
      <div>
        <h2>最近数据变化</h2>
        <p>${generatedAt ? `${generatedAt} 生成的官方同步摘要。` : "当前使用内置数据，官方同步摘要加载后会自动更新。"}</p>
      </div>
      <span class="freshness">${models.length} 模型 · ${plans.length} 套餐</span>
    </div>
    <div class="change-grid">
      <div class="change-card">
        <small>本次结构化</small>
        <strong>${models.length} 个 API 模型，${plans.length} 个套餐</strong>
      </div>
      <div class="change-card">
        <small>待人工复核</small>
        <strong>${reviewItems.length} 项</strong>
      </div>
      <div class="change-card wide">
        <small>最近解析套餐</small>
        <strong>${recentPlans.length ? recentPlans.map((plan) => plan.name).join("、") : "等待官方同步数据"}</strong>
      </div>
    </div>
  `;
}

function renderSourceDirectory() {
  const target = document.querySelector("#source-directory");
  if (!target) return;

  target.innerHTML = `
    <div class="source-directory-head">
      <div>
        <h2>官方来源列表</h2>
        <p>集中列出每个厂商当前使用的官网来源，便于上线后核查和用户交叉验证。</p>
      </div>
      <span class="freshness">${providers.length} 个厂商</span>
    </div>
    <div class="source-grid">
      ${providers
        .map((provider) => {
          const plans = providerPlans(provider);
          const planSources = [...new Set(plans.map((plan) => plan.source).filter(Boolean))].slice(0, 2);
          return `
            <article class="source-item">
              <h3>${provider.name}</h3>
              <p>最近校验 ${provider.updated}</p>
              <div class="source-links">
                <a href="${provider.source}" target="_blank" rel="noreferrer">价格 / 文档</a>
                ${
                  provider.purchaseUrl
                    ? `<a href="${provider.purchaseUrl}" target="_blank" rel="noreferrer">购买 / 订阅</a>`
                    : ""
                }
                ${planSources.map((source) => `<a href="${source}" target="_blank" rel="noreferrer">套餐来源</a>`).join("")}
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderProviderLibrary() {
  const grid = document.querySelector("#provider-grid");
  const lastUpdated = providers.map((provider) => provider.updated).sort().at(-1);
  const officialPlans = catalog.filter((item) => item.type === "plan" && isOfficialItem(item));
  document.querySelector("#freshness").textContent = lastUpdated ? `${lastUpdated} 校验` : "待校验";
  document.querySelector("#vendor-count").textContent = providers.length;
  document.querySelector("#plan-count").textContent = officialPlans.length;

  const entries = sortedProviders(
    providers
      .map((provider) => {
        const flagship = flagshipFor(provider);
        const plans = providerPlans(provider);
        return { provider, flagship, plans };
      })
      .filter(({ provider, flagship, plans }) => providerMatchesFilter(provider, plans, flagship))
  );

  grid.innerHTML = entries.length
    ? entries
        .map(({ provider, flagship, plans }) => {
      const codePlan = codePlanStatus(provider, plans);
      const purchaseUrl = provider.purchaseUrl || provider.source;
      const lowestPlanPrice = minPlanPrice(plans);

      return `
        <article class="provider-card" id="${provider.id}">
          <div class="card-main">
            <div class="card-head">
              <div class="provider-title">
                <span class="provider-mark">${provider.name.slice(0, 1)}</span>
                <div>
                  <h2 class="provider-name">${provider.name}<button class="anchor-btn" type="button" data-copy-anchor="${provider.id}" aria-label="复制 ${provider.name} 分享链接">#</button></h2>
                  <div class="meta-row">
                    ${statusBadge(provider.status)}
                    <span class="tag">${provider.region}</span>
                    <span class="tag">更新 ${provider.updated}</span>
                  </div>
                </div>
              </div>
              <div class="status-stack">
                <span class="status ${codePlan.key}">${codePlan.label}</span>
                <div class="meta-row">
                  <span class="tag">${plans.length || "无"} 个套餐</span>
                  ${Number.isFinite(lowestPlanPrice) ? `<span class="tag">低至 ${yuan(lowestPlanPrice)}/月</span>` : ""}
                </div>
              </div>
            </div>

            <div class="summary-grid">
              <div class="metric-box">
                <small>旗舰模型</small>
                <strong>${flagship ? flagship.name : "待补充"}</strong>
              </div>
              <div class="metric-box">
                <small>API 价格 / 百万 tokens</small>
                <strong class="price-line">${apiPriceText(flagship)}</strong>
              </div>
            </div>

            <section class="plan-section">
              <h3 class="section-title">订阅 / 套餐</h3>
              ${
                plans.length
                  ? renderPlanList(provider, plans)
                  : `<p class="empty-plan">${codePlan.label}。当前仅展示官网可核验的订阅或套餐。</p>`
              }
            </section>
          </div>

          <div class="card-actions">
            <a class="source-btn" href="${provider.source}" target="_blank" rel="noreferrer">官方来源</a>
            <a class="buy-btn" href="${purchaseUrl}" target="_blank" rel="noreferrer">跳转购买<span aria-hidden="true">→</span></a>
          </div>
        </article>
      `;
    })
        .join("")
    : `<div class="empty-library">当前筛选下没有匹配厂商。可以切回“全部”查看完整厂商库。</div>`;

  renderSyncPanel();
  renderChangePanel();
  renderSourceDirectory();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function bindLibraryControls() {
  document.querySelector("#library-search")?.addEventListener("input", (event) => {
    state.libraryQuery = event.target.value;
    state.expandedProviders.clear();
    renderProviderLibrary();
  });

  document.querySelector(".library-toolbar")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.libraryFilter = button.dataset.filter;
    state.expandedProviders.clear();
    document.querySelectorAll("[data-filter]").forEach((entry) => {
      entry.classList.toggle("active", entry.dataset.filter === state.libraryFilter);
      entry.setAttribute("aria-pressed", String(entry.dataset.filter === state.libraryFilter));
    });
    renderProviderLibrary();
  });

  document.querySelector("#library-sort")?.addEventListener("change", (event) => {
    state.librarySort = event.target.value;
    renderProviderLibrary();
  });

  document.querySelector("#provider-grid")?.addEventListener("click", (event) => {
    const anchorButton = event.target.closest("[data-copy-anchor]");
    if (anchorButton) {
      const id = anchorButton.dataset.copyAnchor;
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      window.history.replaceState(null, "", `#${id}`);
      window.navigator.clipboard?.writeText(url).catch(() => {});
      showToast("厂商链接已复制");
      return;
    }

    const button = event.target.closest("[data-toggle-plans]");
    if (!button) return;
    const providerId = button.dataset.togglePlans;
    if (state.expandedProviders.has(providerId)) {
      state.expandedProviders.delete(providerId);
    } else {
      state.expandedProviders.add(providerId);
    }
    renderProviderLibrary();
  });
}

async function boot() {
  bindLibraryControls();
  renderProviderLibrary();

  try {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 3000);
    const response = await fetch("./data/official-price-data.json", { cache: "no-store", signal: controller.signal });
    window.clearTimeout(timeoutId);
    if (response.ok) {
      applyOfficialData(await response.json());
    } else {
      state.officialDataError = `HTTP ${response.status}`;
    }
  } catch (error) {
    state.officialDataError = error?.name === "AbortError" ? "加载超时" : error?.message || "网络错误";
    console.warn("官方价格数据加载失败，使用内置回退数据。", error);
  }

  renderProviderLibrary();

  if (window.location.hash) {
    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
}

boot();
