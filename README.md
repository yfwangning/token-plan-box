# 🎯 Token Plan Box - 国内AI服务价格对比平台

[![GitHub](https://img.shields.io/badge/GitHub-yfwangning%2Ftoken--plan--box-blue)](https://github.com/yfwangning/token-plan-box)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

一站式对标国内主流 AI 厂商的 **Code Plan** 和 **Token Plan**，帮助开发者和企业快速对比价格、估算成本、做出最优选购决策。

## ✨ 项目特色

### 💰 全面的价格对比
- **实时抓取官方数据** - 支持 DeepSeek、小米 MiMo、阿里百炼、百度千帆、京东云、讯飞星辰等多家厂商
- **人民币本地化展示** - 所有价格以人民币标价，包含最新优惠和折扣状态
- **透明的数据来源** - 每条数据都附带官方来源链接，可信度标签清晰可见

### 🤖 智能选购助手
- **30秒问答式推荐** - 基于场景、预算、性能需求的智能引导
- **多维度评分系统** - 综合考虑成本、场景匹配度、能力完整性、使用门槛、时效风险
- **成本估算工具** - 自动计算人民币成本，支持模型组合方案

### 📊 双视角榜单展示
- **API 定价榜** - 按厂商展示旗舰和次旗舰模型，重点呈现上下文长度、输入/输出价格、缓存定价
- **Code Plan 榜** - 官方套餐清晰标识，参考页套餐标记为"待核验"，API 估算方案单独展示

### ⚙️ 自动化数据维护
- **每日官方数据更新** - GitHub Actions 每天北京时间 09:00 自动抓取官方价格
- **结构化解析器** - 对接主流厂商 API 价格页和套餐页，变更自动检测
- **人工审核流程** - 解析失败、页面变化自动进入审核队列，保证数据准确

## 🚀 快速开始

### 本地运行

```bash
# 启动本地开发服务器（端口 5178）
python3 -m http.server 5178
```

打开浏览器访问：

```text
http://127.0.0.1:5178/
```

### 上线前验证

```bash
# 检查 JavaScript 语法
node --check app.js

# 运行数据验证脚本
node scripts/validate-site-data.mjs
```

**验证脚本会检查：**

- ✅ 生成数据中不得出现美元或 USD（人民币本地化）
- ✅ 每个厂商必须有官方来源；有订阅套餐的厂商必须有购买入口
- ✅ 官方套餐必须有价格字段和官方来源
- ✅ 官方 API 模型必须有价格字段和官方来源
- ✅ 每个厂商必须有旗舰或 API 模型条目

### 每日官方数据更新

官方来源集中维护在 `data/vendor-sources.json`。运行：

```bash
node scripts/update-official-data.mjs
```

脚本会抓取每个厂商的官方页面，生成 `data/official-price-data.json` 和人工可读的 `data/update-report.md`：

- 已实现解析器的厂商会输出结构化 API 模型价格与订阅套餐
- 未实现解析器的厂商只做官方页面快照和 SHA-256 变更检测
- 解析失败、页面变化、抓取失败、缺少解析器都会进入 `reviewQueue`，不会自动发布为官方价格
- `data/update-report.md` 会列出本次解析到的套餐、结构化字段变化、待审核项目和来源健康状况

**已实现的解析器：**

- ✅ DeepSeek API 价格
- ✅ 小米 MiMo API 价格与 Token Plan
- ✅ 阿里百炼 Token Plan 团队版
- ✅ 百度千帆 Coding Plan
- ✅ 京东云 Coding Plan 活动规则价格
- ✅ 讯飞星辰 MaaS Astron Coding Plan 焕新版

GitHub Actions 已配置 `.github/workflows/daily-price-update.yml`，每天北京时间 09:00 自动运行一次并提交更新后的 `data/official-price-data.json` 与 `data/update-report.md`。

## 📋 已实现的功能

- 🏠 首页热门推荐和 API / Code Plan 双榜
- 🤔 30 秒问答式智能建议向导
- ⭐ 基于成本、场景匹配、能力、使用门槛、时效风险的透明评分
- 💴 人民币主价展示、折扣状态、可信度标签和官方来源链接
- 🏪 供应商库、模型/套餐详情弹窗、价格变更审核台演示
- 📊 API 定价页默认每个厂商最多展示 2 个模型，优先旗舰模型和次旗舰模型
- 🏆 Code Plan 榜展示厂商官方套餐和参考页待核验套餐；API 估算、本站组合方案不得进入 Code Plan 榜，未核验套餐必须显著标记

## 📁 项目结构

```
token-plan-box/
├── README.md                          # 本文件
├── index.html                         # 首页
├── app.js                            # 核心应用逻辑
├── data/
│   ├── vendor-sources.json           # 厂商官方来源配置
│   ├── official-price-data.json      # 每日自动抓取的结构化官方价格
│   └── update-report.md              # 每日更新报告
├── scripts/
│   ├── update-official-data.mjs      # 官方数据自动更新脚本
│   └── validate-site-data.mjs        # 数据验证脚本
├── _headers                          # Cloudflare Pages / Netlify 安全头配置
├── robots.txt                        # 搜索引擎爬虫配置
└── css/                              # 样式文件
```

## 📊 展示与同步规则

- 模型名称、上下文长度、最大输出、输入价、输出价、缓存价必须来自厂商官方文档或官方价格页
- 每个厂商的 API 榜默认最多展示 2 个模型，一般是旗舰和次旗舰；超过 2 个时必须按 `displayRank` 排序截断
- Code Plan 优先采用厂商官方明确声明的套餐；来自参考对比表的套餐必须标记为"参考页待核验"，不得标为官方确认
- 未实现解析器的厂商只进入快照监控和审核队列，不自动覆盖前台官方价格
- 抓取失败或解析失败时，脚本会保留上一版已确认官方数据，并将问题写入 `reviewQueue`

## 📝 数据说明

当前为可运行 MVP 的结构化样例数据，用来验证产品、UI 和推荐逻辑。DeepSeek 条目已按官方中文价格页复核到 2026-04-29：

- `deepseek-v4-flash`：上下文 1M，最大输出 384K，缓存命中输入 ¥0.02 / 百万 tokens，缓存未命中输入 ¥1 / 百万 tokens，输出 ¥2 / 百万 tokens
- `deepseek-v4-pro`：上下文 1M，最大输出 384K，2.5 折期间缓存命中输入 ¥0.025 / 百万 tokens，缓存未命中��入 ¥3 / 百万 tokens，输出 ¥6 / 百万 tokens

其他厂商条目仍是产品演示样例，已在界面中标为"自动抓取待确认"。生产上线前应接入半自动抓取和人工审核流程，并逐条复核官方价格、折扣和套餐时效。

## 🚀 部署说明

- `robots.txt` 已允许搜索引擎抓取全站
- `_headers` 提供 Cloudflare Pages / Netlify 类静态平台可用的基础安全头和缓存策略
- 正式域名确定后，再补 `canonical`、绝对地址 `og:image` 和 `sitemap.xml`

## 🎨 技术栈

- **前端** - HTML + CSS + Vanilla JavaScript（83.1% JavaScript, 13.1% CSS, 3.8% HTML）
- **数据更新** - Node.js 脚本 + GitHub Actions 自动化
- **托管** - 静态文件托管平台（Cloudflare Pages / Netlify 等）

## 🤝 贡献指南

欢迎提交 PR 或 Issue！

### 如何参与：
1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献方向：
- 📊 新增厂商支持和价格解析器
- 🐛 修复已发现的 bug
- ✨ 改进 UI 和用户体验
- 📖 完善文档和示例

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

**让每个开发者都能找到最适合自己的 AI 服务方案！** 🚀
