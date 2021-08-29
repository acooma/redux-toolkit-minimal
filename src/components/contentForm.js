import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  selectItemsFromBasket,
} from '../redux/slices/basketSlice';
import { selectItemsFromStickySlice } from '../redux/slices/stickySlice';

function ContentForm() {
  const dispatch = useDispatch();
  const basket = useSelector(selectItemsFromBasket);
  const isSticky = useSelector(selectItemsFromStickySlice);

  const [inputText, setInputText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      addToBasket({
        id: basket.length + 1,
        name: inputText,
        description: 'testiong',
      })
    );
  }

  if (isSticky === true) {
    return (
      <form className="stuck align-baseline" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Item"
          onInput={(e) => setInputText(e.target.value)}
        />
          <Button variant="contained" type="submit" class="btn btn-success">
            Add
          </Button>
      </form>
    );
  } else {
    return (
      <form className="" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Item"
          onInput={(e) => setInputText(e.target.value)}
        />
        <Button variant="contained" type="submit" class="btn btn-success mt-2 ml-2">
          Add
        </Button>
      </form>
    );
  }
}

export default ContentForm;
