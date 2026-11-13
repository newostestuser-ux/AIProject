import { test, expect } from "../fixtures/loginfixture";
import { FundTransferPage } from "../pages/fundTransferPage";
let fundTransferPage: FundTransferPage;

test.beforeEach("Login to user", async ({ loggedInPage }) => {
    await expect(loggedInPage).not.toHaveURL(/login/i);
    fundTransferPage = new FundTransferPage(loggedInPage);
    await loggedInPage.context().tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true
    });
});

test.describe("Fund Transfer tests", () => {

    test("@sanity Fund Transfer", async ({ loggedInPage }) => {

        const fundSms = await fundTransferPage.selectFundTransfer();
        await expect(fundSms).toBe("Select Transfer Type");

        const benSuccessPageTitle =await fundTransferPage.selectPaymentMethod();
        await expect(benSuccessPageTitle).toBe("Select Beneficiary");

        const selectBen =await fundTransferPage.selectBeneficiary();
        await expect(selectBen).toBe("Enter Amount");

        const reviewPageTitle =await fundTransferPage.enteramounttranfer();

        await expect(reviewPageTitle.pagecontent).toBe("Review Transfer");

        const fundDetails =await fundTransferPage.confirmTransferDetails(
            reviewPageTitle.enteredamount,
            reviewPageTitle.reviwedetailsAmount
        );

        await expect(fundDetails).toBe("OTP Verification");

        const transactionStatus =await fundTransferPage.otpVerification();

        await expect(transactionStatus).toBe("Transfer Successful!");
    });

});

test.afterEach("Capture trace on failure",async ({ loggedInPage }, testInfo) => {

    const tracePath = `traces/trace-${Date.now()}.zip`;

    if (testInfo.status !== testInfo.expectedStatus) {

        await loggedInPage.context().tracing.stop({
        path: tracePath
    });

        await testInfo.attach("Trace", {
        path: tracePath,
        contentType: "application/zip"
    });

    } else {
await loggedInPage.context().tracing.stop();
    }
});