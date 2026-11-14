import { Page,Locator } from "@playwright/test";

export class FundTransferPage{

    private readonly page:Page;
    private readonly fundTransferbtn:Locator;
    private readonly successmsgofFT:Locator;
    private readonly optforFundTransfer:Locator;
    private readonly selectbenPage:Locator;
    private readonly continuebtn:Locator;//3 times
    private readonly listOfBeneficiary:Locator;
    private readonly nextPageBtn:Locator;
    private readonly enterAmount:Locator;
    private readonly cnfOTPbtn:Locator;
    private readonly savingamountInfo:Locator;
    private readonly reviewPage:Locator;

    //payment review loactor
    private readonly transferType:Locator;
    private readonly fromAccountNum:Locator;
    private readonly toAccountNum:Locator;
    private readonly cnfamount:Locator;
    private readonly otpVerificationPage:Locator;

    //fund transfer details page

   
    //constructor
    constructor(page:Page){
        this.page=page;
        this.fundTransferbtn=this.page.getByTestId("qa-FundTransfer")
        this.successmsgofFT=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
        this.optforFundTransfer=this.page.getByRole("heading",{name:'NEFT'})
       // this.optforFundTransfer=page.getByTestId("type-NEFT")
        this.continuebtn=this.page.getByRole("button",{name:"Continue"})
        this.selectbenPage=this.page.locator("h2[class='text-base font-semibold text-[#1A1A2E] mb-4']")
        this.listOfBeneficiary=this.page.locator("button[data-testid*='bene-BEN']")
        this.nextPageBtn=this.page.getByText('Enter Amount', { exact: true });
        this.enterAmount=this.page.getByTestId("transferAmount")
        this.savingamountInfo=this.page.locator("span[class='ml-3 text-gray-500']")
        this.reviewPage=this.page.getByText('Review Transfer',{exact:true})

        //payment review locators
        this.transferType=this.page.getByTestId('review-transferType')
        this.fromAccountNum=this.page.getByTestId('review-fromAccount')
        this.toAccountNum=this.page.locator("p[class='text-xs text-gray-500']")
        this.cnfamount=this.page.getByTestId('review-amount')
        

        //fund transfer details page
        this.cnfOTPbtn=page.getByTestId("confirmTransferBtn")
        this.otpVerificationPage=this.page.getByText("OTP Verification",{exact:true})
    }


    async selectFundTransfer():Promise<any>{
        await this.fundTransferbtn.click();
        return await this.successmsgofFT.innerText()
    }

    async selectPaymentMethod():Promise<any>{
        await this.optforFundTransfer.click()
        await this.continuebtn.isVisible()
        await this.continuebtn.click()
        return await this.selectbenPage.innerText();
    }

    async selectBeneficiary(): Promise<any> {
        let prevHeight = 0;

        while (true) {
            for (let i = 0; i < await this.listOfBeneficiary.count(); i++) {
                if ((await this.listOfBeneficiary.nth(i).innerText()).includes("Amit Verma")) {
                    await this.listOfBeneficiary.nth(i).click();
                    await this.continuebtn.click();

                    return await this.nextPageBtn.innerText();
                }
            }

            await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
            });

            await this.page.waitForTimeout(2000);

            const pageCurrentHeight = await this.page.evaluate(() => document.body.scrollHeight);

            if (prevHeight === pageCurrentHeight) {
                throw new Error("Beneficiary 'Amit Verma' not found");
            }

            prevHeight = pageCurrentHeight;
        }
    }
    async enteramounttranfer():Promise<any>{
        await this.enterAmount.click()
        await this.enterAmount.fill('100')
        await this.page.waitForTimeout(2000)
        const enteredamount= await this.enterAmount.inputValue()
        await this.continuebtn.click();
        const pagecontent=await this.reviewPage.innerText()
        const reviewdetailstype=await this.transferType.innerText();
        const reviewdetailsfromAcc=await this.fromAccountNum.textContent();
        const reviewdetailsToAcc=await this.toAccountNum.textContent()
        const reviwedetailsAmount=await this.cnfamount.textContent();
        return{
            pagecontent,
            enteredamount,
            reviwedetailsAmount
        } 

    }
    async confirmTransferDetails(enteredamount:string,confirmAmount:string):Promise<any>{
        if((confirmAmount?.replace("₹",""))===enteredamount){
            await this.cnfOTPbtn.click();
        }
        return await this.otpVerificationPage.innerText()
    }

    async otpVerification():Promise<any>{
        const otp="123456"
        for(let i=0;i<otp.length;i++){
            await this.page.getByTestId(`otpBox-${i}`).fill(otp[i])
        }
        await this.page.getByTestId("verifyOtpBtn").click()
        return await this.page.getByTestId("successMessage").innerText()
    }

    //async reviewFundTransferDetails():Promise<any>{
      //  awa
    //}
}