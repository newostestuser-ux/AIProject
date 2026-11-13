import fs from 'fs'
import{test,expect} from '../../fixtures/dbloginfixture'


//create booking
test.describe.serial("booking api",async()=>{


    test("booking api post req",async({token,request})=>{

        //requestbody
        const jsonfile="./testdata/testdata.json"
        const requestbody=JSON.parse(fs.readFileSync(jsonfile,'utf-8'))
        
        //sending request

        const response=await request.post("https://restful-booker.herokuapp.com/booking",{
            data:requestbody
        })

        const responseBody=await response.json()
        const bookingId=await responseBody.bookingid;
        console.log(bookingId)

        // update booing using booing id with token
        const updatedfile="./testdata/updatetestdata.json"

        const updaterequestBody=JSON.parse(fs.readFileSync(updatedfile,'utf8'))
       // console.log(token)
       // console.log(updaterequestBody)

        const updateresponse=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
            {
                data:updaterequestBody,
                headers:{
                     "Content-Type": "application/json",
                      "Cookie":`token=${token}`
                }
            }
        )

    const updateresponsebody=await updateresponse.json();

        console.log(updateresponsebody)


    })
})
