import { FormEvent, KeyboardEvent, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import api from '../services/api'

import { VideoObject } from '../@types'

export default function SearchInput() {

    const [search, setSearch] = useSearchParams('')
    const [videosFounded, setVideosFounded] = useState<VideoObject>()

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const searchedValue = (event.target as HTMLInputElement).value
        setSearch(searchedValue)
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        let { key } = event
        if (key === 'Enter') {
            try {
                let { data } = await api.get(`v1/searchVideos/${search}`)
                setVideosFounded(data)
                setSearch('')
            } catch (error: any) {
                console.log(error)
            }
        }
    }

    return (
        <input onChange={handleSearch} onKeyDown={handleKeyDown} placeholder='Digite aqui a sua pesquisa' />
    )
}