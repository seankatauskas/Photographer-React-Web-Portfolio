import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
      <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <a href={props.href} target="_blank">
            <img
              className='cards__item__img'
              alt='Press Image'
              src={props.src}
            />
            </a>
          </figure>
          <div className='cards__item__info'>
          <a href={props.href} target="_blank" className='text-link'>
            <h5 className='cards__item__text'>{props.text}</h5>
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;