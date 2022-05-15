import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'


function Index_3() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Countess-Koulinskyi.jpg'
                to='/gallery/id3/Countess-Koulinskyi'
            />
        </Square>
        <Square><TableItem
                src='/images/table/David-Carter.jpg'
                to='/gallery/id3/David-Carter'
            /></Square>
        <Square><TableItem
                src='/images/table/Dexter.jpg'
                to='/gallery/id3/Dexter'
            /></Square>
        <Square><TableItem
                src='/images/table/Foundry-Worker.jpg'
                to='/gallery/id3/Foundry-Worker'
            /></Square>
        <Square><TableItem
                src='/images/table/David-Furnish.jpg'
                to='/gallery/id3/David-Furnish'
            /></Square>
        <Square><TableItem
                src='/images/table/Fiona-Scarry.jpg'
                to='/gallery/id3/Fiona-Scarry'
            /></Square>
        <Square><TableItem
                src='/images/table/Craigie-Aitchison.jpg'
                to='/gallery/id3/Craigie-Aitchison'
            /></Square>
        <Square><TableItem
                src='/images/table/Gavin-Turk.jpg'
                to='/gallery/id3/Gavin-Turk'
            /></Square>
        <Square><TableItem
                src='/images/table/Allen-Jones.jpg'
                to='/gallery/id3/Allen-Jones'
            /></Square>
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id2">2</NumLink>
            <NumLinkCurr>3</NumLinkCurr>
            <NumLink to="/gallery/id4">4</NumLink>
            <NumLink to="/gallery/id5">5</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id2">Previous</NumLink>
        <NumLink to="/gallery/id4">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Countess-Koulinskyi' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Countess-Koulinskyi.jpg'
        text='Countess Koulinskyi'
        back='/gallery/id2/David-Adjaye'
        next='/gallery/id3/David-Carter'
        />}></Route>
    
    <Route path='David-Carter' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/David-Carter.jpg'
        text='David Carter'
        back='/gallery/id3/Countess-Koulinskyi'
        next='/gallery/id3/Dexter'
        />}></Route>
    
    <Route path='Dexter' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Dexter.jpg'
        text='Dexter'
        back='/gallery/id3/David-Carter'
        next='/gallery/id3/Foundry-Worker'
        />}></Route>
    
    <Route path='Foundry-Worker' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Foundry-Worker.jpg'
        text='Foundry Worker'
        back='/gallery/id3/Dexter'
        next='/gallery/id3/David-Furnish'
        />}></Route>
    
    <Route path='David-Furnish' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/David-Furnish.jpg'
        text='David Furnish'
        back='/gallery/id3/Foundry-Worker'
        next='/gallery/id3/Fiona-Scarry'
        />}></Route>
    
    <Route path='Fiona-Scarry' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Fiona-Scarry.jpg'
        text='Fiona Scarry'
        back='/gallery/id3/David-Furnish'
        next='/gallery/id3/Craigie-Aitchison'
        />}></Route>

    <Route path='Craigie-Aitchison' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Craigie-Aitchison.jpg'
        text='Craigie Aitchison'
        back='/gallery/id3/Fiona-Scarry'
        next='/gallery/id3/Gavin-Turk'
        />}></Route>
    
    <Route path='Gavin-Turk' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Gavin-Turk.jpg'
        text='Gavin Turk'
        back='/gallery/id3/Craigie-Aitchison'
        next='/gallery/id3/Allen-Jones'
        />}></Route>
    
    <Route path='Allen-Jones' element={<PageItem
        gallery='/gallery/id3'
        image='/images/table/Allen-Jones.jpg'
        text='Allen Jones'
        back='/gallery/id3/Gavin-Turk'
        next='/gallery/id4/David-Hockney'
        />}></Route>

    </Routes>
    </div>
  )
}

export default Index_3