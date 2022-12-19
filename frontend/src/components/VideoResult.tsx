import { ReactPropTypes, useState } from "react";
import { VideoObject, VideoResultProps } from "../@types";

export default function VideoResult(props: VideoResultProps){
    let [videosFounded, setVideosFounded] = useState<VideoObject[]>(props.videos)

    return (
        <></>
    )
}