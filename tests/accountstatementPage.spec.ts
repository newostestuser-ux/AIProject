import {test,expect}from "../fixtures/loginfixture"
import { AccountStatement} from "../pages/accountStatmentPage"

let accstatament:AccountStatement;

test.beforeEach("acc stat",async({loggedInPage})=>{
    //await expect(loggedInPage).toHaveURL(/login/i)
    accstatament=new AccountStatement(loggedInPage)
    // await loggedInPage.context().tracing.start({
    //     screenshots:true,
    //     snapshots:true,
    //     sources:true
    // })
})

test.describe("Account Statement tests",()=>{

    test("@Regression Account Statement",async({loggedInPage})=>{

        const accountDetails=await accstatament.getAccountDetails()  
        await expect(accountDetails.balan).toBe("₹2,50,000")
        await expect(accountDetails.accNo).toBe("XXXX XXXX 7890")
        await expect(accountDetails.succpage).toBe("Account Statement")
    
        
    })
})


test.afterEach("Capture trace on failure",async({loggedInPage})=>{
    // if (testInfo.status === "failed") {
    //     await loggedInPage.context().tracing.stop({ path: `traces/${testInfo.title}.zip` });
    // }
})