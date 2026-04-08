---
name: product-userguide-docx
description: Generate or update a Chinese software product user guide in docx format from a live website. Use when Codex needs to log into a system, inspect real UI behavior, capture screenshots, and write a structured manual with screenshots under the matching operation steps. Supports both PC menu-based systems and mobile H5 products. Especially use for generating a new product manual, updating an existing manual, aligning a manual to a reference docx, checking whether every button click leads to a new page or popup, converting English route/page names into Chinese product terminology, documenting H5 bottom-tab and flow pages, and refining page-structure overview tables.
---

# Product User Guide DOCX

Use this skill to produce or refine a Chinese `.docx` product manual from a live system.

## Core Workflow

1. Confirm the basic inputs.
   Check:
   - website URL
   - login account/password
   - whether captcha or MFA is needed
   - reference document path, if any
   - screenshot output directory
   - target `.docx` path
   - scope for this round
   - whether to output a plan first
   - whether only one target file may be modified

2. Decide the product mode early.
   Classify the target as one of:
   - `pc`
   - `h5`

   Use `pc` when the product is organized mainly by first-, second-, and third-level menus.
   Use `h5` when the product is organized mainly by bottom tabs, homepage entry cards, list pages, detail pages, flow pages, and popup layers.

3. Read the reference docx first when provided.
   Extract:
   - title style
   - document description style
   - overview table style
   - section structure
   - screenshot placement style
   - numbering and caption style

4. Build the live page inventory.
   For `pc`:
   - first-level menus
   - second-level menus
   - third-level pages

   For `h5`:
   - bottom tabs
   - homepage shortcut entries
   - list pages
   - detail pages
   - flow pages
   - popup / selector / confirmation layers

5. Inspect the live site page by page.
   For each page, record:
   - menu path or page path
   - page purpose
   - filters
   - buttons
   - list row actions
   - popup/drawer/dropdown behavior
   - empty-state behavior
   - whether the page depends on upstream business context

6. Verify button outcomes by real clicks.
   Every important button must be classified as one of:
   - opens a new page
   - opens a popup/dialog
   - opens a drawer or selector
   - opens a dropdown/menu
   - shows a message only
   - disabled / gray / unavailable
   - requires upstream business data or parameters

7. Capture screenshots from the real UI.
   Rules:
   - page screens: capture the full visible page
   - popup/dialog screens: capture the popup only when possible
   - multi-step flows: capture each major step
   - button-triggered results: click first, then capture the actual result
   - H5 screens: use mobile viewport, not desktop viewport

8. Write each section in a consistent structure.
   Default structure:
   - menu path / page path
   - one-paragraph page description
   - page function description
   - operation steps
   - screenshots placed under the corresponding step

9. Update the target `.docx`.
   If the user explicitly names one target file, only update that file.

10. Perform final review.
    Confirm:
    - scope coverage is complete
    - overview table is useful and specific
    - important buttons are covered
    - button-triggered pages/popups are not omitted
    - English route names have been normalized into Chinese product terminology when needed
    - numbering and captions are consistent
    - the generated `.docx` opens normally

## Missing Information

Before starting site inspection or document generation, check whether the following are available:

- website URL
- login account and password
- whether captcha, SMS code, email code, or other MFA is required
- reference document path, if any
- screenshot output directory
- target `.docx` path
- scope to cover in this round
- whether the user wants a full plan first
- whether only one named target file may be modified

If key information is missing, ask only for the missing items.

When asking:

- prefer one compact grouped question
- avoid fragmented follow-ups
- keep the list short and practical
- if file edits are constrained to one target file, restate and respect that constraint
- if login may require real-time cooperation, explicitly ask whether captcha or MFA help is needed

## Required Behavior

- Always prioritize the live UI over the reference document.
- Never assume a button works until it has actually been clicked.
- Never stop at the entry page if the button is clearly a workflow trigger.
- For buttons like `去练习`, `开始`, `进入`, `创建`, `参加`, `下一步`, `提交`, `继续`, verify at least the next meaningful screen.
- If a page or button depends on upstream business context, state that explicitly.
- If a page shows `参数错误`, empty state, disabled actions, or missing data, document the current state truthfully.
- Convert route-based or English fallback titles into Chinese product terminology whenever possible.
- Do not place all screenshots at the top of a section; place them under the step that triggers them.
- For H5 products, describe structure in a way that matches H5 usage rather than forcing a PC-style tree.
- If the target `.docx` is locked by another process, ask the user to close it before rewriting.

## Naming and Structure Rules

- Prefer visible Chinese page titles over route names.
- If no stable Chinese title exists, infer the title from the entry button or business function.
- Only use route-derived titles as a last fallback.
- If route-derived titles are used, convert them into Chinese terminology before writing the document.
- The overview table must describe business meaning, not only generic labels like `流程页` or `详情页`.

## References

Read these files as needed:

- detailed workflow: [references/workflow.md](references/workflow.md)
- platform-specific rules: [references/platform-modes.md](references/platform-modes.md)
- screenshot rules: [references/screenshot-rules.md](references/screenshot-rules.md)
- document structure template: [references/doc-template.md](references/doc-template.md)
- naming rules: [references/page-naming.md](references/page-naming.md)
- final QA checklist: [references/review-checklist.md](references/review-checklist.md)

## Scripts

If repeated automation is needed, use the bundled scripts:

- capture helper skeleton: [scripts/capture-site.js](scripts/capture-site.js)

Extend or adapt the script for the current site instead of rewriting the whole workflow from scratch.
