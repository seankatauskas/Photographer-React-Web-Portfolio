import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import './Cards.css'; 

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='/images/press/Sitting-Pretty-invitation.jpeg'
              
              text='“Sitting Pretty” – an adventurous exhibition of portrait photography by Jonathan Root.'
             
              href='https://www.rabih-hage.com/curating/exhibitions/sitting-pretty/index.html'
            />
            <CardItem
              src='/images/press/Photographer-Jonathan-Root-retro-interiors-14-950x633.jpeg'
              text='Photographer Jonathan Root’s retro interiors in a converted piano factory in Camden'
              
              href='https://www.themodernhouse.com/journal/retro-interiors-my-modern-house-photographer-jonathan-roots-converted-piano-factory-in-camden/'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='/images/press/jonathan-root-s-de-tomaso-mangusta-1476934860379.jpeg'
              text='A De Tomaso Mangusta Perfectly Suits An Award Winning Photographer'
              
              href='https://petrolicious.com/articles/jonathan-root-s-de-tomaso-mangusta'
            />
            <CardItem
              src='/images/press/gavin-turk.jpeg'
              text='National Portrait Gallery'
             
              href='https://www.npg.org.uk/collections/search/person/mp122643/jonathan-root'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;