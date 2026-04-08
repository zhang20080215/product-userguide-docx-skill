# product-userguide-docx

A Codex skill for generating or updating Chinese software product user guides in `.docx` format from live websites.

一个用于生成或更新中文产品使用说明书的 Codex Skill，适用于基于真实网站页面输出 `.docx` 文档的场景。

## Features | 功能特性

- Supports PC menu-based systems
- Supports mobile H5 products
- Logs into live systems and inspects real UI behavior
- Captures screenshots for pages, popups, and downstream workflow screens
- Places screenshots under the matching operation steps
- Verifies button-triggered pages and popups by actual clicks
- Normalizes route-style or English page names into Chinese product terminology
- Refines existing manuals against a reference `.docx`

- 支持 PC 端菜单式系统
- 支持移动端 H5 产品
- 支持登录真实系统并核查实际页面行为
- 支持页面、弹窗以及流程后续页面截图
- 支持将截图放到对应操作步骤下
- 支持逐按钮验证点击后产生的新页面或弹窗
- 支持将英文路由名或技术页名转换为中文产品术语
- 支持参考既有 `.docx` 对说明书进行二次优化

## Repository Structure | 仓库结构

```text
.
├─ SKILL.md
├─ agents/
│  └─ openai.yaml
├─ references/
│  ├─ workflow.md
│  ├─ platform-modes.md
│  ├─ screenshot-rules.md
│  ├─ doc-template.md
│  ├─ page-naming.md
│  └─ review-checklist.md
└─ scripts/
   └─ capture-site.js
```

## Install | 安装方式

Copy this folder into your Codex skills directory, for example:

```text
~/.codex/skills/product-userguide-docx
```

Or on this machine:

```text
C:\Users\zhang\.codex\skills\product-userguide-docx
```

将本仓库复制到 Codex 的 skills 目录即可，例如：

```text
~/.codex/skills/product-userguide-docx
```

在当前这台机器上对应目录为：

```text
C:\Users\zhang\.codex\skills\product-userguide-docx
```

## Typical Use | 典型用法

Ask Codex to use the skill and provide:

- website URL
- login information
- reference docx path, if any
- screenshot directory
- target docx path
- scope to cover

Example:

```text
请使用 product-userguide-docx skill。
网站地址：https://example.com
账号：demo
密码：demo123
截图目录：D:\work\screenshots
目标docx：D:\work\产品使用说明书.docx
先输出完整计划，确认后执行。
```

建议在调用时尽量明确这些信息：

- 网站地址
- 登录账号和密码
- 是否有验证码或二次验证
- 参考文档路径（如有）
- 截图保存目录
- 目标 docx 路径
- 本次覆盖范围
- 是否先输出计划再执行

## Recommended Scenarios | 推荐场景

- Generate a new product user guide from a live system
- Update an existing manual after product iteration
- Align a manual to a reference docx style
- Verify whether every important button click is covered
- Build a mobile H5 manual with mobile-sized screenshots

- 基于真实系统生成新的产品使用说明书
- 产品迭代后更新已有说明书
- 按参考文档统一说明书风格
- 核查是否覆盖每一个重要按钮点击后的结果页
- 生成带有移动端尺寸截图的 H5 说明书

## Notes | 注意事项

- This repository contains the reusable skill only.
- Do not commit real customer documents, screenshots, credentials, or temporary debugging files.

- 本仓库仅包含可复用的 Skill 本体。
- 不要提交真实客户文档、业务截图、账号密码或临时调试文件。
