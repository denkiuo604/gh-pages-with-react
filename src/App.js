import { Button, TextField } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const initialError = {
    error: false,
    message: ''
  };

  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('ここにテキストが表示されます');
  const [inputTextError, setInputTextError] = useState(initialError);

  const inputTextChanged = e => {
    setInputText(e.target.value);
  }

  const buttonClicked = () => {
    if (inputText === '') {
      setInputTextError({
        error: true,
        message: 'テキストを入力してください'
      });
      return;
    }

    setInputTextError({
      error: false,
      message: ''
    });
    setText(inputText);
  }

  return (
    <div className="App">
      <h1>
        GitHub Pages with React App
      </h1>
      <p>
        {text}
      </p>
      <TextField
        placeholder='テキストを入力'
        variant='outlined'
        label='TextField'
        size='small'
        value={inputText}
        onChange={inputTextChanged}
        error={inputTextError.error}
        helperText={inputTextError.message}
      />
      <Button
        variant='contained'
        color='primary'
        style={{ marginLeft: '1em' }}
        onClick={buttonClicked}
      >
        完了
      </Button>
    </div>
  );
}

export default App;
