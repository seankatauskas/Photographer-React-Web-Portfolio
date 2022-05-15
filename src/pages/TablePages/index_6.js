import React from 'react';
import {TableContainer, TableGrid, Square, Pagination, NavPages, EmailJR, ForwardBack, NumLink, NumLinkCurr, NumLinkPrev} from '../../components/Table/TableElements'
import TableItem from '../../components/Table/TableItem'
import '../../components/Table/Table.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageItem from '../../components/ImagePage/PageItem'

function Index_6() {
    


  return (
      <div>
    
    <Routes>  
    <Route path="/" element={
    <TableContainer >
        <h3>Portraits</h3>
        <TableGrid>
        
        <Square>
          
        <TableItem  
                src='/images/table/Lord-Harewood.jpg'
                to='/gallery/id6/Lord-Harewood'
            />
        </Square>
        <Square><TableItem
                src='/images/table/Meera-Syal.jpg'
                to='/gallery/id6/Meera-Syal'
            /></Square>
        <Square><TableItem
                src='/images/table/Alex-&-Naomi.jpg'
                to='/gallery/id6/Alex-&-Naomi'
            /></Square>
        <Square><TableItem
            src='/images/table/Nicky-Haslam.jpg'
            to='/gallery/id6/Nicky-Haslam'
        /></Square>
        <Square><TableItem
                src='/images/table/Oswald-Boateng.jpg'
                to='/gallery/id6/Oswald-Boateng'
            /></Square>
        <Square><TableItem
                src='/images/table/Priscilla-Carluccio.jpg'
                to='/gallery/id6/Priscilla-Carluccio'
            /></Square>
        <Square><TableItem
                src='/images/table/Derek-Walcott-&-Seamus-Heaney.jpg'
                to='/gallery/id6/Derek-Walcott-&-Seamus-Heaney'
            /></Square>
        <Square><TableItem
                src='/images/table/Sadie-Frost.jpg'
                to='/gallery/id6/Sadie-Frost'
            /></Square>
        <Square><TableItem
                src='/images/table/St-Etienne.jpg'
                to='/gallery/id6/St-Etienne'
            /></Square>
        
       
        </TableGrid>

        <Pagination>
        <EmailJR>Jonathan Root</EmailJR>
        <NavPages>
            <NumLink to="/gallery/id5">5</NumLink>
            <NumLinkCurr>6</NumLinkCurr>
            <NumLink to="/gallery/id7">7</NumLink>
            <NumLink to="/gallery/id8">8</NumLink>
        </NavPages>
        <ForwardBack>
        <NumLink to="/gallery/id5">Previous</NumLink>
        <NumLink to="/gallery/id7">Next</NumLink>
        </ForwardBack>

        </Pagination>
    </TableContainer>
    }/>

    <Route path='Lord-Harewood' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Lord-Harewood.jpg'
        text='Lord Harewood'
        back='/gallery/id5/Lord-March'
        next='/gallery/id6/Meera-Syal'
        />}/>
    
    <Route path='Meera-Syal' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Meera-Syal.jpg'
        text='Meera Syal'
        back='/gallery/id6/Lord-Harewood'
        next='/gallery/id6/Alex-&-Naomi'
        />}/>
    
    <Route path='Alex-&-Naomi' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Alex-&-Naomi.jpg'
        text='Alex & Naomi'
        back='/gallery/id6/Meera-Syal'
        next='/gallery/id6/Nicky-Haslam'
        />}/>

    <Route path='Nicky-Haslam' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Nicky-Haslam.jpg'
        text='Nicky Haslam'
        back='/gallery/id6/Alex-&-Naomi'
        next='/gallery/id6/Oswald-Boateng'
        />}/>
    
    <Route path='Oswald-Boateng' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Oswald-Boateng.jpg'
        text='Oswald Boateng'
        back='/gallery/id6/Nicky-Haslam'
        next='/gallery/id6/Priscilla-Carluccio'
        />}/>
    
    <Route path='Priscilla-Carluccio' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Priscilla-Carluccio.jpg'
        text='Priscilla Carluccio'
        back='/gallery/id6/Oswald-Boateng'
        next='/gallery/id6/Derek-Walcott-&-Seamus-Heaney'
        />}/>
    
    <Route path='Derek-Walcott-&-Seamus-Heaney' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Derek-Walcott-&-Seamus-Heaney.jpg'
        text='Derek Walcott & Seamus Heaney'
        back='/gallery/id6/Priscilla-Carluccio'
        next='/gallery/id6/Sadie-Frost'
        />}/>
    
    <Route path='Sadie-Frost' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/Sadie-Frost.jpg'
        text='Sadie Frost'
        back='/gallery/id6/Derek-Walcott-&-Seamus-Heaney'
        next='/gallery/id6/St-Etienne'
        />}/>
    
    <Route path='St-Etienne' element={<PageItem
        gallery='/gallery/id6'
        image='/images/table/St-Etienne.jpg'
        text='St Etienne'
        back='/gallery/id6/Sadie-Frost'
        next='/gallery/id7/Jock'
        />}/>

    


    </Routes>
    </div>
  )
}

export default Index_6