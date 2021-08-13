import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/slices/basketSlice';

function Card({ id, name, description }) {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    const product = {
      id,
      name,
      description,
    };

    dispatch(removeFromBasket(product));
  };

  return (
    <div class="card text-white bg-primary mb-3">
      <div class="card-header">{name}</div>
      <div class="card-body">
        <h5 class="card-title">{description}</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title">{id}</h5>
      </div>
      <button
        type="button"
        class="btn btn-danger"
        onClick={removeItemFromBasket}
      >
        Delete
      </button>
    </div>
  );
}

export default Card;
