import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_9() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Harry-Hill.jpg'
                to='/gallery/id9/Harry-Hill'
            />
        </Square>
        <Square><TableItem
                src='/images/table/Mark-Anthony-Turnage.jpg'
                to='/gallery/id9/Mark-Anthony-Turnage'
            /></Square>
        <Square><TableItem
                src='/images/table/James-Anda.jpg'
                to='/gallery/id9/James-Anda'
            /></Square>
        <Square><TableItem
            src='/images/table/Joseph-Stiglitz.jpg'
            to='/gallery/id9/Joseph-Stiglitz'
        /></Square>
        <Square><TableItem
                src='/images/table/Ken-Livingstone.jpg'
                to='/gallery/id9/Ken-Livingstone'
            /></Square>
        <Square><TableItem
                src='/images/table/Erdem.jpg'
                to='/gallery/id9/Erdem'
            /></Square>
        <Square><TableItem
                src=''
                to='/gallery/id9/'
            /></Square>
        <Square><TableItem
                src=''
                to='/gallery/id9/'
            /></Square>
        <Square><TableItem
                src=''
                to='/gallery/id9/'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id7">7</NumLink>
            <NumLink to="/gallery/id8">8</NumLink>
            <NumLinkCurr>9</NumLinkCurr>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id8">Previous</NumLink>
        <NumLinkPrev >Next</NumLinkPrev>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Harry-Hill' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/Harry-Hill.jpg'
        text='Harry Hill'
        back='/gallery/id8/Amanda-Levete'
        next='/gallery/id9/Mark-Anthony-Turnage'
        />}/>
    
    <Route path='Mark-Anthony-Turnage' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/Mark-Anthony-Turnage.jpg'
        text='Mark Anthony Turnage'
        back='/gallery/id9/Harry-Hill'
        next='/gallery/id9/James-Anda'
        />}/>
    
    <Route path='James-Anda' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/James-Anda.jpg'
        text='James Anda'
        back='/gallery/id9/Mark-Anthony-Turnage'
        next='/gallery/id9/Joseph-Stiglitz'
        />}/>
    
    <Route path='Joseph-Stiglitz' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/Joseph-Stiglitz.jpg'
        text='Joseph Stiglitz'
        back='/gallery/id9/James-Anda'
        next='/gallery/id9/Ken-Livingstone'
        />}/>
    
    <Route path='Ken-Livingstone' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/Ken-Livingstone.jpg'
        text='Ken Livingstone'
        back='/gallery/id9/Joseph-Stiglitz'
        next='/gallery/id9/Erdem'
        />}/>
    
    <Route path='Erdem' element={<PageItem
        gallery='/gallery/id9'
        image='/images/table/Erdem.jpg'
        text='Erdem'
        back='/gallery/id9/Ken-Livingstone'
        next='/gallery/id9/'
        />}/>
    
    


    </Routes>
    </div>
  )
}

export default Index_9