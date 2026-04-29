<!-- Copilot instructions for PLAYWRIGHTWITHAI repository -->
# Copilot / AI Agent Instructions

Brief, task-focused guidance to help an AI coding assistant be productive in this repository.

- Project type: Node.js (CommonJS) repository containing learning material and Playwright test examples.
- Primary test runner: Playwright Test configured in `playwright.config.js` (testDir: `./tests`).

Key workflows
- Install dependencies: `npm install` (no scripts are defined in `package.json`).
- Install Playwright browsers: `npx playwright install`.
- Run tests: `npx playwright test` (or target files under the `tests/` folder).

Architecture & conventions (what matters)
- This repo is a collection of chaptered example files (JS scripts) organized under `ChapterXX_*` directories.
  - Examples are primarily educational scripts, not a packaged app.
  - Playwright tests live under `tests/` (see `playwright.config.js`) and may be executed across `chromium`, `firefox`, and `webkit` projects.
- Repository `package.json` sets `type: "commonjs"` — prefer CommonJS `require/module.exports` patterns when adding files that integrate with existing configs.
- `playwright.config.js` uses `module.exports` and configures headless runs, `trace: 'on-first-retry'`, and HTML reports (open: 'never'). Avoid changing these without justification.

Patterns the AI should follow
- Keep edits minimal and localized: examples and chapters are independent; prefer adding new example files in the appropriate `ChapterXX_*` folder.
- Tests: put Playwright tests under `tests/` and follow the existing runner expectations (CommonJS config). Use `test.describe` / `test()` from `@playwright/test` as seen in `e2e/example.spec.js`.
- Don't add global npm scripts silently — this repo expects explicit `npx` usage. If adding scripts, explain them in `README.md`.

Files and places to reference when making changes
- Playwright config: [playwright.config.js](../playwright.config.js)
- Root README with setup and run commands: [README.md](../README.md)
- Example chapter (reference for file layout and style): [Chapter08_Function_Object_String/Type1_Function.js](../Chapter08_Function_Object_String/Type1_Function.js)
- Example Playwright spec: [e2e/example.spec.js](../e2e/example.spec.js)
- CI workflow: [.github/workflows/playwright.yml](workflows/playwright.yml) — runs on push/PR and executes `npm install`, `npx playwright install`, and `npx playwright test`.

CI artifacts and local test examples
- The workflow uploads the Playwright HTML report at `playwright-report/` as an artifact named `playwright-report` (retention 30 days).
- To open the last local HTML report after a test run:

```powershell
npx playwright show-report
```

- Run a single test file locally (all browsers):

```powershell
npx playwright test tests/example.spec.js
```

- Run tests for a single browser (project name from `playwright.config.js`):

```powershell
npx playwright test -p chromium
```
Safety & expectations
- Preserve educational content and code style; do not refactor whole chapters unless asked.
If anything in these instructions is unclear or you want the agent to apply a specific change pattern (e.g., add linting or CI integration), ask for clarification and provide the exact scope.
