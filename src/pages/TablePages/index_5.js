import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_5() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Jeremy-Isaacs.jpg'
                to='/gallery/id5/Jeremy-Isaacs'
            />
        </Square>
        <Square><TableItem
                src='/images/table/Joe-Casely-Hayford.jpg'
                to='/gallery/id5/Joe-Casely-Hayford'
            /></Square>
        <Square><TableItem
                src='/images/table/Rolf-Sachs.jpg'
                to='/gallery/id5/Rolf-Sachs'
            /></Square>
        <Square><TableItem
            src='/images/table/Metstein-&-Andy-McMillan.jpg'
            to='/gallery/id5/Metstein-&-Andy-McMillan'
        /></Square>
        <Square><TableItem
                src='/images/table/John-Winter.jpg'
                to='/gallery/id5/John-Winter'
            /></Square>
        <Square><TableItem
                src='/images/table/Jan-Kaplicky.jpg'
                to='/gallery/id5/Jan-Kaplicky'
            /></Square>
        <Square><TableItem
                src='/images/table/Simon-Conder.jpg'
                to='/gallery/id5/Simon-Conder'
            /></Square>
        <Square><TableItem
                src='/images/table/Johnny-Grey.jpg'
                to='/gallery/id5/Johnny-Grey'
            /></Square>
        <Square><TableItem
                src='/images/table/Lord-March.jpg'
                to='/gallery/id5/Lord-March'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id4">4</NumLink>
            <NumLinkCurr>5</NumLinkCurr>
            <NumLink to="/gallery/id6">6</NumLink>
            <NumLink to="/gallery/id7">7</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id4">Previous</NumLink>
        <NumLink to="/gallery/id6">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Jeremy-Isaacs' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Jeremy-Isaacs.jpg'
        text='Jeremy Isaacs'
        back='/gallery/id4/Harry-&-Beardsley'
        next='/gallery/id5/Joe-Casely-Hayford'
        />}/>
    
    <Route path='Joe-Casely-Hayford' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Joe-Casely-Hayford.jpg'
        text='Joe Casey Hayford'
        back='/gallery/id5/Jeremy-Isaacs'
        next='/gallery/id5/Rolf-Sachs'
        />}/>
    
    <Route path='Rolf-Sachs' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Rolf-Sachs.jpg'
        text='Rolf Sachs'
        back='/gallery/id5/Joe-Casely-Hayford'
        next='/gallery/id5/Metstein-&-Andy-McMillan'
        />}/>
    
    <Route path='Metstein-&-Andy-McMillan' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Metstein-&-Andy-McMillan.jpg'
        text='Metstein & Andy McMillan'
        back='/gallery/id5/Rolf-Sachs'
        next='/gallery/id5/John-Winter'
        />}/>
    
    <Route path='John-Winter' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/John-Winter.jpg'
        text='John Winter'
        back='/gallery/id5/Metstein-&-Andy-McMillan'
        next='/gallery/id5/Jan-Kaplicky'
        />}/>
    
    <Route path='Jan-Kaplicky' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Jan-Kaplicky.jpg'
        text='Jan Kaplicky'
        back='/gallery/id5/John-Winter'
        next='/gallery/id5/Simon-Conder'
        />}/>
    
    <Route path='Simon-Conder' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Simon-Conder.jpg'
        text='Simon Conder'
        back='/gallery/id5/Jan-Kaplicky'
        next='/gallery/id5/Johnny-Grey'
        />}/>
    
    <Route path='Johnny-Grey' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Johnny-Grey.jpg'
        text='Johnny Grey'
        back='/gallery/id5/Simon-Conder'
        next='/gallery/id5/Lord-March'
        />}/>
    
    <Route path='Lord-March' element={<PageItem
        gallery='/gallery/id5'
        image='/images/table/Lord-March.jpg'
        text='Lord March'
        back='/gallery/id5/Johnny-Grey'
        next='/gallery/id6/Lord-Harewood'
        />}/>

    


    </Routes>
    </div>
  )
}

export default Index_5