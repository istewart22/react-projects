import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import Review from './Review';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const personData = people[index];

  const handlePrevClick = () => {
    if (index > 0 && index <= data.length - 1) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
    }
  };

  const handleNextClick = () => {
    if (index >= 0 && index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      handleNextClick();
    }, 2000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        <Review {...personData} />
        <button className='prev' onClick={handlePrevClick}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={handleNextClick}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
