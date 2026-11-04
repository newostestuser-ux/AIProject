# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fundTransferPage.spec.ts >> fund transfer
- Location: tests\fundTransferPage.spec.ts:11:5

# Error details

```
Error: Beneficiary 'Amit Verma' not found
```

# Test source

```ts
  11  |     private readonly listOfBeneficiary:Locator;
  12  |     private readonly nextPageBtn:Locator;
  13  |     private readonly enterAmount:Locator;
  14  |     private readonly cnfOTPbtn:Locator;
  15  |     private readonly savingamountInfo:Locator;
  16  |     private readonly reviewPage:Locator;
  17  |    
  18  |     //constructor
  19  |     constructor(page:Page){
  20  |         this.page=page;
  21  |         this.fundTransferbtn=this.page.getByTestId("qa-FundTransfer")
  22  |         this.successmsgofFT=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  23  |         this.optforFundTransfer=this.page.getByRole("heading",{name:'NEFT'})
  24  |        // this.optforFundTransfer=page.getByTestId("type-NEFT")
  25  |         this.continuebtn=this.page.getByRole("button",{name:"Continue"})
  26  |         this.selectbenPage=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
  27  |         this.listOfBeneficiary=this.page.locator("button[data-testid*='bene-BEN']")
  28  |         this.nextPageBtn=this.page.getByText('Enter Amount', { exact: true });
  29  |         this.enterAmount=this.page.locator('input[type="number"]');
  30  |         this.savingamountInfo=this.page.locator("span[class='ml-3 text-gray-500']")
  31  |         this.cnfOTPbtn=page.getByTestId("confirmTransferBtn")
  32  |         this.reviewPage=this.page.getByText('Review Transfer',{exact:true})
  33  |     }
  34  | 
  35  |     async selectFundTransfer():Promise<any>{
  36  |         await this.fundTransferbtn.click();
  37  |         return await this.successmsgofFT.innerText()
  38  |     }
  39  | 
  40  |     async selectPaymentMethod():Promise<any>{
  41  |         await this.optforFundTransfer.click()
  42  |         await this.continuebtn.click()
  43  |         return await this.selectbenPage.innerText();
  44  |     }
  45  | 
  46  |     // async selectBeneficiary():Promise<any>{
  47  |     //     const countOfBenName=await this.listOfBeneficiary.count();
  48  |     //     let prevHeight=0;
  49  |     //     let selectBen=false;
  50  |     //     while(true){
  51  |     //         for(let i=0;i<countOfBenName;i++){
  52  |     //             if((await this.listOfBeneficiary.nth(i).innerText()).includes("Amit Verma")){
  53  |     //                 await this.listOfBeneficiary.nth(i).click()
  54  |     //                 await this.continuebtn.click()
  55  |     //                 selectBen=true;
  56  |     //                 break;
  57  |     //             }
  58  |     //             if(selectBen){
  59  |     //                 return await this.nextPageBtn.innerText();
  60  |     //             }
  61  |     //         }
  62  | 
  63  |     //         await this.page.evaluate(()=>{
  64  |     //             window.scrollTo(0,document.body.scrollHeight)
  65  |     //         });
  66  | 
  67  |     //         await this.page.waitForTimeout(2000);
  68  | 
  69  |     //         const pageCurrentHeight=await this.page.evaluate(()=>{
  70  |     //             return document.body.scrollHeight;
  71  |     //         })
  72  |     //         if(prevHeight==pageCurrentHeight){
  73  |     //             break;
  74  |     //         }
  75  |     //         prevHeight=pageCurrentHeight;
  76  |     //     }  
  77  |         
  78  |     // } 
  79  |     // async enterAmountToTransfer():Promise<any>{
  80  |     
  81  |     //     await this.enterAmount.waitFor({
  82  |     //                 state: "visible",
  83  |     //                 timeout: 10000,
  84  |     //             });
  85  |     //     await this.continuebtn.click();
  86  |     //     return await this.reviewPage.innerText()
  87  |     // }
  88  | 
  89  |     async selectBeneficiary(): Promise<any> {
  90  |         let prevHeight = 0;
  91  | 
  92  |         while (true) {
  93  |             for (let i = 0; i < await this.listOfBeneficiary.count(); i++) {
  94  |                 if ((await this.listOfBeneficiary.nth(i).innerText()).includes("eu123")) {
  95  |                     await this.listOfBeneficiary.nth(i).click();
  96  |                     await this.continuebtn.click();
  97  | 
  98  |                     return await this.nextPageBtn.innerText();
  99  |                 }
  100 |             }
  101 | 
  102 |             await this.page.evaluate(() => {
  103 |             window.scrollTo(0, document.body.scrollHeight);
  104 |             });
  105 | 
  106 |             await this.page.waitForTimeout(2000);
  107 | 
  108 |             const pageCurrentHeight = await this.page.evaluate(() => document.body.scrollHeight);
  109 | 
  110 |             if (prevHeight === pageCurrentHeight) {
> 111 |                 throw new Error("Beneficiary 'Amit Verma' not found");
      |                       ^ Error: Beneficiary 'Amit Verma' not found
  112 |             }
  113 | 
  114 |             prevHeight = pageCurrentHeight;
  115 |         }
  116 |     }
  117 |     // async enteramounttranfer():Promise<any>{
  118 |     //     await this.enterAmount.waitFor({
  119 |     //     state: "visible",
  120 |     //     timeout: 10000,
  121 |     // });
  122 | 
  123 |     // }
  124 | }
```