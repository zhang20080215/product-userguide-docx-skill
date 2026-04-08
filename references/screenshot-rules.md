# Screenshot Rules

## General Rules

- Use live screenshots from the current website.
- Do not reuse a screenshot for a different action unless the UI result is truly identical.
- Do not claim a button opens a page until that action has been clicked and verified.

## What To Capture

### Page-Level Screens

Use a full visible page screenshot when the action leads to:

- a new page
- a new tab-like page state
- a dedicated editor page
- a list/detail page

### Popup Screens

Use a popup-only screenshot when the action opens:

- dialog
- confirmation box
- drawer
- language selector
- configuration popup

## Placement Rule

Put the screenshot under the step that triggers it.

Correct:

1. Click `新增人员`.
2. Screenshot of the add-person dialog.

Not recommended:

- all screenshots placed together at the beginning of the section

## Naming Convention

Use English, lowercase, underscore-separated names.

Recommended:

- `page_user_manage.png`
- `popup_user_add.png`
- `page_my_paper_preview.png`
- `popup_role_set_permission.png`

Avoid:

- `1.png`
- `截图(最终).png`
- `newnew.png`

## Special Cases

### Multi-Step Flows

If a flow has multiple real steps, capture each major step.

Examples:

- create exam step 1
- create exam step 2
- create exam step 3

### Workflow-Trigger Buttons

If a button clearly means the user is entering a workflow, do not stop at the current page.

Common examples:

- `去练习`
- `开始`
- `进入`
- `创建`
- `参加`
- `下一步`
- `提交`
- `继续`

For these buttons:

- capture the entry page
- click the button
- capture the next meaningful page or popup
- if the next page itself contains a major mode switch, capture that as well when it is important

### H5 Screens

For mobile H5 products:

- use a mobile viewport
- do not use desktop-sized screenshots
- keep page screenshots in mobile aspect ratio
- if a popup occupies most of the mobile screen, it is acceptable to capture the visible mobile screen rather than trying to isolate only the popup

### No-Data Pages

If current data is empty, the screenshot can still be valid if it truthfully shows:

- empty list
- prompt text
- disabled actions
- current message state

### Unstable Actions

If a button cannot produce a stable popup or page in the current environment:

- record the actual observed behavior
- describe the limitation in the doc
- do not fabricate a target screen

### Context-Dependent Pages

If a page only appears correctly when entered from an upstream business flow:

- keep the truthful screenshot
- explain that the page requires upstream parameters
- do not pretend the page can always be opened directly
