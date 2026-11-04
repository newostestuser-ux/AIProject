import {Page,Locator} from "@playwright/test"

export class RegistrationPage{

    private readonly page:Page;

    //Locator

    private readonly fullname:Locator;
    private readonly email:Locator;
    private readonly phoneNumber:Locator;
    private readonly password:Locator;
    private readonly cnfPassword:Locator;
    private readonly submitbtn:Locator;
    private readonly successPageTitle:Locator;
    private readonly nextPageCtnButton:Locator;
    private readonly verifyOTPPage:Locator;
    private readonly Verifybtn:Locator;
    private readonly accountPage:Locator;
    //constructor

    constructor(page:Page){

        this.page=page
        this.fullname=page.getByPlaceholder("Enter your full name");
        this.email=page.getByPlaceholder("you@example.com");
        this.phoneNumber=page.getByPlaceholder("10-digit mobile number");
        this.password=page.getByPlaceholder("Min 6 characters");
        this.cnfPassword=page.getByPlaceholder("Re-enter your password");
        this.submitbtn=page.getByRole("button",{name:"Continue"})
        this.successPageTitle=page.getByText("Your Account Details")
        this.nextPageCtnButton=page.getByRole("button",{name:"Continue"})
        this.verifyOTPPage=page.locator("h3[class='text-lg font-semibold text-[#1A1A2E]']")
        this.Verifybtn=page.getByRole("button",{name:"Verify & Register"})
        this.accountPage=page.getByText("Welcome")
    }


    async newUserRegstration(
        fullname:string,
        email:string,
        phoneNumber:string,
        password:string,
        cnfPassword:string):Promise<any>{
            await this.fullname.fill(fullname);
            await this.email.fill(email)
            await this.phoneNumber.fill(phoneNumber)
            await this.password.fill(password)
            await this.cnfPassword.fill(cnfPassword)
            await this.submitbtn.click();
            await this.page.waitForTimeout(3000)
            const titleText = await this.successPageTitle.innerText();
            if(titleText?.includes("Your Account Details")){
                await this.nextPageCtnButton.click()
            }
            const OTPText = await this.verifyOTPPage.innerText();
             if(OTPText?.includes("Verify Your Identity")){
                const otp = "123456";
                for (let i = 0; i < otp.length; i++) {
                    await this.page.locator(`input[id="regOtp${i}"]`).fill(otp[i]);
                }
                await this.Verifybtn.click();
            }

            return await this.accountPage.innerText();
           

    }
}