# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fundTransferPage.spec.ts >> fund transfer
- Location: tests\fundTransferPage.spec.ts:11:5

# Error details

```
Error: locator.innerText: Unexpected token ".5" while parsing css selector "text-xs mt-1.5 whitespace-nowrap text-[#002D62] font-medium". Did you mean to CSS.escape it?
Call log:
  - waiting for text-xs mt-1.5 whitespace-nowrap text-[#002D62] font-medium

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
  14 |     //private readonly enterContinue:Locator;
  15 |     private readonly cnfOTPbtn:Locator;
  16 |    // private readonly BeneAddNxtPage:Locator;
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
  27 |        this.nextPageBtn=page.locator("text-xs mt-1.5 whitespace-nowrap text-[#002D62] font-medium")
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
  55 |                     console.log("here i am")
  56 |                     selectBen=true;
  57 |                     break;
  58 |                 }
  59 |             }
  60 | 
  61 |             await this.page.evaluate(()=>{
  62 |                 window.scrollTo(0,document.body.scrollHeight)
  63 |             });
  64 | 
  65 |             await this.page.waitForTimeout(2000);
  66 | 
  67 |             const pageCurrentHeight=await this.page.evaluate(()=>{
  68 |                 return document.body.scrollHeight;
  69 |             })
  70 |             if(prevHeight==pageCurrentHeight){
  71 |                 break;
  72 |             }
  73 |             prevHeight=pageCurrentHeight;
  74 |         }  
> 75 |         return await this.nextPageBtn.innerText();
     |                                       ^ Error: locator.innerText: Unexpected token ".5" while parsing css selector "text-xs mt-1.5 whitespace-nowrap text-[#002D62] font-medium". Did you mean to CSS.escape it?
  76 |     } 
  77 |     
  78 | }
```