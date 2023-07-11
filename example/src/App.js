
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(['Initial Data']);
  const [renderingTime, setRenderingTime] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    // Simulated data update after 2 seconds
    setTimeout(() => {
      setData(['Apple', 'Banana', 'Orange']);
    }, 2000);

    return () => {
      const endTime = performance.now();
      const timeDiff = endTime - startTime;
      setRenderingTime(timeDiff);
    };
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Rendering time: {renderingTime} ms</p>
    </div>
  );
};

export default App;
