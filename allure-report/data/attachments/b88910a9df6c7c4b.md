# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountstatementPage.spec.ts >> Account Statement tests >> @Regression Account Statement
- Location: tests\accountstatementPage.spec.ts:18:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Account Statement')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main-content"
  - main [ref=e3]:
    - complementary "QA Automation Sandbox Banner" [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]:
          - link "TesterRank" [ref=e7] [cursor=pointer]:
            - /url: /
          - generic [ref=e10]: "|"
          - generic [ref=e11]: QA Sandbox
          - generic [ref=e12]: ISB NetBanking Demo Portal
          - generic [ref=e13]: — Interactive sandbox for Selenium, Playwright & API automation practice
        - navigation "Sandbox quick navigation" [ref=e14]:
          - link "📋 Test Cases" [ref=e15] [cursor=pointer]:
            - /url: /practice/banking/test-cases
            - text: 📋
            - generic [ref=e16]: Test Cases
          - link "🚀 Automation Exercises" [ref=e17] [cursor=pointer]:
            - /url: /practice/banking/exercises
            - text: 🚀
            - generic [ref=e18]: Automation Exercises
          - link "All Portals" [ref=e19] [cursor=pointer]:
            - /url: /practice
          - link "← Exit Sandbox" [ref=e20] [cursor=pointer]:
            - /url: /
    - generic [ref=e21]:
      - complementary [ref=e22]:
        - generic [ref=e24]:
          - generic [ref=e25]: ISB
          - generic [ref=e26]: NetBanking
        - generic [ref=e28]:
          - generic [ref=e29]: RS
          - generic [ref=e30]:
            - generic [ref=e31]: Rahul Sharma
            - generic [ref=e32]: "A/C: ****7890"
        - navigation [ref=e33]:
          - link "Dashboard" [ref=e34] [cursor=pointer]:
            - /url: /banking/dashboard
          - link "Notifications" [ref=e38] [cursor=pointer]:
            - /url: /banking/notifications
          - link "Accounts" [ref=e42] [cursor=pointer]:
            - /url: /banking/dashboard
          - link "Fund Transfer" [ref=e46] [cursor=pointer]:
            - /url: /banking/transfer
          - link "Transactions" [ref=e50] [cursor=pointer]:
            - /url: /banking/transactions
          - link "Beneficiaries" [ref=e54] [cursor=pointer]:
            - /url: /banking/beneficiary
          - link "Bill Payments" [ref=e58] [cursor=pointer]:
            - /url: /banking/bill-payments
          - link "Fixed Deposits" [ref=e62] [cursor=pointer]:
            - /url: /banking/fixed-deposit
          - link "Loan Calculator" [ref=e66] [cursor=pointer]:
            - /url: /banking/loan-calculator
          - link "Cards" [ref=e70] [cursor=pointer]:
            - /url: /banking/cards
          - link "Profile & Settings" [ref=e74] [cursor=pointer]:
            - /url: /banking/profile
        - button "Logout" [ref=e80] [cursor=pointer]
      - generic [ref=e84]:
        - generic [ref=e85]:
          - heading "Welcome, Rahul" [level=1] [ref=e87]
          - generic [ref=e88]:
            - link "3" [ref=e89] [cursor=pointer]:
              - /url: /banking/notifications
            - generic [ref=e93]: Thu, 12 Nov, 2026
            - generic [ref=e94]: RS
        - main [ref=e95]:
          - generic [ref=e96]:
            - heading "Good Afternoon, Rahul!" [level=1] [ref=e97]
            - paragraph [ref=e98]: "Last login: 11 Nov 2026, 02:58 pm"
          - generic [ref=e99]:
            - generic [ref=e100]:
              - paragraph [ref=e101]: Savings Account
              - paragraph [ref=e102]: XXXX XXXX 7890
              - paragraph [ref=e103]: ₹2,50,000
              - link "View Statement" [ref=e104] [cursor=pointer]:
                - /url: /banking/transactions
            - generic [ref=e105]:
              - paragraph [ref=e106]: Total Credits This Month
              - paragraph [ref=e107]: +₹0
              - paragraph [ref=e108]: November 2026
            - generic [ref=e109]:
              - paragraph [ref=e110]: Total Debits This Month
              - paragraph [ref=e111]: "-₹0"
              - paragraph [ref=e112]: November 2026
          - generic [ref=e113]:
            - link "→ Fund Transfer" [ref=e114] [cursor=pointer]:
              - /url: /banking/transfer
              - generic [ref=e115]: →
              - paragraph [ref=e116]: Fund Transfer
            - link "₹ Pay Bills" [ref=e117] [cursor=pointer]:
              - /url: /banking/bill-payments
              - generic [ref=e118]: ₹
              - paragraph [ref=e119]: Pay Bills
            - link "% Fixed Deposit" [ref=e120] [cursor=pointer]:
              - /url: /banking/fixed-deposit
              - generic [ref=e121]: "%"
              - paragraph [ref=e122]: Fixed Deposit
            - link "= Loan Calculator" [ref=e123] [cursor=pointer]:
              - /url: /banking/loan-calculator
              - generic [ref=e124]: =
              - paragraph [ref=e125]: Loan Calculator
          - generic [ref=e126]:
            - generic [ref=e127]:
              - heading "Recent Transactions" [level=2] [ref=e128]
              - link "View All" [ref=e129] [cursor=pointer]:
                - /url: /banking/transactions
            - table [ref=e131]:
              - rowgroup [ref=e132]:
                - row [ref=e133]:
                  - columnheader "Date" [ref=e134]
                  - columnheader "Description" [ref=e135]
                  - columnheader "Ref No" [ref=e136]
                  - columnheader "Amount" [ref=e137]
                  - columnheader "Status" [ref=e138]
              - rowgroup [ref=e139]:
                - row [ref=e140]:
                  - cell "22-Apr-2026" [ref=e141]
                  - cell "NEFT to Rajesh Kumar - Rent" [ref=e142]
                  - cell "TXN001" [ref=e143]
                  - cell "-₹25,000" [ref=e144]
                  - cell "Success" [ref=e145]
                - row [ref=e146]:
                  - cell "20-Apr-2026" [ref=e147]
                  - cell "Salary Credit - GlobalTech Pvt Ltd" [ref=e148]
                  - cell "TXN002" [ref=e149]
                  - cell "+₹75,000" [ref=e150]
                  - cell "Success" [ref=e151]
                - row [ref=e152]:
                  - cell "18-Apr-2026" [ref=e153]
                  - cell "IMPS to Priya Sharma" [ref=e154]
                  - cell "TXN003" [ref=e155]
                  - cell "-₹3,500" [ref=e156]
                  - cell "Success" [ref=e157]
                - row [ref=e158]:
                  - cell "15-Apr-2026" [ref=e159]
                  - cell "UPI Credit from Amit Verma" [ref=e160]
                  - cell "TXN004" [ref=e161]
                  - cell "+₹12,000" [ref=e162]
                  - cell "Success" [ref=e163]
                - row [ref=e164]:
                  - cell "12-Apr-2026" [ref=e165]
                  - cell "Electricity Bill - MSEDCL" [ref=e166]
                  - cell "TXN005" [ref=e167]
                  - cell "-₹2,340" [ref=e168]
                  - cell "Success" [ref=e169]
          - generic [ref=e170]:
            - generic [ref=e171]:
              - heading "Quick Pay (UPI)" [level=2] [ref=e172]
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - generic [ref=e177]: UPI ID
                  - textbox "UPI ID" [ref=e178]:
                    - /placeholder: name@upi
                - generic [ref=e179]:
                  - generic [ref=e180]: Amount
                  - spinbutton "Amount" [ref=e181]
                - generic [ref=e182]:
                  - generic [ref=e183]: Note (optional)
                  - textbox "Note (optional)" [ref=e184]:
                    - /placeholder: Payment note
                - button "Pay Now" [ref=e185] [cursor=pointer]
            - generic [ref=e186]:
              - generic [ref=e187]:
                - paragraph [ref=e188]: "4"
                - paragraph [ref=e189]: Active FDs
              - generic [ref=e190]:
                - paragraph [ref=e191]: "3"
                - paragraph [ref=e192]: Beneficiaries
              - generic [ref=e193]:
                - paragraph [ref=e194]: "0"
                - paragraph [ref=e195]: Bills Paid This Month
              - generic [ref=e196]:
                - paragraph [ref=e197]: "2"
                - paragraph [ref=e198]: Cards
  - contentinfo [ref=e199]:
    - generic [ref=e200]:
      - generic [ref=e201]:
        - generic [ref=e202]:
          - heading "Learn" [level=3] [ref=e203]
          - list [ref=e204]:
            - listitem [ref=e205]:
              - link "Selenium Tutorial" [ref=e206] [cursor=pointer]:
                - /url: /selenium-tutorial
            - listitem [ref=e207]:
              - link "Playwright Tutorial" [ref=e208] [cursor=pointer]:
                - /url: /playwright-tutorial
            - listitem [ref=e209]:
              - link "API Testing Guide" [ref=e210] [cursor=pointer]:
                - /url: /api-testing-guide
            - listitem [ref=e211]:
              - link "45-Day Plan" [ref=e212] [cursor=pointer]:
                - /url: /study-plan
            - listitem [ref=e213]:
              - link "QA Career Roadmap" [ref=e214] [cursor=pointer]:
                - /url: /career
            - listitem [ref=e215]:
              - link "Java" [ref=e216] [cursor=pointer]:
                - /url: /paths/java
            - listitem [ref=e217]:
              - link "Selenium" [ref=e218] [cursor=pointer]:
                - /url: /paths/selenium
            - listitem [ref=e219]:
              - link "TestNG" [ref=e220] [cursor=pointer]:
                - /url: /paths/testng
            - listitem [ref=e221]:
              - link "API Testing" [ref=e222] [cursor=pointer]:
                - /url: /paths/api-testing
            - listitem [ref=e223]:
              - link "Playwright" [ref=e224] [cursor=pointer]:
                - /url: /paths/playwright
            - listitem [ref=e225]:
              - link "Database & SQL" [ref=e226] [cursor=pointer]:
                - /url: /paths/database
        - generic [ref=e227]:
          - heading "Practice" [level=3] [ref=e228]
          - list [ref=e229]:
            - listitem [ref=e230]:
              - link "All 10 Practice Apps" [ref=e231] [cursor=pointer]:
                - /url: /practice
            - listitem [ref=e232]:
              - link "Banking Portal" [ref=e233] [cursor=pointer]:
                - /url: /banking
            - listitem [ref=e234]:
              - link "Shopping Store" [ref=e235] [cursor=pointer]:
                - /url: /shopping
            - listitem [ref=e236]:
              - link "Insurance Portal" [ref=e237] [cursor=pointer]:
                - /url: /insurance
            - listitem [ref=e238]:
              - link "Bug Tracker" [ref=e239] [cursor=pointer]:
                - /url: /defect-tracker
            - listitem [ref=e240]:
              - link "22 Practice Topics" [ref=e241] [cursor=pointer]:
                - /url: /topics
            - listitem [ref=e242]:
              - link "Skill Assessments" [ref=e243] [cursor=pointer]:
                - /url: /assessment
        - generic [ref=e244]:
          - heading "Prepare" [level=3] [ref=e245]
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link "Selenium Interview Q&A" [ref=e248] [cursor=pointer]:
                - /url: /selenium-interview-questions
            - listitem [ref=e249]:
              - link "API Testing Q&A" [ref=e250] [cursor=pointer]:
                - /url: /api-testing-questions
            - listitem [ref=e251]:
              - link "Playwright Practice Test" [ref=e252] [cursor=pointer]:
                - /url: /playwright-practice-test
            - listitem [ref=e253]:
              - link "Manual QA Scenarios" [ref=e254] [cursor=pointer]:
                - /url: /manual-testing-quiz
            - listitem [ref=e255]:
              - link "1600+ Real Questions" [ref=e256] [cursor=pointer]:
                - /url: /interview-questions
            - listitem [ref=e257]:
              - link "QA Cheatsheets Hub" [ref=e258] [cursor=pointer]:
                - /url: /cheatsheet
            - listitem [ref=e259]:
              - link "XPath Cheatsheet" [ref=e260] [cursor=pointer]:
                - /url: /xpath-cheatsheet
            - listitem [ref=e261]:
              - link "Locator Cheatsheet" [ref=e262] [cursor=pointer]:
                - /url: /cheatsheet/locators
        - generic [ref=e263]:
          - heading "Company" [level=3] [ref=e264]
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link "About & Quality" [ref=e267] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e268]:
              - link "Contact Us" [ref=e269] [cursor=pointer]:
                - /url: /contact
            - listitem [ref=e270]:
              - link "Privacy Policy" [ref=e271] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e272]:
              - link "Terms of Service" [ref=e273] [cursor=pointer]:
                - /url: /terms
            - listitem [ref=e274]:
              - link "Sandbox Disclaimer" [ref=e275] [cursor=pointer]:
                - /url: /disclaimer
            - listitem [ref=e276]:
              - link "Practice API Docs" [ref=e277] [cursor=pointer]:
                - /url: /api-docs
      - generic [ref=e278]:
        - generic [ref=e279]: TesterRank
        - generic [ref=e280]: © 2026 TesterRank. Free QA learning platform.
  - region "Notifications (F8)":
    - list
  - alert [ref=e281]
```

# Test source

```ts
  1  | import {Page,Locator}from"@playwright/test"
  2  | 
  3  | export class AccountStatement{
  4  | 
  5  | 
  6  |     private readonly page:Page;
  7  |     private readonly accountBalance:Locator;
  8  |     private readonly accountNum:Locator;
  9  |     private readonly viwestat:Locator
  10 |     private readonly accstapage:Locator;
  11 |     //private readonly:
  12 |     constructor(page:Page){
  13 | 
  14 |         this.page=page;
  15 |         this.accountBalance=this.page.getByTestId("accBal1")
  16 |         this.accountNum=this.page.getByTestId("accNo1")
  17 |         this.viwestat=this.page.getByTestId("viewStatement")
  18 |         this.accstapage=this.page.getByText("Account Statement")
  19 |     }
  20 | 
  21 |     async getAccountDetails():Promise<any>{
  22 | 
  23 |         const balan=await this.accountBalance.textContent();
  24 |         const accNo=await this.accountNum.innerText();
> 25 |         const succpage=await this.accstapage.textContent();
     |                                              ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  26 |         await this.viwestat.click()
  27 |         return{
  28 |             balan,
  29 |             accNo,
  30 |             succpage
  31 |         }
  32 | 
  33 |     }
  34 | 
  35 | }
```