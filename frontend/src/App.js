import {Routes, Route} from 'react-router-dom'
import Login from "./components/login";
import Score from "./components/scorePage";
import User from "./components/user";


function App() {
    return (
        <Routes>
                <Route path="/login" element={< Login />} />
                <Route path="/score" element={< Score />} />
                <Route path="/user" element={< User />} />
        </Routes>
    );
}

export default App;
