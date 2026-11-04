import {test as base,Page} from "@playwright/test"
import dotenv from "dotenv";

dotenv.config();

type Fixtures={
    loggedInPage:Page;
};


export const test=base.extend<Fixtures>({
    loggedInPage:async({page},use)=>{
        const loginurl=process.env.WEB_APP_URL;
        //const regUrl=process.env.WEB_APP_REG_URL;
        const username="rahul@netbank.com";
        const password="Bank@123";
        console.log(loginurl)
        

        if (!loginurl ||!username||!password){
            throw new Error(
                "login credential are missing in .env"
            )
        }
         await page.goto(loginurl)
         await page.getByPlaceholder("User ID / Email").fill(username)
         await page.getByPlaceholder("Enter your password").fill(password)
         await page.getByTestId("loginBtn").click();
         //await page.getByTestId("otpLoginBtn").click()
        //  const otp="123456"
        //  for (let i=1;i<=otp.length;i++){
        //     await page.locator(`input[id="otp${i}"]`).fill(otp[i-1])
        //  }
        //  await page.getByTestId("verifyOtpBtn").click()

         await page.waitForTimeout(3000)

         await page.waitForLoadState("domcontentloaded");

         await use(page);
    }
});

export{expect} from "@playwright/test"