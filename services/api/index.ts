import express from "express"
import router from "./routes/v1"
import cors from "cors"
import corsOptions from "./services/cors"

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use("/v1/",router)

app.listen(5000, () => console.log("server running"))