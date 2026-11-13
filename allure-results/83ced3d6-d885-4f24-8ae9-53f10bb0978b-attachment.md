# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\fullApi.spec.ts >> booking api >> booking api post req
- Location: tests\api\fullApi.spec.ts:9:9

# Error details

```
SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
```

# Test source

```ts
  1  | import {test as base,request} from"@playwright/test"
  2  | import dotenv from "dotenv";
  3  | 
  4  | dotenv.config();
  5  | 
  6  | 
  7  | type APIFixtures={
  8  |     token:string
  9  | };
  10 | 
  11 | export const test=base.extend<APIFixtures>({
  12 | 
  13 |     token:async({},use)=>{
  14 | 
  15 |         const apicontext=await request.newContext();
  16 |         const response=await apicontext.post(process.env.WEB_DB_URL!,{
  17 |          data: {
  18 |           username: 'admin',
  19 |           password: 'password123'
  20 |         }})
  21 |       
  22 | 
> 23 |     const responseBody = await response.json();
     |                          ^ SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
  24 | 
  25 |     const token = responseBody.token;
  26 | 
  27 |     await use(token);
  28 |   }
  29 | });
  30 | 
  31 | export { expect } from '@playwright/test';
  32 |     
```