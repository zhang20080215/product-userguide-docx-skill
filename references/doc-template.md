# Document Template

## Recommended Overall Structure

### PC-Oriented Products

1. 文档说明
2. 菜单结构总览
3. 一级菜单 A
4. 一级菜单 B
5. 一级菜单 C

### H5-Oriented Products

1. 文档说明
2. 页面结构总览
3. 登录
4. 首页
5. 训练
6. 教考
7. 成就
8. 我的
9. 诊疗工作站或其他上下文页面

## Recommended Section Structure

```text
X.X.X  页面名称
菜单路径：一级菜单 > 二级菜单 > 三级菜单
页面说明

X.X.X.1  页面功能说明
功能项 | 说明

X.X.X.2  操作步骤
1. 进入页面
2. 点击按钮
3. 填写/配置
4. 保存/确认
```

For H5 products, `菜单路径` can be replaced by a more natural path such as:

- `底部导航 > 教考`
- `首页 > 自主训练`
- `我的 > 设置 > 修改登录密码`

## Writing Pattern

### Menu Path

Use:

`菜单路径：资源管理 > 我的基础数据 > 查体`

### Page Description

Use one concise sentence describing the purpose of the page.

Example:

`查体管理页面用于维护虚拟病人接诊过程中的体格检查项目数据。`

### Function Table

Recommended columns:

- `功能项`
- `说明`

### Operation Steps

Write step-by-step.

If there is a screenshot:

- put it right after the relevant step
- add a figure caption
- if a workflow-trigger button leads to a downstream page, add the downstream screenshot under that step as well

## Caption Style

Use:

- `图2-1  查体管理页面`
- `图6-5-1  权限管理-设置权限弹窗`

Keep captions short and specific.

## Title Style

Prefer a formal product title such as:

`CliniTrek 平台用户使用说明书`

If the document only covers a partial scope, make the scope explicit in the title or document description.

## Overview Table Standard

The overview table should describe business meaning, not only generic page type.

Good:

- `创建考试第一步：填写考试基本信息`
- `病例训练工作站：病例训练主操作界面`
- `答题卡：查看题目作答进度与状态`

Avoid:

- `流程页`
- `详情页`
- `业务页面`
