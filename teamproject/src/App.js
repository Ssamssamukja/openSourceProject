import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      if (result) {
        setData(result);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
