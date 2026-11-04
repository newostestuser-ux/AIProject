import {test,expect} from "@playwright/test"
import { TestConfig } from "../utils/testconfig"
import { NykaaFilterPage } from "../pages/nykaaFilterPage"

let nykaaFilterPage:NykaaFilterPage;

test.beforeEach("starting of test NykaaFilter",async({page})=>{
    console.log("URL:",TestConfig.loginurl)
    await page.goto(TestConfig.loginurl!)
    nykaaFilterPage=new NykaaFilterPage(page)
})

test("Nykaa Filter Options",async({page})=>{
  await nykaaFilterPage.getAllFilters();  
})