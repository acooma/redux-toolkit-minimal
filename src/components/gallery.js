import React from 'react';
import { useSelector } from 'react-redux';
import { selectItemsFromBasket } from '../redux/slices/basketSlice';
import Card from './card';

function Gallery() {
  const basket = useSelector(selectItemsFromBasket);

  return (
    <div class="row">
      {basket
        ? basket.map((item, i) => (
            <Card
              key={i}
              id={item.id}
              name={item.name}
              description={item.description}
            />
          ))
        : null}
    </div>
  );
}

export default Gallery;
