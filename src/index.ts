import express, { Request, Response } from "express"
import * as dotenv from "dotenv"
import axios from "axios"

dotenv.config()

const app = express()

let url = "test"

app.get("/serveApi", (request: Request, response: Response) => {
    response.json({"message": "okay"})
})

app.post("/requestInfo", async (request: Request, response: Response) => {
    try {   
        let {searchedData} = request.body
        await axios.post(url, searchedData)
        response.status(200)
    } catch (error:any) {
        response.json(error).status(400)
    }
})

app.listen(5000, () => console.log("server is running"))

