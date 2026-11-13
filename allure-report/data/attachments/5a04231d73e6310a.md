# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fundTransferPage.spec.ts >> fund transfer
- Location: tests\fundTransferPage.spec.ts:11:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.evaluate: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Savings Account', { exact: true })

```

# Test source

```ts
  1  | import { Page,Locator } from "@playwright/test";
  2  | 
  3  | export class FundTransferPage{
  4  | 
  5  |     private readonly page:Page;
  6  |     private readonly fundTransferbtn:Locator;
  7  |     private readonly successmsgofFT:Locator;
  8  |     private readonly optforFundTransfer:Locator;
  9  |     private readonly selectbenPage:Locator;
  10 |     private readonly continuebtn:Locator;//3 times
  11 |     private readonly listOfBeneficiary:Locator;
  12 |     private readonly nextPageBtn:Locator;
  13 |     private readonly enterAmount:Locator;
  14 |     private readonly cnfOTPbtn:Locator;
  15 |     private readonly savingamountInfo:Locator;
  16 |    // private readonly accBalanceInfo:Locator;
  17 |    // private readonly BeneAddNxtPage:Locator;
  18 |     //constructor
  19 |     constructor(page:Page){
  20 |         this.page=page;
  21 |         this.fundTransferbtn=page.getByTestId("qa-FundTransfer")
  22 |         this.successmsgofFT=page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  23 |         this.optforFundTransfer=page.getByRole("heading",{name:'NEFT'})
  24 |        // this.optforFundTransfer=page.getByTestId("type-NEFT")
  25 |         this.continuebtn=page.getByRole("button",{name:"Continue"})
  26 |         this.selectbenPage=page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  27 |         this.listOfBeneficiary=page.locator("button[data-testid*='bene-BEN']")
  28 |         this.nextPageBtn=page.getByText('Enter Amount', { exact: true });
  29 |         this.enterAmount=page.getByTestId("transferAmount")
  30 |         this.savingamountInfo=page.getByText('Savings Account',{exact:true})
  31 |         //this.accBalanceInfo=page.locator('span:has-text("Saving Amount")')
  32 |        
  33 | 
  34 |     //    this.enterContinue=page.getByTestId("nextBtn3")
  35 |         this.cnfOTPbtn=page.getByTestId("confirmTransferBtn")
  36 |     }
  37 | 
  38 |     async selectFundTransfer():Promise<any>{
  39 |         await this.fundTransferbtn.click();
  40 |         return await this.successmsgofFT.innerText()
  41 |     }
  42 | 
  43 |     async selectPaymentMethod():Promise<any>{
  44 |         await this.optforFundTransfer.click()
  45 |         await this.continuebtn.click()
  46 |         return await this.selectbenPage.innerText();
  47 |     }
  48 | 
  49 |     async selectBeneficiary():Promise<any>{
  50 |         const countOfBenName=await this.listOfBeneficiary.count();
  51 |         let prevHeight=0;
  52 |         let selectBen=false;
  53 |         while(true){
  54 |             for(let i=0;i<countOfBenName;i++){
  55 |                 if((await this.listOfBeneficiary.nth(i).innerText()).includes("eu123")){
  56 |                     await this.listOfBeneficiary.nth(i).click()
  57 |                     await this.continuebtn.click()
  58 |                     console.log("here i am")
  59 |                     selectBen=true;
  60 |                     break;
  61 |                 }
  62 |             }
  63 | 
  64 |             await this.page.evaluate(()=>{
  65 |                 window.scrollTo(0,document.body.scrollHeight)
  66 |             });
  67 | 
  68 |             await this.page.waitForTimeout(2000);
  69 | 
  70 |             const pageCurrentHeight=await this.page.evaluate(()=>{
  71 |                 return document.body.scrollHeight;
  72 |             })
  73 |             if(prevHeight==pageCurrentHeight){
  74 |                 break;
  75 |             }
  76 |             prevHeight=pageCurrentHeight;
  77 |         }  
  78 |         return await this.nextPageBtn.innerText();
  79 |     } 
  80 |     async enterAmountToTransfer():Promise<any>{
> 81 |         const availableAmount = await this.savingamountInfo.evaluate(el => el.nextSibling?.textContent?.trim());
     |                                                             ^ Error: locator.evaluate: Target page, context or browser has been closed
  82 |         if((Number(availableAmount))>=0){
  83 |             this.enterAmount.fill("100")
  84 |         }
  85 |         return availableAmount;
  86 |     }
  87 | }
```