import dotenv from "dotenv"

dotenv.config();

export class TestConfig{

    static readonly loginurl=process.env.WEB_APP_NYKAA_URL;

    //static readonly registartionurl:string =process.env.WEB_APP_REG_URL?? ""
}