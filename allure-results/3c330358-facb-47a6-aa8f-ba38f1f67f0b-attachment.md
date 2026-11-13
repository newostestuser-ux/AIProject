# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\fullApi.spec.ts >> booking api >> booking api post req
- Location: tests\api\fullApi.spec.ts:9:9

# Error details

```
SyntaxError: Unexpected token 'B', "Bad Request" is not valid JSON
```

# Test source

```ts
  1  | import fs from 'fs'
  2  | import{test,expect} from '../../fixtures/dbloginfixture'
  3  | 
  4  | 
  5  | //create booking
  6  | test.describe.serial("booking api",async()=>{
  7  | 
  8  | 
  9  |     test("booking api post req",async({token,request})=>{
  10 | 
  11 |         //requestbody
  12 |         const jsonfile="./testdata/testdata.json"
  13 |         const requestbody=JSON.parse(fs.readFileSync(jsonfile,'utf-8'))
  14 |         
  15 |         //sending request
  16 | 
  17 |         const response=await request.post("https://restful-booker.herokuapp.com/booking",{
  18 |             data:requestbody
  19 |         })
  20 | 
  21 |         const responseBody=await response.json()
  22 |         const bookingId=await responseBody.bookingid;
  23 |         console.log(bookingId)
  24 | 
  25 |         // update booing using booing id with token
  26 |         const updatedfile="./testdata/updatetestdata.json"
  27 | 
  28 |         const updaterequestBody=JSON.parse(fs.readFileSync(updatedfile,'utf8'))
  29 |         console.log(token)
  30 |         console.log(updaterequestBody)
  31 | 
  32 |         const updateresponse=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
  33 |             {
  34 |                 data:{
  35 |                     updaterequestBody
  36 |                 },
  37 |                 headers:{
  38 |                     cookie:`token=${token}`
  39 |                 }
  40 |             }
  41 |         )
  42 | 
> 43 |         const updateresponsebody=await updateresponse.json();
     |                                  ^ SyntaxError: Unexpected token 'B', "Bad Request" is not valid JSON
  44 | 
  45 |         console.log(updaterequestBody)
  46 | 
  47 | 
  48 |     })
  49 | })
  50 | 
```