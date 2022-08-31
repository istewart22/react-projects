import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [expandedInfo, setExpendedInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setExpendedInfo(!expandedInfo)}>
          {expandedInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expandedInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
