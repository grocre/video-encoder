import { getVideosFromDatabase } from "../services/VideoEnconderService";
import { Request, Response } from "express";
import { VideoObject } from "../@types";

class VideoEnconderController {

    async searchVideo(request: Request, response: Response): Promise<void> {
        try {
            const { searchTopic } = request.params
            let queried = getVideosFromDatabase(searchTopic)
            response.status(200).json({"data": queried})
        } catch (error: any) {
            response.status(401).json({"message": error})
        }
    }
}

export default VideoEnconderController