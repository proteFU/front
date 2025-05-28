import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayMusic from "../Pages/PlayMusic";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlayMusic />} />
            </Routes>
        </Router>
    );
}

export default App;
