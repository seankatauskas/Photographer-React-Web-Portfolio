import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import About from './pages/about';
// import Gallery from './pages/gallery';
// import Contact from './pages/contact';
// import Press from './pages/press';



function App() {
  return (
    <Router>
      <Home />
     {/* <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/press' element={<Press />}></Route>
      </Routes> */}
   
    </Router>
  );
}

export default App;
