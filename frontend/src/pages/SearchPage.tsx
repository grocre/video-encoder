import { FormEvent, KeyboardEvent, useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import api from '../services/api'

import { VideoObject } from '../@types'
import { AxiosResponse } from 'axios'

import "./SearchPage.css"

export default function SearchPage() {

    const [searchVideos, setSearchVideos] = useSearchParams('')
    const [videosFounded, setVideosFounded] = useState<VideoObject[] | undefined>()

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

    const firstRenderingSetAllVideos = async (): Promise<AxiosResponse> => {
        const response = await api.get(`v1/videos`)
        return response.data

    }

    // colocar as infos no localstorage -> cachezão
    useEffect(() => {
        const fetchVideos = async () => {
            setVideosFounded(await (await firstRenderingSetAllVideos()).data)
        }
        fetchVideos()
    }, [])

    return (
        <div>
            <input onChange={handleSearch} onKeyDown={handleKeyDown} placeholder='Digite aqui a sua pesquisa' />
            <ul id='classList'>
                {videosFounded?.map(videoFounded => <li key={videoFounded.id}>{videoFounded.title}</li>)}
            </ul>
        </div>
    )
}