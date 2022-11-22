import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let numToDisplay = parseInt(count);
    if (count <= 1) {
      numToDisplay = 1;
    } else if (count >= 8) {
      numToDisplay = 8;
    }

    setText(data.slice(0, numToDisplay));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <div>
          <label htmlFor='paragraphs'>Paragraphs: </label>
          <input
            type='number'
            id='paragraphs'
            name='paragraphs'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className='lorem-text'></article>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </section>
  );
}

export default App;
