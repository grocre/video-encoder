import { firestore } from "../firebase";
import { collection, getDocs, query, where, DocumentData } from "firebase/firestore"

async function queryVideosFromDatabase(videoSearch: string): Promise<DocumentData[]> {
    let queriedVideos = (await getDocs(query(collection(firestore, "videoData"), where("busca", "==", videoSearch)))).docs
    let queriedVideosObjects = queriedVideos.map(doc => doc.data())
    return queriedVideosObjects
}

async function queryAllVideosFromDatabase(): Promise <DocumentData[]> {
    let queriedVideos = (await getDocs(query(collection(firestore, "videoData")))).docs
    let queriedVideoObjects = queriedVideos.map(doc => doc.data())
    return queriedVideoObjects
}

export { queryVideosFromDatabase, queryAllVideosFromDatabase }