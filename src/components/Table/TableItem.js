import React from 'react';
import {NumLink} from './TableElements'
import {Link} from 'react-router-dom'

function TableItem(props) {
    return (
      <div>
<figure className='table__item__wrap' >
            {/* <a href={props.href} > */}
            <Link to={props.to} >
            <img 
              className='table__item__img'
              src={props.src}> 

              
            </img>
            </Link>
            
            
    </figure>
     
    </div>

);
}

export default TableItem;