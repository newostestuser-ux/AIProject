# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: downloadTransaction.spec.ts >> download >> download transaction @sanity
- Location: tests\downloadTransaction.spec.ts:17:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'PDF' })
    - locator resolved to <button type="button" id="downloadPDF" data-testid="downloadPDF" class="text-sm px-4 py-2 border border-[#002D62] text-[#002D62] bg-white rounded-lg hover:bg-[#E8F0FE] cursor-pointer transition-all duration-200">PDF</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import{Page,Locator} from"@playwright/test"
  2  | 
  3  | export class DownloadTarnsactions{
  4  | 
  5  |     private readonly page:Page
  6  |     private readonly viewstat:Locator;
  7  |     private readonly filetype:Locator;
  8  | 
  9  |     constructor(page:Page){
  10 |         this.page=page
  11 |         this.viewstat=this.page.getByTestId("viewStatement")
  12 |         this.filetype=this.page.getByRole("button",{name:'PDF'})
  13 |     }
  14 | 
  15 |     async downloadFile():Promise<any>{
  16 |         await this.viewstat.click()
  17 |         let filetypevisible=false
  18 |         let prevHeight=0
  19 |         while(true){
  20 |             if(await this.filetype.isVisible()){
  21 | 
  22 |                 const dialogPromise = this.page.waitForEvent('dialog');
  23 | 
> 24 |                 await this.filetype.click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  25 | 
  26 |                 const dialog = await dialogPromise;
  27 | 
  28 |                 console.log(dialog.type());
  29 |                 console.log(dialog.message());
  30 | 
  31 |                 await dialog.accept();
  32 |                 filetypevisible=true
  33 |                 break;
  34 |             }
  35 | 
  36 |             await this.page.evaluate(()=>{
  37 |                 window.scrollTo(0,document.body.scrollHeight)
  38 |             })
  39 | 
  40 |             await this.page.waitForLoadState('load')
  41 | 
  42 |             const pageCHeight=await this.page.evaluate(()=>{
  43 |                 return document.body.scrollHeight
  44 |             })
  45 |             if(prevHeight==pageCHeight){
  46 |                 break;
  47 |             }
  48 | 
  49 |             prevHeight=pageCHeight
  50 |         }
  51 | 
  52 |     }
  53 | 
  54 | }
```