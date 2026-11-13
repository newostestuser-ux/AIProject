# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountstatementPage.spec.ts >> Account Statement tests >> @Regression Account Statement
- Location: tests\accountstatementPage.spec.ts:18:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login/i
Received string:  "https://www.testerrank.com/banking/dashboard"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en" class="Sms4YG_variable FlyLvG_variable h-full antialiased light">…</html>
       - unexpected value "https://www.testerrank.com/banking/dashboard"

```

```yaml
- link "Skip to main content":
  - /url: "#main-content"
- main:
  - complementary "QA Automation Sandbox Banner":
    - link "TesterRank":
      - /url: /
    - text: "| QA Sandbox ISB NetBanking Demo Portal — Interactive sandbox for Selenium, Playwright & API automation practice"
    - navigation "Sandbox quick navigation":
      - link "📋 Test Cases":
        - /url: /practice/banking/test-cases
      - link "🚀 Automation Exercises":
        - /url: /practice/banking/exercises
      - link "All Portals":
        - /url: /practice
      - link "← Exit Sandbox":
        - /url: /
  - complementary:
    - text: "ISB NetBanking RS Rahul Sharma A/C: ****7890"
    - navigation:
      - link "Dashboard":
        - /url: /banking/dashboard
        - img
        - text: Dashboard
      - link "Notifications":
        - /url: /banking/notifications
        - img
        - text: Notifications
      - link "Accounts":
        - /url: /banking/dashboard
        - img
        - text: Accounts
      - link "Fund Transfer":
        - /url: /banking/transfer
        - img
        - text: Fund Transfer
      - link "Transactions":
        - /url: /banking/transactions
        - img
        - text: Transactions
      - link "Beneficiaries":
        - /url: /banking/beneficiary
        - img
        - text: Beneficiaries
      - link "Bill Payments":
        - /url: /banking/bill-payments
        - img
        - text: Bill Payments
      - link "Fixed Deposits":
        - /url: /banking/fixed-deposit
        - img
        - text: Fixed Deposits
      - link "Loan Calculator":
        - /url: /banking/loan-calculator
        - img
        - text: Loan Calculator
      - link "Cards":
        - /url: /banking/cards
        - img
        - text: Cards
      - link "Profile & Settings":
        - /url: /banking/profile
        - img
        - text: Profile & Settings
    - button "Logout":
      - img
      - text: Logout
  - heading "Welcome, Rahul" [level=1]
  - link "3":
    - /url: /banking/notifications
    - img
    - text: "3"
  - text: Thu, 12 Nov, 2026 RS
  - main:
    - heading "Good Afternoon, Rahul!" [level=1]
    - paragraph: "Last login: 11 Nov 2026, 02:57 pm"
    - paragraph: Savings Account
    - paragraph: XXXX XXXX 7890
    - paragraph: ₹2,50,000
    - link "View Statement":
      - /url: /banking/transactions
    - paragraph: Total Credits This Month
    - paragraph: +₹0
    - paragraph: November 2026
    - paragraph: Total Debits This Month
    - paragraph: "-₹0"
    - paragraph: November 2026
    - link "→ Fund Transfer":
      - /url: /banking/transfer
      - text: →
      - paragraph: Fund Transfer
    - link "₹ Pay Bills":
      - /url: /banking/bill-payments
      - text: ₹
      - paragraph: Pay Bills
    - link "% Fixed Deposit":
      - /url: /banking/fixed-deposit
      - text: "%"
      - paragraph: Fixed Deposit
    - link "= Loan Calculator":
      - /url: /banking/loan-calculator
      - text: =
      - paragraph: Loan Calculator
    - heading "Recent Transactions" [level=2]
    - link "View All":
      - /url: /banking/transactions
    - table:
      - rowgroup:
        - row "Date Description Ref No Amount Status":
          - columnheader "Date"
          - columnheader "Description"
          - columnheader "Ref No"
          - columnheader "Amount"
          - columnheader "Status"
      - rowgroup:
        - row "22-Apr-2026 NEFT to Rajesh Kumar - Rent TXN001 -₹25,000 Success":
          - cell "22-Apr-2026"
          - cell "NEFT to Rajesh Kumar - Rent"
          - cell "TXN001"
          - cell "-₹25,000"
          - cell "Success"
        - row "20-Apr-2026 Salary Credit - GlobalTech Pvt Ltd TXN002 +₹75,000 Success":
          - cell "20-Apr-2026"
          - cell "Salary Credit - GlobalTech Pvt Ltd"
          - cell "TXN002"
          - cell "+₹75,000"
          - cell "Success"
        - row "18-Apr-2026 IMPS to Priya Sharma TXN003 -₹3,500 Success":
          - cell "18-Apr-2026"
          - cell "IMPS to Priya Sharma"
          - cell "TXN003"
          - cell "-₹3,500"
          - cell "Success"
        - row "15-Apr-2026 UPI Credit from Amit Verma TXN004 +₹12,000 Success":
          - cell "15-Apr-2026"
          - cell "UPI Credit from Amit Verma"
          - cell "TXN004"
          - cell "+₹12,000"
          - cell "Success"
        - row "12-Apr-2026 Electricity Bill - MSEDCL TXN005 -₹2,340 Success":
          - cell "12-Apr-2026"
          - cell "Electricity Bill - MSEDCL"
          - cell "TXN005"
          - cell "-₹2,340"
          - cell "Success"
    - heading "Quick Pay (UPI)" [level=2]:
      - img
      - text: Quick Pay (UPI)
    - text: UPI ID
    - textbox "UPI ID":
      - /placeholder: name@upi
    - text: Amount
    - spinbutton "Amount"
    - text: Note (optional)
    - textbox "Note (optional)":
      - /placeholder: Payment note
    - button "Pay Now"
    - paragraph: "4"
    - paragraph: Active FDs
    - paragraph: "3"
    - paragraph: Beneficiaries
    - paragraph: "0"
    - paragraph: Bills Paid This Month
    - paragraph: "2"
    - paragraph: Cards
- contentinfo:
  - heading "Learn" [level=3]
  - list:
    - listitem:
      - link "Selenium Tutorial":
        - /url: /selenium-tutorial
    - listitem:
      - link "Playwright Tutorial":
        - /url: /playwright-tutorial
    - listitem:
      - link "API Testing Guide":
        - /url: /api-testing-guide
    - listitem:
      - link "45-Day Plan":
        - /url: /study-plan
    - listitem:
      - link "QA Career Roadmap":
        - /url: /career
    - listitem:
      - link "Java":
        - /url: /paths/java
    - listitem:
      - link "Selenium":
        - /url: /paths/selenium
    - listitem:
      - link "TestNG":
        - /url: /paths/testng
    - listitem:
      - link "API Testing":
        - /url: /paths/api-testing
    - listitem:
      - link "Playwright":
        - /url: /paths/playwright
    - listitem:
      - link "Database & SQL":
        - /url: /paths/database
  - heading "Practice" [level=3]
  - list:
    - listitem:
      - link "All 10 Practice Apps":
        - /url: /practice
    - listitem:
      - link "Banking Portal":
        - /url: /banking
    - listitem:
      - link "Shopping Store":
        - /url: /shopping
    - listitem:
      - link "Insurance Portal":
        - /url: /insurance
    - listitem:
      - link "Bug Tracker":
        - /url: /defect-tracker
    - listitem:
      - link "22 Practice Topics":
        - /url: /topics
    - listitem:
      - link "Skill Assessments":
        - /url: /assessment
  - heading "Prepare" [level=3]
  - list:
    - listitem:
      - link "Selenium Interview Q&A":
        - /url: /selenium-interview-questions
    - listitem:
      - link "API Testing Q&A":
        - /url: /api-testing-questions
    - listitem:
      - link "Playwright Practice Test":
        - /url: /playwright-practice-test
    - listitem:
      - link "Manual QA Scenarios":
        - /url: /manual-testing-quiz
    - listitem:
      - link "1600+ Real Questions":
        - /url: /interview-questions
    - listitem:
      - link "QA Cheatsheets Hub":
        - /url: /cheatsheet
    - listitem:
      - link "XPath Cheatsheet":
        - /url: /xpath-cheatsheet
    - listitem:
      - link "Locator Cheatsheet":
        - /url: /cheatsheet/locators
  - heading "Company" [level=3]
  - list:
    - listitem:
      - link "About & Quality":
        - /url: /about
    - listitem:
      - link "Contact Us":
        - /url: /contact
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy
    - listitem:
      - link "Terms of Service":
        - /url: /terms
    - listitem:
      - link "Sandbox Disclaimer":
        - /url: /disclaimer
    - listitem:
      - link "Practice API Docs":
        - /url: /api-docs
  - text: TesterRank © 2026 TesterRank. Free QA learning platform.
- region "Notifications (F8)":
  - list
- alert
```

```
Error: tracing.stop: Must start tracing before stopping
```

# Test source

```ts
  1  | import {test,expect}from "../fixtures/loginfixture"
  2  | import { AccountStatement} from "../pages/accountStatmentPage"
  3  | 
  4  | let accstatament:AccountStatement;
  5  | 
  6  | test.beforeEach("acc stat",async({loggedInPage})=>{
  7  |     await expect(loggedInPage).toHaveURL(/login/i)
  8  |     accstatament=new AccountStatement(loggedInPage)
  9  |     await loggedInPage.context().tracing.start({
  10 |         screenshots:true,
  11 |         snapshots:true,
  12 |         sources:true
  13 |     })
  14 | })
  15 | 
  16 | test.describe("Account Statement tests",()=>{
  17 | 
  18 |     test("@Regression Account Statement",async({loggedInPage})=>{
  19 | 
  20 |         const accountDetails=await accstatament.getAccountDetails()  
  21 |         await expect(accountDetails.balan).toBe("₹2,49,998.92")
  22 |         await expect(accountDetails.accNo).toBe("XXXX XXXX 7890")
  23 |         await expect(accountDetails.succpage).toBe("Account Statement")
  24 |     
  25 |         
  26 |     })
  27 | })
  28 | 
  29 | 
  30 | test.afterEach("Capture trace on failure",async({loggedInPage},testInfo)=>{
  31 |     if (testInfo.status === "failed") {
> 32 |         await loggedInPage.context().tracing.stop({ path: `traces/${testInfo.title}.zip` });
     |                                              ^ Error: tracing.stop: Must start tracing before stopping
  33 |     }
  34 | })
```