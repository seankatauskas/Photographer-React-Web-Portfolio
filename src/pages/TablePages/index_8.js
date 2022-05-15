import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_8() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Yolanda.jpg'
                to='/gallery/id8/Yolanda'
            />
        </Square>
        <Square><TableItem
                src='/images/table/David-Hockney3.jpg'
                to='/gallery/id8/David-Hockney3'
            /></Square>
        <Square><TableItem
                src='/images/table/Allen-Jones2.jpg'
                to='/gallery/id8/Allen-Jones2'
            /></Square>
        <Square><TableItem
            src='/images/table/Nigel-Coates.jpg'
            to='/gallery/id8/Nigel-Coates'
        /></Square>
        <Square><TableItem
                src='/images/table/Norman-Foster.jpg'
                to='/gallery/id8/Norman-Foster'
            /></Square>
        <Square><TableItem
                src='/images/table/Richard-Rogers.jpg'
                to='/gallery/id8/Richard-Rogers'
            /></Square>
        <Square><TableItem
                src='/images/table/Marc-Newson.jpg'
                to='/gallery/id8/Marc-Newson'
            /></Square>
        <Square><TableItem
                src='/images/table/Danny-Lane2.jpg'
                to='/gallery/id8/Danny-Lane2'
            /></Square>
        <Square><TableItem
                src='/images/table/Amanda-Levete.jpg'
                to='/gallery/id8/Amanda-Levete'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id6">6</NumLink>
            <NumLink to="/gallery/id7">7</NumLink>
            <NumLinkCurr>8</NumLinkCurr>
            <NumLink to="/gallery/id9">9</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id7">Previous</NumLink>
        <NumLink to="/gallery/id9">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Yolanda' element={<PageItem
         gallery='/gallery/id8'
         image='/images/table/Yolanda.jpg'
         text='Yolanda'
         back='/gallery/id7/Veronica'
         next='/gallery/id8/David-Hockney3'
            />}/>
    
    <Route path='David-Hockney3' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/David-Hockney3.jpg'
            text='David Hockney'
            back='/gallery/id8/Yolanda'
            next='/gallery/id8/Allen-Jones2'

            />}/>
        
    <Route path='Allen-Jones2' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Allen-Jones2.jpg'
            text='Allen Jones'
            back='/gallery/id8/David-Hockney3'
            next='/gallery/id8/Nigel-Coates'
            />}/>
    
    <Route path='Nigel-Coates' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Nigel-Coates.jpg'
            text='Nigel Coates'
            back='/gallery/id8/Allen-Jones2'
            next='/gallery/id8/Norman-Foster'
            />}/>
    
    <Route path='Norman-Foster' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Norman-Foster.jpg'
            text='Norman Foster'
            back='/gallery/id8/Nigel-Coates'
            next='/gallery/id8/Richard-Rogers'
            />}/>
    
    <Route path='Richard-Rogers' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Richard-Rogers.jpg'
            text='Richard Rogers'
            back='/gallery/id8/Norman-Foster'
            next='/gallery/id8/Marc-Newson'
            />}/>
    
    <Route path='Marc-Newson' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Marc-Newson.jpg'
            text='Marc Newson'
            back='/gallery/id8/Richard-Rogers'
            next='/gallery/id8/Danny-Lane2'
            />}/>
    
    <Route path='Danny-Lane2' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Danny-Lane2.jpg'
            text='Danny Lane'
            back='/gallery/id8/Marc-Newson'
            next='/gallery/id8/Amanda-Levete'
            />}/>
    
    <Route path='Amanda-Levete' element={<PageItem
            gallery='/gallery/id8'
            image='/images/table/Amanda-Levete.jpg'
            text='Amanda Levete'
            back='/gallery/id8/Danny-Lane2'
            next='/gallery/id9/Harry-Hill'
            />}/>


    </Routes>
    </div>
  )
}

export default Index_8