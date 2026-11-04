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
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[type="number"]')

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
  16 |     private readonly reviewPage:Locator;
  17 |    
  18 |     //constructor
  19 |     constructor(page:Page){
  20 |         this.page=page;
  21 |         this.fundTransferbtn=this.page.getByTestId("qa-FundTransfer")
  22 |         this.successmsgofFT=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  23 |         this.optforFundTransfer=this.page.getByRole("heading",{name:'NEFT'})
  24 |        // this.optforFundTransfer=page.getByTestId("type-NEFT")
  25 |         this.continuebtn=this.page.getByRole("button",{name:"Continue"})
  26 |         this.selectbenPage=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  27 |         this.listOfBeneficiary=this.page.locator("button[data-testid*='bene-BEN']")
  28 |         this.nextPageBtn=this.page.getByText('Enter Amount', { exact: true });
  29 |         this.enterAmount=this.page.locator('input[type="number"]');
  30 |         this.savingamountInfo=this.page.locator("span[class='ml-3 text-gray-500']")
  31 |         this.cnfOTPbtn=page.getByTestId("confirmTransferBtn")
  32 |         this.reviewPage=this.page.getByText('Review Transfer',{exact:true})
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
  48 |         console.log(countOfBenName)
  49 |         let prevHeight=0;
  50 |         let selectBen=false;
  51 |         while(true){
  52 |             for(let i=0;i<countOfBenName;i++){
  53 |                 if((await this.listOfBeneficiary.nth(i).innerText()).includes("eu123")){
  54 |                     await this.listOfBeneficiary.nth(i).click()
  55 |                     await this.continuebtn.click()
  56 |                     console.log("here i am")
  57 |                     await this.enterAmount.waitFor({
  58 |                     state: "visible",
  59 |                     timeout: 10000,
  60 |                 });
  61 | 
  62 |                 return "Enter Amount";
  63 |                 }
  64 |             }
  65 | 
  66 |             await this.page.evaluate(()=>{
  67 |                 window.scrollTo(0,document.body.scrollHeight)
  68 |             });
  69 | 
  70 |             await this.page.waitForTimeout(2000);
  71 | 
  72 |             const pageCurrentHeight=await this.page.evaluate(()=>{
  73 |                 return document.body.scrollHeight;
  74 |             })
  75 |             if(prevHeight==pageCurrentHeight){
  76 |                 break;
  77 |             }
  78 |             prevHeight=pageCurrentHeight;
  79 |         }  
  80 |         return await this.nextPageBtn.innerText();
  81 |     } 
  82 |     async enterAmountToTransfer():Promise<any>{
  83 |     
> 84 |         await this.enterAmount.fill("100");
     |                                ^ Error: locator.fill: Target page, context or browser has been closed
  85 |         await this.continuebtn.click();
  86 |         return await this.reviewPage.innerText()
  87 |     }
  88 | }
```