import React, { useState, useEffect } from 'react';

const style = {
  borderRadius: '50%',
  border: '2px solid black',
  padding: 2,
  content: 'none',
};

function Status() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    console.log('status effect');

    let intervalId = setInterval(() => {
      console.log('status interval');
      const randomStatus = Math.random() > 0.3 ? true : false;
      setStatus(randomStatus);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>
        Status:{' '}
        <span style={{ ...style, backgroundColor: status ? 'green' : 'red' }}>
          {status ? 'on' : 'off'}
        </span>
      </p>
    </div>
  );
}

export default Status;
