import React, {useState} from 'react';
import Table from '../components/Table/index'
// import ImageExpand from '../components/Table/ImageExpand/ImageExpand'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index_2 from './TablePages/index_2'
import Index_3 from './TablePages/index_3'
import Index_4 from './TablePages/index_4'
import Index_5 from './TablePages/index_5'
import Index_6 from './TablePages/index_6'
import Index_7 from './TablePages/index_7'
import Index_8 from './TablePages/index_8'
import Index_9 from './TablePages/index_9'



const Gallery = () => {

  return (
    <div>
      {/* <ImageExpand /> */}
      {/* <Table /> */}


        <Routes>
          <Route path="/*" exact element={<Table />}></Route>
          <Route path='id2/*' element={<Index_2 />}></Route>
          <Route path='id3/*' element={<Index_3 />}></Route>
          <Route path='id4/*' element={<Index_4 />}></Route>
          <Route path='id5/*' element={<Index_5 />}></Route>
          <Route path='id6/*' element={<Index_6 />}></Route>
          <Route path='id7/*' element={<Index_7 />}></Route>
          <Route path='id8/*' element={<Index_8 />}></Route>
          <Route path='id9/*' element={<Index_9 />}></Route>
        </Routes>
      
    </div>
  );
};

export default Gallery;