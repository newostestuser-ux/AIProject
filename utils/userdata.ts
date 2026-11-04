import {faker} from "@faker-js/faker"

export class RandomUserData {

    static getFullName(){
        return faker.person.fullName()
    }

    static getEmail(){
        return faker.internet.email()
    
    }
    static getPhoneNumber(){
        return faker.phone.number()
    }
    static getPassword(){

        const password= faker.internet.password()

        return{
            password,
            confirmpassword:password
        }
    }

    }