# product-userguide-docx

A Codex skill for generating or updating Chinese software product user guides in `.docx` format from live websites.

## What It Supports

- PC menu-based systems
- Mobile H5 products
- Live login and page inspection
- Screenshot capture for pages and popups
- Screenshot placement under matching operation steps
- Button-click verification for downstream pages and popups
- Chinese terminology normalization for route-based page names
- Refinement of existing user guides against a reference `.docx`

## Main Files

- `SKILL.md`: main skill instructions
- `references/`: workflow, naming, screenshot, template, and review rules
- `scripts/capture-site.js`: capture helper skeleton

## Install

Copy this folder into your Codex skills directory, for example:

```text
~/.codex/skills/product-userguide-docx
```

or on this machine:

```text
C:\Users\zhang\.codex\skills\product-userguide-docx
```

## Typical Use

Ask Codex to use the skill and provide:

- website URL
- login info
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
