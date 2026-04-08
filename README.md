# product-userguide-docx

A Codex skill for generating or updating Chinese software product user guides in `.docx` format from live websites.

## Features

- Supports PC menu-based systems
- Supports mobile H5 products
- Logs into live systems and inspects real UI behavior
- Captures screenshots for pages, popups, and downstream workflow screens
- Places screenshots under the matching operation steps
- Verifies button-triggered pages and popups by actual clicks
- Normalizes route-style or English page names into Chinese product terminology
- Refines existing manuals against a reference `.docx`

## Repository Structure

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

## Install

Copy this folder into your Codex skills directory, for example:

```text
~/.codex/skills/product-userguide-docx
```

Or on this machine:

```text
C:\Users\zhang\.codex\skills\product-userguide-docx
```

## Typical Use

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

## Notes

- This repository contains the reusable skill only.
- Do not commit real customer documents, screenshots, credentials, or temporary debugging files.
