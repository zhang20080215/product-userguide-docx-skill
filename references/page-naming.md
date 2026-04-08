# Page Naming Rules

## Priority Order

When deciding the page title to write into the manual, use this priority:

1. visible Chinese page title in the live UI
2. Chinese entry button or card title that leads to the page
3. Chinese business term inferred from the page function
4. route-based fallback converted into Chinese terminology

Do not directly output English route fragments unless there is no safer option.

## Route-Based Fallback Rule

If a page title must be inferred from a route:

- first identify the business meaning
- then convert it into Chinese terminology

Examples:

- `create-exam` -> `创建考试`
- `answer-paper` -> `答题卡`
- `record-detail` -> `学习记录详情`
- `work-station` -> `病例训练工作站`
- `ai-inquiry` -> `AI 问诊`

## Path Naming Rule

Page path text should also be Chinese whenever possible.

Good:

- `首页 > 自主训练`
- `底部导航 > 教考 > 创建考试 > 步骤一 基本信息`
- `我的 > 设置 > 修改登录密码`

Avoid:

- `训练 > subPagesQuestion/answer-paper/answer-paper`

## When the Title Is Still Unclear

If the page still has no stable title:

- describe it by business role, not route text
- mention in the description that the page depends on upstream business context
