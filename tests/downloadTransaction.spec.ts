import{test,expect}from"../fixtures/loginfixture"
import { DownloadTarnsactions } from "../pages/downloadTranscationHistorypage"

let downloadfile:DownloadTarnsactions

test.beforeEach("file download",async({loggedInPage},testInfo)=>{

    downloadfile=await new DownloadTarnsactions(loggedInPage);
    await loggedInPage.context().tracing.start({
        screenshots:true,
        snapshots:true,
        sources:true
    })
})

test.describe("download",async()=>{
    test("download transaction @sanity",async({loggedInPage})=>{
        const file=await downloadfile.downloadFile()

    })
})

test.afterEach("stop dwonload",async({loggedInPage},testInfo)=>{
    const tracefile=`traces/trace-/${Date.now()}.zip`
    if(testInfo.status!=testInfo.expectedStatus){
         await loggedInPage.context().tracing.stop({
            path:tracefile
        })
        await testInfo.attach("traces",{
            path:tracefile,
            contentType: "application/zip"
        
        })
    }else{
        await loggedInPage.context().tracing.stop()
    }
})