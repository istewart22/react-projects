import React from 'react';

const Button = ({ jobs, value, setValue }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => (
        <button
          className={`job-btn ${index === value && 'active-btn'}`}
          key={job.id}
          onClick={() => {
            setValue(index);
          }}
        >
          {jobs[index].company}
        </button>
      ))}
    </div>
  );
};

export default Button;
