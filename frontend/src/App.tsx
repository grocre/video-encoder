import { BrowserRouter } from 'react-router-dom'
import SearchPage from './pages/SearchPage'

import './App.css'

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
