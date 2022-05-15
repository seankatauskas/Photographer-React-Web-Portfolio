import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from './TableElements'
import TableItem from './TableItem'
import './Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../ImagePage/PageItem'


function Table() {
    


  return (
      <div>
    
    
    <Routes>    
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
        <TableItem  
                src='/images/table/Ron-Arad.jpg'
                to='/gallery/Ron-Arad'
            />
        </Square>
        <Square><TableItem
                src='/images/table/David-Hockney2.jpg'

                to='/gallery/David-Hockney2'
            /></Square>
        <Square><TableItem
                src='/images/table/Peter-Blake.jpg'
                to='/gallery/Peter-Blake'
            /></Square>
        <Square><TableItem
                src='/images/table/Philippe-Starck.jpg'
                to='/gallery/Philippe-Starck'
            /></Square>
        <Square><TableItem
                src='/images/table/Harry-&-Joan-On-Holiday.jpg'
                to='/gallery/Harry-&-Joan-On-Holiday'
            /></Square>
        <Square><TableItem
                src='/images/table/Marcel-Wanders.jpg'
                to='/gallery/Marcel-Wanders'
            /></Square>
        <Square><TableItem
                src='/images/table/Lord-Bath.jpg'
                to='/gallery/Lord-Bath'
            /></Square>
        <Square><TableItem
                src='/images/table/Marc-Newson2.jpg'
                to='/gallery/Marc-Newson2'
            /></Square>
        <Square><TableItem
                src='/images/table/Alan-Bennett.jpg'
                to='/gallery/Alan-Bennett'
            >
            
            </TableItem>
            
            </Square>
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLinkCurr to="./">1</NumLinkCurr>
            <NumLink to="./id2">2</NumLink>
            <NumLink to="./id3">3</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLinkPrev to="./">Previous</NumLinkPrev>
        <NumLink to="./id2">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>
        <Route path='Alan-Bennett' element={<PageItem
        gallery='/gallery'
        image='/images/table/Alan-Bennett.jpg'
        text='Alan Bennett'
        back='/gallery/Marc-Newson2'
        next='/gallery/id2/Danny-Lane'

        />}></Route>
        
        <Route path='David-Hockney2' element={<PageItem
        gallery='/gallery'
        image='/images/table/David-Hockney2.jpg'
        text='David Hockney'
        back='/gallery/Ron-Arad'
        next='/gallery/Peter-Blake'
        />} />
        
        <Route path='Harry-&-Joan-On-Holiday' element={<PageItem
            gallery='/gallery'
            image='/images/table/Harry-&-Joan-On-Holiday.jpg'
            text='Harry & Joan On Holiday'
            back='/gallery/Philippe-Starck'
            next='/gallery/Marcel-Wanders'
        />} />


        <Route path='Peter-Blake' element={<PageItem

        gallery='/gallery'
        image='/images/table/Peter-Blake.jpg'
        text='Peter Blake'
        back='/gallery/David-Hockney2'
        next='/gallery/Philippe-Starck'
        />} />

        <Route path='Marcel-Wanders' element={<PageItem 
        gallery='/gallery'
        image='/images/table/Marcel-Wanders.jpg'
        text='Marcel Wanders'
        back='/gallery/Harry-&-Joan-On-Holiday'
        next='/gallery/Lord-Bath'
        />} />

        <Route path='Lord-Bath' element={<PageItem
        gallery='/gallery'
        image='/images/table/Lord-Bath.jpg'
        text='Lord Bath'
        back='/gallery/Marcel-Wanders'
        next='/gallery/Marc-Newson2'
        />} />

        <Route path='Marc-Newson2' element={<PageItem
        gallery='/gallery'
        image='/images/table/Marc-Newson2.jpg'
        text='Marc Newson'
        back='/gallery/Lord-Bath'
        next='/gallery/Alan-Bennett'
        />} />

        <Route path='Philippe-Starck' element={<PageItem
        gallery='/gallery'
        image='/images/table/Philippe-Starck.jpg'
        text='Philippe Starck'
        back='/gallery/Peter-Blake'
        next='/gallery/Harry-&-Joan-On-Holiday'
        />} />

        <Route path='Ron-Arad' element={<PageItem
        gallery='/gallery'
        image='/images/table/Ron-Arad.jpg'
        text='Ron Arad'
        back='/gallery'
        next='/gallery/David-Hockney2'
        />} />

    </Routes>
    </div>
  )
}

export default Table