import cors from "cors"

const corsOptions = cors({
    origin: "http://localhost:5173", 
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
})

export default corsOptions