import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_7() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Jock.jpg'
                to='/gallery/id7/Jock'
            />
        </Square>
        <Square><TableItem
                src='/images/table/Troy.jpg'
                to='/gallery/id7/Troy'
            /></Square>
        <Square><TableItem
                src='/images/table/Teds.jpg'
                to='/gallery/id7/Teds'
            /></Square>
        <Square><TableItem
            src='/images/table/Tintin.jpg'
            to='/gallery/id7/Tintin'
        /></Square>
        <Square><TableItem
                src='/images/table/Eileen.jpg'
                to='/gallery/id7/Eileen'
            /></Square>
        <Square><TableItem
                src='/images/table/Matisse-Fashion.jpg'
                to='/gallery/id7/Matisse-Fashion'
            /></Square>
        <Square><TableItem
                src='/images/table/Gisele.jpg'
                to='/gallery/id7/Gisele'
            /></Square>
        <Square><TableItem
                src='/images/table/Tuuli.jpg'
                to='/gallery/id7/Tuuli'
            /></Square>
        <Square><TableItem
                src='/images/table/Veronica.jpg'
                to='/gallery/id7/Veronica'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id6">6</NumLink>
            <NumLinkCurr>7</NumLinkCurr>
            <NumLink to="/gallery/id8">8</NumLink>
            <NumLink to="/gallery/id9">9</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id6">Previous</NumLink>
        <NumLink to="/gallery/id8">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Jock' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Jock.jpg'
        text='Jock'
        back='/gallery/id6/St-Etienne'
        next='/gallery/id7/Troy'
        />}/>
    
    <Route path='Troy' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Troy.jpg'
        text='Troy'
        back='/gallery/id7/Jock'
        next='/gallery/id7/Teds'
        />}/>
    
    <Route path='Teds' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Teds.jpg'
        text='Teds'
        back='/gallery/id7/Troy'
        next='/gallery/id7/Tintin'
        />}/>
    
    <Route path='Tintin' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Tintin.jpg'
        text='Tintin'
        back='/gallery/id7/Teds'
        next='/gallery/id7/Eileen'
        />}/>
    
    <Route path='Eileen' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Eileen.jpg'
        text='Eileen'
        back='/gallery/id7/Tintin'
        next='/gallery/id7/Matisse-Fashion'
        />}/>
    
    <Route path='Matisse-Fashion' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Matisse-Fashion.jpg'
        text='Matisse Fashion'
        back='/gallery/id7/Eileen'
        next='/gallery/id7/Gisele'
        />}/>
    
    <Route path='Gisele' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Gisele.jpg'
        text='Gisele'
        back='/gallery/id7/Matisse-Fashion'
        next='/gallery/id7/Tuuli'
        />}/>
    
    <Route path='Tuuli' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Tuuli.jpg'
        text='Tuuli'
        back='/gallery/id7/Gisele'
        next='/gallery/id7/Veronica'
        />}/>
    
    <Route path='Veronica' element={<PageItem
        gallery='/gallery/id7'
        image='/images/table/Veronica.jpg'
        text='Veronica'
        back='/gallery/id7/Tuuli'
        next='/gallery/id8/Yolanda'
        />}/>
    

    </Routes>   
    </div>
  )
}

export default Index_7