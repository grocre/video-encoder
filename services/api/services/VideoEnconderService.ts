import { VideoObject } from "../@types";
import { firestore } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore"

// ajustar para o videoSearch
function getVideosFromDatabase(videoSearch: string): VideoObject[] | void {
    getDocs(query(collection(firestore, "videos"), orderBy("created_at")))
        .then(data => data.docs.map(doc => doc ))
        .catch(error => error)
}

export { getVideosFromDatabase }