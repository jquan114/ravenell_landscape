import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what we offer!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Bi-weekly maintenance'
              label='Mantainenance '
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Flower installation. Bush/Hedge upkeep. Weed control'
              label='Garden'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Snow Removal'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Weed Control'
              label='Weeds'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Tree Trimming, Pruning'
              label='Trees'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
