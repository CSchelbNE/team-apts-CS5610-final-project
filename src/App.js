import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import VinylShop from "./home/vinyl-shop";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/*" element={<VinylShop/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
