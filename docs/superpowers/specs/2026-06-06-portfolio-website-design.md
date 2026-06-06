# 个人作品集网站 — 设计规格说明

**日期：** 2026-06-06
**对象：** 郑明栋 — Java 后端开发工程师

---

## 1. 项目目标

为求职场景构建个人作品集网站，面向技术面试官展示 Java 后端开发能力和项目经验。网站需要专业、清晰、加载快，突出技术硬实力。

## 2. 技术方案

- **技术栈：** 纯静态 HTML + CSS + JavaScript（零依赖）
- **部署：** GitHub Pages / Vercel 免费托管
- **兼容：** 桌面端 + 移动端响应式

## 3. 页面结构

单页滚动布局，固定顶部导航，平滑锚点滚动。

### 3.1 导航栏（sticky，4 项）

| 导航项 | 锚点 |
|--------|------|
| 关于 | #about |
| 技能 | #skills |
| 项目 | #projects |
| 经历 | #experience |

右上角：主题切换按钮（☀/☾），localStorage 记忆选择。

### 3.2 Hero / 关于（#about）

- 头像占位（圆形，首字"郑"）
- 姓名：郑明栋
- 职位：Java 后端开发工程师
- 一句话定位：专注分布式系统、高并发、亿级数据优化
- 联系方式（横向排列）：📧 zhengmingdongwy@163.com · 📱 17607120806 · 🎓 武汉大学珞珈学院 · 通信工程 · 本科
- 核心技能标签（圆角胶囊）：Spring Cloud / Kafka / Redis / MySQL 等

### 3.3 技能清单（#skills）

分类展示，2 列网格布局：

| 分类 | 内容 |
|------|------|
| 框架 | Spring Boot / Spring Cloud Alibaba / Spring MVC / MyBatis |
| 数据库 | MySQL / PostgreSQL / Mycat / Oracle |
| 中间件 | Kafka / Redis / Elasticsearch / RabbitMQ / Canal |
| 工具 | Nacos / Gateway / xxl-job / Flyway / Sentinel |

### 3.4 项目经验（#projects）

默认展示 4 个核心项目卡片，「展开更多」查看剩余 5 个（折叠动画）：

**核心 4 项目：**
1. CBS 业财资金管理系统（招银云创）— 支付结算 · 异步解耦 · 2w笔批量导入
2. 智慧云眼（云眼视界）— 亿级SQL优化 30s→1.5s · 架构升级
3. 天工研发管理平台（拓保软件）— 需求全周期 · 在线立项 · 生命周期管理
4. 智慧工会（招银云创）— Kafka · 分布式事务 · 团队指导

**折叠区 5 项目：**
5. Duck（追忆那年）— 地理位置社交 · ES优化 · 高并发
6. 忆年共享相册（追忆那年）— 千万用户 · 架构升级 · 消息推送
7. 玩转熊（追忆那年）— 广告对接 · 金币系统 · 支付宝对接
8. ASMS10000后台-优惠券（追忆那年）— 优惠券体系 · 混合支付
9. 创视云端（追忆那年）— 视频合成 · 第三方登录 · OSS

每张卡片结构：项目名 + 公司 | 技术栈/关键成果摘要 | 左侧蓝色色条

### 3.5 工作经历（#experience）

时间线布局，5 段经历：

1. **博彦科技** · 2026.03 — 至今 — 招证外包 · Java 后端
2. **拓保软件** · 2024.07 — 2026.03 — 招证外包 · 天工研发平台
3. **招银云创** · 2021.08 — 2024.04 — CBS + 智慧工会
4. **云眼视界** · 2020.04 — 2021.08 — 智慧云眼
5. **追忆那年** · 2017.07 — 2019.12 — 忆年相册 / Duck / 玩转熊

最近 3 段蓝色圆点高亮，早期 2 段灰色。教育背景已在 Hero 区展示，不在时间线重复。

### 3.6 页脚

简洁版权行：© 2026 郑明栋

## 4. 视觉设计

### 4.1 配色

**浅色模式：**
- 背景：#ffffff
- 卡片/区块背景：#f8fafc
- Hero 背景：渐变 #eff6ff → #dbeafe
- 主色：#2563eb（蓝）
- 标题：#0f172a（深灰黑）
- 正文：#475569（石板灰）
- 辅助文字：#94a3b8

**深色模式：**
- 背景：#0f172a
- 卡片/区块：#1e293b
- 主色：#38bdf8（天蓝）
- 标题：#f1f5f9
- 正文：#e2e8f0
- 辅助文字：#94a3b8

### 4.2 字体

系统字体栈：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif`

- 大标题：30px / Bold
- 区块标题：20px / Bold
- 副标题：15px / SemiBold / 蓝色
- 正文：13px / Regular
- 小标签：11px / Uppercase / 字母间距 1px

### 4.3 间距

- 区块内边距：36px 上下
- 卡片间距：10-12px
- 最大内容宽度：720px，居中

### 4.4 组件

- **技能标签：** 圆角胶囊（border-radius: 20px），浅蓝底 + 深蓝字
- **项目卡片：** 左侧 3px 蓝色色条 + 浅灰底，border-radius: 8px
- **时间线：** 2px 竖线 + 10px 圆点，border-left 实现
- **主题切换：** 导航栏按钮，CSS 变量切换 + localStorage

## 5. 交互

- **平滑滚动：** `scroll-behavior: smooth`
- **项目折叠：** JavaScript 控制展开/收起，CSS transition 动画
- **淡入动画：** Intersection Observer，滚动到可视区时添加 opacity/translateY 过渡
- **主题切换：** CSS 自定义属性（`data-theme` 属性在 `<html>` 上切换），localStorage 持久化
- **移动端菜单：** 导航项收缩为汉堡菜单（☰），点击展开

## 6. 文件结构

```
portfolio-website/
├── index.html          # 单页，包含全部内容
├── css/
│   └── style.css       # 全部样式（含主题变量、响应式）
├── js/
│   └── main.js         # 主题切换、折叠、滚动动画
└── docs/
    └── superpowers/
        └── specs/      # 设计文档
```

## 7. 浏览器兼容

- Chrome / Firefox / Safari / Edge 最近 2 个大版本
- 移动端 iOS Safari / Android Chrome
