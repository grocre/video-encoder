import { firestore } from "../firebase";
import { collection, getDocs, orderBy, query, where, DocumentData, QueryDocumentSnapshot } from "firebase/firestore"

// ajustar para o videoSearch
async function getVideosFromDatabase(videoSearch: string): Promise<QueryDocumentSnapshot<DocumentData>[]> {
    let queriedVideos = (await getDocs(query(collection(firestore, "videoData"), where("busca", "==", videoSearch)))).docs
    return queriedVideos
}

export { getVideosFromDatabase }