import {Page,Locator}from"@playwright/test"

export class AccountStatement{


    private readonly page:Page;
    private readonly accountBalance:Locator;
    private readonly accountNum:Locator;
    private readonly viwestat:Locator
    private readonly accstapage:Locator;
    //private readonly:
    constructor(page:Page){

        this.page=page;
        this.accountBalance=this.page.getByTestId("accBal1")
        this.accountNum=this.page.getByTestId("accNo1")
        this.viwestat=this.page.getByTestId("viewStatement")
        this.accstapage=this.page.getByText("Account Statement")
    }

    async getAccountDetails():Promise<any>{

        const balan=await this.accountBalance.textContent();
        const accNo=await this.accountNum.innerText();
        await this.viwestat.click()
        await this.page.waitForLoadState("domcontentloaded")
        const succpage=await this.accstapage.textContent();
        return{
            balan,
            accNo,
            succpage
        }

    }

}