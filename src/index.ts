import express, { Request, Response } from "express"

const app = express()

app.get("/serveApi", (request: Request, response: Response) => {
    response.json({"message": "okay"})
})

app.post("/requestInfo", (request: Request, response: Response) => {
    let {searchedData} = request.body
    response.json({"message": "okay"})
})

app.listen(5000, () => console.log("server is running"))