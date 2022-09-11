import React, { useState, useEffect } from 'react';
import Button from './Button';
import Job from './Job';
import Loading from './Loading';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline' />
      </div>
      <div className='jobs-center'>
        <Button jobs={jobs} value={value} setValue={setValue} />
        <Job id={jobs[value].id} {...jobs[value]} />
      </div>
    </section>
  );
}

export default App;
