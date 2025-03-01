import express from "express"
const app = express()
import { serverConfig, logger } from "./config/index.js"
import { router as apiRoutes } from "./routes/index.js"


app.use("/api", apiRoutes)
app.listen(serverConfig.PORT, () => {
    console.log("Server is Listening at PORT :", serverConfig.PORT)
    logger.info("Sucessfully started the server", "root", {})
})