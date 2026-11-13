# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fundTransferPage.spec.ts >> fund transfer
- Location: tests\fundTransferPage.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Savings Account"
Received: "Enter Amount"
```

# Test source

```ts
  1  | import {test,expect} from "../fixtures/loginfixture"
  2  | import { FundTransferPage } from "../pages/fundTransferPage"
  3  | 
  4  | let fundTransferPage:FundTransferPage;
  5  | 
  6  | test.beforeEach("login to user",async({loggedInPage,page})=>{
  7  |     await expect(loggedInPage).not.toHaveURL(/login/i);
  8  |     fundTransferPage=new FundTransferPage(page);
  9  | });
  10 | 
  11 | test("fund transfer",async({page})=>{
  12 |     const fundSms=await fundTransferPage.selectFundTransfer();
  13 |     await expect(fundSms).toBe("Select Transfer Type")
  14 |     const benSucessPageTtl=await fundTransferPage.selectPaymentMethod()
  15 |     await expect(benSucessPageTtl).toBe("Select Beneficiary")
  16 |     const selectBen=await fundTransferPage.selectBeneficiary()
> 17 |     await expect(selectBen).toBe("Savings Account")
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | })
  19 | 
  20 | test.afterEach("fund transfer is completed",async({page})=>{
  21 |     await page.close()
  22 | })
```