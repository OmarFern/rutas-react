
import "./App.css"

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";

function App() {
  return (
      <div>
 
 <Router>
  <Routes>
    <Route exact path="/" element={<h1>Home Page</h1>} />
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="About" element={ <About/>} />
    <Route exact path="Contact" element={<Contact/>} />
  </Routes>
  <hr/>
  <div className="list">
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/Home">HOME</Link></li>
            <li><Link to="About">ABOUT</Link></li>
            <li><Link to="Contact">CONTACT</Link></li>
          </ul>
        </div>
</Router>
      </div>


        


 
  );
}

export default App;
