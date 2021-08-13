import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  selectItemsFromBasket,
} from '../redux/slices/basketSlice';

function ContentForm() {
  const dispatch = useDispatch();
  const basket = useSelector(selectItemsFromBasket);

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

  return (
    <form className="" onSubmit={handleSubmit}>
      <TextField
        id="standard-basic"
        label="Item"
        onInput={(e) => setInputText(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Default
      </Button>
    </form>
  );
}

export default ContentForm;
