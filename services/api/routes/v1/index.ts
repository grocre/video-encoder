import { Router } from "express";
import VideoEnconderController from "../../controller/VideoEncoderController";

const router = Router()

let videoEncoderController = new VideoEnconderController()

router.get("/searchVideos/:searchTopic", videoEncoderController.searchVideo)
router.get("/videos", videoEncoderController.queryAllVideos)

export default router
