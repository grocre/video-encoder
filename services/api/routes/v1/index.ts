import { Router, Request, Response } from "express";
import VideoEnconderController from "../../controller/VideoEncoderControler";

const router = Router()

let videoEncoderController = new VideoEnconderController()

router.get("/searchVideos/:searchTopic", videoEncoderController.searchVideo)

export default router