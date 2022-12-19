import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SearchPage from './components/SearchPage'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <SearchPage />
            </BrowserRouter>
        </div>
    )
}

export default App
