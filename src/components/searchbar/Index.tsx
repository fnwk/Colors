import { TextInput } from './style';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setId } from '../../slices/idSlice';

const Searchbar = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState<number | string>('');

  const setIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setTextInput(parseInt(e.target.value));
      dispatch(setId(parseInt(e.target.value)));
    } else if (e.target.value === '') {
      setTextInput('');
      dispatch(setId(0));
    }
  };

  return (
    <TextInput
      placeholder='Search by id'
      type='number'
      value={textInput}
      onChange={setIdHandler}
    />
  );
};

export default Searchbar;
