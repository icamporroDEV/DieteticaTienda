import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./Screens/Home";
import { Contact } from "./Screens/Contact";

function App() {
  return (
    <div >
     <Router>
        <NavBar/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
     </Router>
    </div>
  );
}

export default App;
