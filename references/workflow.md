# Workflow

## End-to-End SOP

1. Clarify the target output.
   Confirm:
   - exact `.docx` path
   - screenshot directory
   - whether only one file may be modified
   - whether the work is `generate` or `refine`

2. Clarify login conditions.
   Confirm:
   - account and password
   - captcha or MFA
   - VPN / intranet / browser constraints
   - account permissions

3. Decide the platform mode.
   Classify the target as:
   - `pc`
   - `h5`

4. Read the reference document.
   Extract:
   - title style
   - document description style
   - overview table style
   - section structure
   - screenshot caption style
   - chapter numbering style

5. Create the live page inventory.
   For `pc`, build the actual first-/second-/third-level tree.
   For `h5`, build the actual bottom-tab / homepage-entry / list / detail / flow / popup structure.

6. Inspect every page in scope.
   For each page, identify:
   - visible filters
   - primary buttons
   - list row actions
   - dialogs and drawers
   - page-to-page flows
   - empty-state behaviors
   - whether the page depends on upstream data or parameters

7. Verify button outcomes.
   Every important button should be categorized as one of:
   - opens a new page
   - opens a popup/dialog
   - opens a drawer/selector
   - opens a dropdown/menu
   - shows a message only
   - disabled or unavailable
   - requires upstream business context

8. Follow workflow-trigger buttons beyond the entry page.
   For buttons like:
   - `去练习`
   - `开始`
   - `进入`
   - `创建`
   - `参加`
   - `下一步`
   - `提交`
   - `继续`

   verify at least the next meaningful page or popup and capture it.

9. Capture screenshots.
   Capture:
   - base page
   - button-triggered page
   - dialog after click
   - meaningful steps in multi-step flows
   - downstream screens for workflow-trigger buttons

10. Normalize naming before writing.
   Convert English route-style titles into Chinese product terminology when the live UI does not expose a stable Chinese page title.

11. Write sections.
   Write by actual live structure, not guessed architecture.

12. Insert screenshots under the matching operation step.
   Example:
   - step: click add button
   - screenshot: add dialog

13. Generate or update the target `.docx`.

14. Perform final review.
   Verify:
   - structure coverage
   - button coverage
   - figure numbering
   - screenshot caption correctness
   - chapter numbering
   - context-dependent pages are described truthfully
   - document opens normally

## Coverage Priority

When time is limited, prioritize these pages first:

1. pages with create/edit/delete actions
2. pages with complex flows
3. pages with nested actions inside list rows
4. pages with hidden or condition-based buttons
5. H5 workflow entry pages and their first downstream page

## Truthfulness Rule

If current data or permissions prevent a full workflow, document the live state exactly.

Good examples:

- current account has no records pending review
- button exists but is gray and not clickable
- current version does not provide homepage jump from this entry
- current page requires upstream case/exam parameters and cannot be used as an independent entry

Do not fabricate screenshots or workflows.
