import { useState } from 'react';
import './App.css';

function App() {


  const containerStyle = {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '30px',
    background: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  };

  const boxStyle = {
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    marginBottom: '20px'
  };

  const quoteStyle = {
    fontSize: '1.3rem',
    fontStyle: 'italic',
    marginBottom: '10px'
  };

  const authorStyle = {
    color: '#555',
    marginBottom: '15px'
  };

  const btnStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  };

  const buttonStyle = {
    padding: '8px 18px',
    borderRadius: '5px',
    border: 'none',
    background: '#03264dff',
    color: '#fff',
    cursor: 'pointer'
  };

  const quotes = ["The best way to get started is to quit talking and begin doing .","Don't let yesterday take up too much of today .", "It's not whether you get knocked down, It's whether you get up .","If you are working on something exciting , it will keep you motivated .","Success is not in what you have, but who you are ."];

  const [quote, setQuote] = useState(quotes[0]);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <>
      <div style={containerStyle}>
        <h2>Quote Generator</h2>
        <div style={boxStyle}>
          <div style={quoteStyle}>{quote}</div>
          <div style={btnStyle}>
              <button style={buttonStyle} onClick={randomQuote}>New Quote</button>
              <button style={buttonStyle} onClick={() => navigator.clipboard.writeText(quote)}>Copy</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
