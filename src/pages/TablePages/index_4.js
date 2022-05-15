import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'



function Index_4() {
    


  return (
      <div>
    

    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/David-Hockney.jpg'
                to='/gallery/id4/David-Hockney'
            />
        </Square>
        <Square><TableItem
                src='/images/table/Michael-Craig-Martin.jpg'
                to='/gallery/id4/Michael-Craig-Martin'
            /></Square>
        <Square><TableItem
                src='/images/table/Twins-On-Sofa.jpg'
                to='/gallery/id4/Twins-On-Sofa'
            /></Square>
        <Square><TableItem
            src='/images/table/Twins-In-Twinsets.jpg'
            to='/gallery/id4/Twins-In-Twinsets'
        /></Square>
        <Square><TableItem
                src='/images/table/Twins.jpg'
                to='/gallery/id4/Twins'
            /></Square>
        <Square><TableItem
                src='/images/table/Clowns.jpg'
                to='/gallery/id4/Clowns'
            /></Square>
        <Square><TableItem
                src='/images/table/Gilbert-&-George.jpg'
                to='/gallery/id4/Gilbert-&-George'
            /></Square>
        <Square><TableItem
                src='/images/table/Geoffrey-Robinson.jpg'
                to='/gallery/id4/Geoffrey-Robinson'
            /></Square>
        <Square><TableItem
                src='/images/table/Harry-&-Beardsley.jpg'
                to='/gallery/id4/Harry-&-Beardsley'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id3">3</NumLink>
            <NumLinkCurr>4</NumLinkCurr>
            <NumLink to="/gallery/id5">5</NumLink>
            <NumLink to="/gallery/id6">6</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id3">Previous</NumLink>
        <NumLink to="/gallery/id5">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='David-Hockney' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/David-Hockney.jpg'
        text='David Hockney'
        back='/gallery/id3/Allen-Jones'
        next='/gallery/id4/Michael-Craig-Martin'
        />}></Route>
    
    <Route path='Michael-Craig-Martin' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Michael-Craig-Martin.jpg'
        text='Michael Craig Martin'
        back='/gallery/id4/David-Hockney'
        next='/gallery/id4/Twins-On-Sofa'
        />}></Route>
    
    <Route path='Twins-On-Sofa' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Twins-On-Sofa.jpg'
        text='Twins On Sofa'
        back='/gallery/id4/Michael-Craig-Martin'
        next='/gallery/id4/Twins-In-Twinsets'
        />}></Route>
    
    <Route path='Twins-In-Twinsets' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Twins-In-Twinsets.jpg'
        text='Twins In Twinsets'
        back='/gallery/id4/Twins-On-Sofa'
        next='/gallery/id4/Twins'
        />}></Route>
    
    <Route path='Twins' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Twins.jpg'
        text='Twins'
        back='/gallery/id4/Twins-In-Twinsets'
        next='/gallery/id4/Clowns'
        />}></Route>
    
    <Route path='Clowns' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Clowns.jpg'
        text='Clowns'
        back='/gallery/id4/Twins'
        next='/gallery/id4/Gilbert-&-George'
        />}></Route>
    
    <Route path='Gilbert-&-George' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Gilbert-&-George.jpg'
        text='Gilbert & George'
        back='/gallery/id4/Clowns'
        next='/gallery/id4/Geoffrey-Robinson'
        />}></Route>
    
    <Route path='Geoffrey-Robinson' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Geoffrey-Robinson.jpg'
        text='Geoffrey Robinson'
        back='/gallery/id4/Gilbert-&-George'
        next='/gallery/id4/Harry-&-Beardsley'
        />}></Route>
    
    <Route path='Harry-&-Beardsley' element={<PageItem
        gallery='/gallery/id4'
        image='/images/table/Harry-&-Beardsley.jpg'
        text='Harry & Beardsley'
        back='/gallery/id4/Geoffrey-Robinson'
        next='/gallery/id5/Jeremy-Isaacs'  
        />}></Route>



    </Routes>
    </div>
  )
}

export default Index_4