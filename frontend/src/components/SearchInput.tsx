import { FormEvent, KeyboardEvent } from 'react'
import { useSearchParams } from "react-router-dom"
import api from '../services/api'

export default function SearchInput() {

    const [search, setSearch] = useSearchParams('')

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const searchedValue = (event.target as HTMLInputElement).value
        setSearch(searchedValue)
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        let { key } = event
        if (key === 'Enter') {
            await api.get(`/searchVideos/${search}`)
            setSearch('')
        }
    }

    return (
        <input onChange={handleSearch} onKeyDown={handleKeyDown} placeholder='Digite aqui a sua pesquisa' />
    )
}