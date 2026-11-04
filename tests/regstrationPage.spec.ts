import {test,expect} from "@playwright/test"
import {TestConfig} from "../utils/testconfig"
import { RandomUserData } from "../utils/userdata";
import { RegistrationPage } from "../pages/registrationPage"

let registrationPage:RegistrationPage;

test.beforeEach("Registartion test",async({page})=>{
    console.log("URL:",TestConfig.registartionurl)
    await page.goto(TestConfig.registartionurl);
    registrationPage=new RegistrationPage(page);
})

test.afterEach("End of Registartion",async({page})=>{
    await page.close();
})

test("new user registration",async({page})=>{
    const password=RandomUserData.getPassword();
    const sucessPageTitle=await registrationPage.newUserRegstration(
                                RandomUserData.getFullName(),
                                RandomUserData.getEmail(),
                                "9823456679",
                                password.password,
                                password.confirmpassword
                                )
  await expect(sucessPageTitle).toBe("Welcome to NetBanking")
})