import{test,expect} from "../fixtures/loginfixture"

test("login to acc",async({loggedInPage})=>{
    console.log("URL:",loggedInPage.url())
    //await expect(loggedInPage).not.toHaveURL(/login/i);
})