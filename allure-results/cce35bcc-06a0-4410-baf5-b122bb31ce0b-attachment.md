# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountTransactionPage.spec.ts >> Account Transaction tests >>  Account Transaction
- Location: tests/accountTransactionPage.spec.ts:17:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/chromium-1248/chrome-linux64/chrome
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.64.1.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.46.1-focal ║
║ - required: mcr.microsoft.com/playwright:v1.64.1-focal ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```