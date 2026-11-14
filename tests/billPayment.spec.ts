import{test,expect} from "../fixtures/loginfixture"
import { BillPayment } from "../pages/billPaymentPage"

let billPayment:BillPayment;

test.beforeEach("start of bill payment",async({loggedInPage})=>{
    billPayment=await new BillPayment(loggedInPage);

    // await loggedInPage.context().tracing.start({
    //     screenshots:true,
    //     snapshots:true,
    //     sources:true
    //    })
})

test.describe("bill paymnent",async()=>{

    test("bill paymnet using",async({loggedInPage})=>{
        const dashboadrdbillpay=await billPayment.clickDashboardBillPayment();
        console.log(dashboadrdbillpay)
        const billpay=await billPayment.clickBillpayment()
        console.log(billpay)
        const clickbillpay=await billPayment.billPaymentOptions(dashboadrdbillpay)

    })


})

test.afterEach("end of bill pay",async({loggedInPage})=>{
//    const tracepath=`./trace/tracefile-${Date.now()}.zip`
//    if(testInfo.status!=testInfo.expectedStatus){
//         await loggedInPage.context().tracing.stop({
//             path:tracepath
//         })

//         await testInfo.attach('Traces',{
//             path: tracepath,
//             contentType: "application/zip"

//         })
//    }else{
//     await loggedInPage.context().tracing.stop()
//    }


})