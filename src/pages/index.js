import React, {useState} from 'react';
import {lazy, Suspense}  from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import About from './about';
// import Gallery from './gallery';
import Contact from './contact';

import Main from './main';

const Gallery = lazy(() => import('./gallery'));
const Press = lazy(() => import('./press'));



const Home = () => {
  const[isOpen, setIsOpen] = useState(false)
  const toggle = () => { setIsOpen(!isOpen) }

  return (
    <div> 
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/*" exact element={<Main />}></Route>
        <Route path='/about' element={<About />}></Route>
        
        <Route path='/gallery/*' element={<Gallery />}></Route>
       
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/press' element={<Press />}></Route>
      </Routes> 
      </Suspense>     

      
    </div>
  );
};

export default Home;