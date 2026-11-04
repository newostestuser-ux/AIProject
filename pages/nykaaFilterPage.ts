import{Page,Locator} from "@playwright/test"

export class NykaaFilterPage{

    private readonly page:Page;

    //Locators-fliters

    //private readonly filterOpt:Locator;


    constructor(page:Page){
        this.page=page;
        //this.filterOpt=this.page.locator("div[class='css-8c6tij']");

    }
async getAllFilters() {

    const categories = await this.page.locator('div.css-8c6tij').allTextContents();
    const filterMap: Record<string, string[]> = {};
        for (const category of categories) {
            await this.page.getByText(`${category}`,{ exact: true }).click();
            filterMap[category] = await this.page.locator(`xpath=//div[text()="${category}"]/ancestor::div[contains(@class,'css')]//div[@title]`).allTextContents();
            for (const [category, options] of Object.entries(filterMap)) {
                for (const option of options) {
                    console.log(`${category} -> ${option}`);

                    // validation or click
                    await this.page.getByText(option,{exact:true}).first().click();
                }
            }
        console.log(filterMap)
        }
    return filterMap;
}






    // async filterOptions():Promise<any>{
    //     const filterOptions=await this.filterOpt.allTextContents()
    //     console.log(filterOptions)
    // }

}