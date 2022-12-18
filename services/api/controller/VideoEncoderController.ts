import { getVideosFromDatabase } from "../services/VideoEnconderService";
import { Request, Response } from "express";

class VideoEnconderController {

    async searchVideo(request: Request, response: Response): Promise<void> {
        const { searchTopic } = request.params
        try {
            let queried = await getVideosFromDatabase(searchTopic)
            response.status(200).json({"data": queried})
        } catch (error: any) {
            response.status(405).json({"message": error})
        }
    }
}

export default VideoEnconderController