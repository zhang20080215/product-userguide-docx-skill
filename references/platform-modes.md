# Platform Modes

## PC Mode

Use `pc` mode when the system is mainly organized by:

- first-level menus
- second-level menus
- third-level pages
- list pages with toolbar buttons
- row actions
- desktop dialogs or drawers

### PC Mode Output Pattern

- menu structure overview should show first-, second-, and third-level menus
- each section should follow the actual menu tree
- menu path should use `一级菜单 > 二级菜单 > 三级菜单`

## H5 Mode

Use `h5` mode when the system is mainly organized by:

- bottom tabs
- homepage cards / shortcut entries
- list pages
- detail pages
- flow pages
- popup layers / selectors / confirmations

### H5 Mode Output Pattern

- do not force every page into a PC-style menu tree
- describe pages by actual usage path, such as:
  - `底部导航 > 教考`
  - `首页 > 自主训练`
  - `我的 > 设置 > 修改登录密码`
- treat these as important H5 page types:
  - homepage
  - bottom-tab root page
  - shortcut entry page
  - list page
  - detail page
  - flow step page
  - popup/selector page
  - context-dependent page

## Context-Dependent Pages

Some pages require upstream business parameters, such as:

- case id
- exam id
- paper id
- record id

When this happens:

- mark the page as context-dependent
- explain that it should be entered from an upstream page
- keep the screenshot if it truthfully shows the current state
- do not write it as a standalone page that users can always open directly

## Overview Table Standard

The overview table must not be vague.

Good:

- `创建考试第一步：填写考试基本信息`
- `病例训练工作站：病例训练主操作界面`
- `答题卡：查看题目作答进度与状态`

Avoid:

- `流程页`
- `详情页`
- `业务页面`
