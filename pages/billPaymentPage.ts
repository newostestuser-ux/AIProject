import {Page,Locator} from"@playwright/test"

export class BillPayment{

    private readonly page:Page;
    private readonly dashboardBillpayBtn:Locator;
    private readonly billPaymnetBtn:Locator;
    private readonly billPaymentOpt:Locator;
    private readonly selectedBillPaymentOpt:Locator;

    constructor(page:Page){
        this.page=page;
        this.dashboardBillpayBtn=this.page.getByText("Bill Payments")
        this.billPaymnetBtn=this.page.getByText("Pay Bills")
        this.billPaymentOpt=this.page.locator("button[data-testid^='category']")
        this.selectedBillPaymentOpt=this.page.locator("span[class='inline-flex items-center gap-1.5 bg-[#E8F0FE] text-[#002D62] text-xs font-semibold px-3 py-1.5 rounded-full']")
    }

    async clickDashboardBillPayment():Promise<Locator>{

        return this.dashboardBillpayBtn
    }

    async clickBillpayment():Promise<Locator>{
        return this.billPaymnetBtn
    }

    async billPaymentOptions(btn:Locator):Promise<any>{
        await btn.click()
        for(let i=0;i<await this.billPaymentOpt.count();i++){
            await this.billPaymentOpt.nth(i).click()
            if(await this.billPaymentOpt.nth(i).innerText===await this.selectedBillPaymentOpt.innerText){
                console.log(await this.selectedBillPaymentOpt.textContent())
            }

        }

    }
}