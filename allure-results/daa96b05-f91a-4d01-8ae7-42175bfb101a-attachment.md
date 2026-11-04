# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fundTransferPage.spec.ts >> fund transfer
- Location: tests\fundTransferPage.spec.ts:11:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('transferAmount')

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
  12 |     //private readonly nextPageBtn:Locator;
  13 |     private readonly enterAmount:Locator;
  14 |     //private readonly enterContinue:Locator;
  15 |     private readonly cnfOTPbtn:Locator;
  16 |     private readonly BeneAddNxtPage:Locator;
  17 |     //constructor
  18 |     constructor(page:Page){
  19 |         this.page=page;
  20 |         this.fundTransferbtn=page.getByTestId("qa-FundTransfer")
  21 |         this.successmsgofFT=page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  22 |         this.optforFundTransfer=page.getByRole("heading",{name:'NEFT'})
  23 |        // this.optforFundTransfer=page.getByTestId("type-NEFT")
  24 |        this.continuebtn=page.getByRole("button",{name:"Continue"})
  25 |        this.selectbenPage=page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  26 |        this.listOfBeneficiary=page.locator("button[data-testid*='bene-BEN']")
  27 |        //this.nextPageBtn=page.getByTestId("nextBtn2")
  28 |        this.enterAmount=page.getByTestId("transferAmount")
  29 |        
  30 | 
  31 |     //    this.enterContinue=page.getByTestId("nextBtn3")
  32 |         this.cnfOTPbtn=page.getByTestId("confirmTransferBtn")
  33 |     }
  34 | 
  35 |     async selectFundTransfer():Promise<any>{
  36 |         await this.fundTransferbtn.click();
  37 |         return await this.successmsgofFT.innerText()
  38 |     }
  39 | 
  40 |     async selectPaymentMethod():Promise<any>{
  41 |         await this.optforFundTransfer.click()
  42 |         await this.continuebtn.click()
  43 |         return await this.selectbenPage.innerText();
  44 |     }
  45 | 
  46 |     async selectBeneficiary():Promise<any>{
  47 |         const countOfBenName=await this.listOfBeneficiary.count();
  48 |         let prevHeight=0;
  49 |         let selectBen=false;
  50 |         while(true){
  51 |             for(let i=0;i<countOfBenName;i++){
  52 |                 if((await this.listOfBeneficiary.nth(i).innerText()).includes("eu123")){
  53 |                     await this.listOfBeneficiary.nth(i).click()
  54 |                     await this.continuebtn.click()
  55 |                     selectBen=true;
  56 |                     break;
  57 |                 }
  58 |             }
  59 | 
  60 |             await this.page.evaluate(()=>{
  61 |                 window.scrollTo(0,document.body.scrollHeight)
  62 |             });
  63 | 
  64 |             await this.page.waitForTimeout(2000);
  65 | 
  66 |             const pageCurrentHeight=await this.page.evaluate(()=>{
  67 |                 return document.body.scrollHeight;
  68 |             })
  69 |             if(prevHeight==pageCurrentHeight){
  70 |                 break;
  71 |             }
  72 |             prevHeight=pageCurrentHeight;
  73 |         }  
> 74 |         return await this.enterAmount.innerText();
     |                                       ^ Error: locator.innerText: Target page, context or browser has been closed
  75 | 
  76 |     } 
  77 |     
  78 | }
```