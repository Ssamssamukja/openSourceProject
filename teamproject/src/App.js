import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import List from './components/List';
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
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route
        path="/search"
        element={
          <div>
            {data.map(item => (
            <List 
              key={item.progrmRegistNo}
              progrmSj={item.progrmSj}
              agentName={item.nanmmbyNm}
              programBgnDate={item.progrmBgnde}
              programEndDate={item.progrmEndde}
              programBgnTime={item.actBeginTm}
              programEndTime={item.actEndTm}
              sidoCode={item.sidoCd}
              gugunCode={item.gugunCd}
              adultPosblAt={item.adultPosblAt}
              yngbbgsPosblAt={item.yngbbgsPosblAt}
              srvcClCode={item.srvcClCode}
              url = {item.url}
            />
          ))}
      </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
