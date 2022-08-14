import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handlePrevChange = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNextChange = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleRandomChange = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    // if you randomly select the same index then generate a new one
    while (randomIndex === index) {
      randomIndex = Math.floor(Math.random() * people.length);
    }

    setIndex(randomIndex);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={handlePrevChange}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={handleNextChange}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={handleRandomChange}>
          surprise me
        </button>
      </div>
    </article>
  );
};

export default Review;
