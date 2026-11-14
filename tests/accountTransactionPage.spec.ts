import{test,expect}from"../fixtures/loginfixture"
import { TransactionPage } from "../pages/accountTransactionPage"

let transactionPage:TransactionPage

test.beforeEach("",async({loggedInPage})=>{
    transactionPage=await new TransactionPage(loggedInPage);
    // await loggedInPage.context().tracing.start({
    //     screenshots:true,
    //     snapshots:true,
    //     sources:true
    // })
})

test.describe("Account Transaction tests",()=>{

    test(" Account Transaction",async({loggedInPage})=>{
        const transactiondetail= await transactionPage.getAllTransactionDetails();
        console.log(transactiondetail)

    })
})

test.afterEach("Capture trace on failure",async({loggedInPage})=>{
    // if (testInfo.status === "failed") {
    //     await loggedInPage.context().tracing.stop({ path: `traces/${testInfo.title}.zip` });
    // }                       
})