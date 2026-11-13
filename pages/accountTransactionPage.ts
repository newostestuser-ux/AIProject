import{Page,Locator}from"@playwright/test"

export class TransactionPage{

    private readonly page:Page;
    private readonly transHistoryList:Locator;
    private readonly viewstat:Locator;

    constructor(page:Page){
        this.page=page;
        this.transHistoryList=this.page.locator('tr[id^="txnRow-"]')
        this.viewstat=this.page.getByTestId("viewStatement")

    }

    async getAllTransactionDetails(): Promise<any[]> {

        await this.viewstat.click()
        await this.page.waitForLoadState("load")
        const transactions = [];
        let prevHeight = 0;
        let previousCount = 0;
        while(true){

            const count = await this.transHistoryList.count();
            for (let i = previousCount; i < count; i++) {

                const cells = await this.transHistoryList
                    .nth(i)
                    .locator('td')
                    .allTextContents();

                transactions.push(cells);
            }
            
            previousCount = count;

            await this.page.evaluate(() => {
                window.scrollTo(0, document.body.scrollHeight)
            })
            await this.page.waitForTimeout(500)

            const pageCurrentHeight = await this.page.evaluate(() => document.body.scrollHeight)
            const currentCount = await this.transHistoryList.count()
            if (prevHeight === pageCurrentHeight && currentCount === count) {
                break;
            }

            prevHeight = pageCurrentHeight
        }
        return transactions
    }
}
