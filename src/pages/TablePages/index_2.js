import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_2() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
        <TableItem  
                src='/images/table/Danny-Lane.jpg'
                to='/gallery/id2/Danny-Lane'
            />
        </Square>
        <Square><TableItem
                src='/images/table/James-Blake.jpg'
                to='/gallery/id2/James-Blake'
            /></Square>
        <Square><TableItem
                src='/images/table/Mark-Rylance.jpg'
                to='/gallery/id2/Mark-Rylance'
            /></Square>
        <Square><TableItem
                src='/images/table/Arik-Levy.jpg'
                to='/gallery/id2/Arik-Levy'
            /></Square>
        <Square><TableItem
                src='/images/table/Jurgen-Bey.jpg'
                to='/gallery/id2/Jurgen-Bey'
            /></Square>
        <Square><TableItem
                src='/images/table/Piet-Hein-Eek.jpg'
                to='/gallery/id2/Piet-Hein-Eek'
            /></Square>
        <Square><TableItem
                src='/images/table/Bella-Freud.jpg'
                to='/gallery/id2/Bella-Freud'
            /></Square>
        <Square><TableItem
                src='/images/table/Bodo-Sperlein.jpg'
                to='/gallery/id2/Bodo-Sperlein'
            /></Square>
        <Square><TableItem
                src='/images/table/David-Adjaye.jpg'
                to='/gallery/id2/David-Adjaye'
            /></Square>
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery">1</NumLink>
            <NumLinkCurr>2</NumLinkCurr>
            <NumLink to="/gallery/id3">3</NumLink>
            <NumLink to="/gallery/id4">4</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery">Previous</NumLink>
        <NumLink to="/gallery/id3">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Danny-Lane' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Danny-Lane.jpg'
        text='Danny Lane'
        back='/gallery/Alan-Bennett'
        next='/gallery/id2/James-Blake'
        />}></Route>

    <Route path='James-Blake' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/James-Blake.jpg'
        text='James Blake'
        back='/gallery/id2/Danny-Lane'
        next='/gallery/id2/Mark-Rylance'
        />}></Route>
    
    <Route path='Mark-Rylance' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Mark-Rylance.jpg'
        text='Mark Rylance'
        back='/gallery/id2/James-Blake'
        next='/gallery/id2/Arik-Levy'
        />}></Route>
    
    <Route path='Arik-Levy' element={<PageItem  
        gallery='/gallery/id2'
        image='/images/table/Arik-Levy.jpg'
        text='Arik Levy'
        back='/gallery/id2/Mark-Rylance'
        next='/gallery/id2/Jurgen-Bey'
        />}></Route>
    
    <Route path='Jurgen-Bey' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Jurgen-Bey.jpg'
        text='Jurgen Bey'
        back='/gallery/id2/Arik-Levy'
        next='/gallery/id2/Piet-Hein-Eek'
        />}></Route>
    
    <Route path='Piet-Hein-Eek' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Piet-Hein-Eek.jpg'
        text='Piet Hein Eek'
        back='/gallery/id2/Jurgen-Bey'
        next='/gallery/id2/Bella-Freud'
        />}></Route>
    
    <Route path='Bella-Freud' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Bella-Freud.jpg'
        text='Bella Freud'
        back='/gallery/id2/Piet-Hein-Eek'
        next='/gallery/id2/Bodo-Sperlein'
        />}></Route>

    <Route path='Bodo-Sperlein' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/Bodo-Sperlein.jpg'
        text='Bodo Sperlein'
        back='/gallery/id2/Bella-Freud'
        next='/gallery/id2/David-Adjaye'
        />}></Route>
    
    <Route path='David-Adjaye' element={<PageItem
        gallery='/gallery/id2'
        image='/images/table/David-Adjaye.jpg'
        text='David Adjaye'
        back='/gallery/id2/Bodo-Sperlein'
        next='/gallery/id3/Countess-Koulinskyi'
        />}></Route>


    </Routes>
    </div>
  )
}

export default Index_2