import{Page,Locator} from"@playwright/test"

export class DownloadTarnsactions{

    private readonly page:Page
    private readonly viewstat:Locator;
    private readonly filetype:Locator;

    constructor(page:Page){
        this.page=page
        this.viewstat=this.page.getByTestId("viewStatement")
        this.filetype=this.page.getByRole("button",{name:'PDF'})
    }

    async downloadFile():Promise<any>{
        await this.viewstat.click()
        let filetypevisible=false
        let prevHeight=0
        while(true){
            if(await this.filetype.isVisible()){

                    
                    await this.filetype.click()
                
                filetypevisible=true
                this.page.on('dialog', async dialog => {
    console.log("Dialog found");
    console.log(dialog.type());
    console.log(dialog.message());
    await dialog.accept();
});
            }

            await this.page.evaluate(()=>{
                window.scrollTo(0,document.body.scrollHeight)
            })

            await this.page.waitForLoadState('load')

            const pageCHeight=await this.page.evaluate(()=>{
                return document.body.scrollHeight
            })
            if(prevHeight==pageCHeight){
                break;
            }

            prevHeight=pageCHeight
        }

    }

}