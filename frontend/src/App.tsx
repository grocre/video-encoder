import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SearchInput from './components/SearchInput'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <SearchInput />
            </BrowserRouter>
        </div>
    )
}

export default App
