import { Router, Request, Response } from "express";

const router = Router()

router.get("/searchVideos/:searchTopic", (request: Request, response: Response) => {
    const { searchTopic } = request.params
    response.json({
        "Data": searchTopic
    })
})

export default router