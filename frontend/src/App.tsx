import { useState, FormEvent, KeyboardEvent } from 'react'
import './App.css'


let Urlfodase = ""

function App() {
    const [search, setSearch] = useState<string>("")

    const handleSearch = (event: FormEvent<HTMLInputElement>) => {
        const searchedValue = (event.target as HTMLInputElement).value
        setSearch(searchedValue)
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        let { key } = event
        if (key === 'Enter') {
            console.log("foi")
            // axios.post(Urlfodase, {data: search})
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
