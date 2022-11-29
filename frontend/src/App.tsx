import { useState, FormEvent, KeyboardEvent } from 'react'
import api from './services/api'
import './App.css'

function App() {
    const [search, setSearch] = useState<string>("")

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const searchedValue = (event.target as HTMLInputElement).value
        setSearch(searchedValue)
    }

    const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
        let { key } = event
        if (key === 'Enter') {
            await api.post("/videos", {
                "searched": search
            })
            console.log("foi")
            setSearch('')
        }
    }

    return (
        <div className="App">
            <input onChange={handleSearch} onKeyDown={handleKeyDown} value={search} placeholder='Digite aqui a sua pesquisa' />
        </div>
    )
}

export default App
