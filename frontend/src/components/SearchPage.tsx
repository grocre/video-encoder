import { FormEvent, KeyboardEvent, useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import VideoResult from './VideoResult'
import api from '../services/api'

import { VideoObject } from '../@types'

export default function SearchPage() {

    const [searchVideos, setSearchVideos] = useSearchParams('')
    const [videosFounded, setVideosFounded] = useState<VideoObject[]>([])

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const searchedValue = (event.target as HTMLInputElement).value
        setSearchVideos(searchedValue)
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        let { key } = event
        if (key === 'Enter') {
            try {
                let { data } = await api.get(`v1/searchVideos/${searchVideos}`)
                setVideosFounded(data)
                setSearchVideos('')
            } catch (error: any) {
                console.log(error)
            }
        }
    }

    const firstRenderingSetAllVideos = async (): Promise<VideoObject[]> => {
        return await (await api.get(`v1/videos`)).data
    }

    useEffect(() => {
        async () => {
            setVideosFounded(await firstRenderingSetAllVideos())
        }
    })

    return (
        <div>
            <input onChange={handleSearch} onKeyDown={handleKeyDown} placeholder='Digite aqui a sua pesquisa' />
            {videosFounded.length > 0 ?
                <VideoResult videos={videosFounded} /> : ''
            }
        </div>
    )
}