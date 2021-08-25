import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../redux/slices/basketSlice';
import Modal from './modal';

function Card({ id, name, description }) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div class="card my-card text-black bg-light m-2 p-0">
      <div class="card-header">{name}</div>
      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-warning m-2"
          data-toggle="popover"
          data-content="popover content"
          onClick={() => setIsOpen(true)}
        >
          See Details
        </button>
        <button
          type="button"
          class="btn btn-danger m-2"
          onClick={removeItemFromBasket}
        >
          Delete
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div class="">id: {id}</div>
        <div class="">description: {description}</div>
      </Modal>
      <div />
    </div>
  );
}

export default Card;
