import dotenv from "dotenv"
import path from "path"
const envPath = path.resolve("../.env")

// Load env file
dotenv.config({ path: envPath })

const serverConfig = {
    PORT: process.env.PORT
}

console.log(serverConfig.PORT)
export { serverConfig }