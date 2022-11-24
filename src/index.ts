import express, { Request, Response } from "express"

const app = express()

// vale a pena ver a aplicabilidade disso com websockets

app.get("/serveApi", (request: Request, response: Response) => {
    response.json({"message": "okay"})
})

app.post("/requestInfo", (request: Request, response: Response) => {
    let {searchedData} = request.body
})

app.listen(5000, () => console.log("server is running"))

