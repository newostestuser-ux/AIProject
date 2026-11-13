import {test as base,request} from"@playwright/test"
import dotenv from "dotenv";

dotenv.config();


type APIFixtures={
    token:string
};

export const test=base.extend<APIFixtures>({

    token:async({},use)=>{

        const apicontext=await request.newContext();
        const response=await apicontext.post(process.env.WEB_DB_URL!,{
         data: {
          username: 'admin',
          password: 'password123'
        }})
      

    const responseBody = await response.json();

    const token = responseBody.token;

    await use(token);
  }
});

export { expect } from '@playwright/test';
    