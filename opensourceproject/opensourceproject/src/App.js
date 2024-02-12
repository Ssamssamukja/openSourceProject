import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header.jsx';
import List from './components/List.jsx';
/*import ListDetail from './pages/ListDetail.jsx';*/
import React from 'react';
import {dummy} from './Json.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/search"
          element={
            <div className="app-container">
              {dummy.item.map(item => (
                <List
                  key={item.progrmregistno}
                  ProgramRegistNumber={item.progrmregistno}
                  ProgramSubject={item.progrmsj}
                  OrganizationName={item.nanmmbynm}
                  ProgramStartDate={item.progrmbgnde}
                  ProgramEndDate={item.progrmendde}
                  BeginTime={item.actbegintm}
                  EndTime={item.actendtm}
                  RegionCode={item.sidocd}
                  ProvanceCode={item.guguncd}
                  AdultPossible={item.adultposblat}
                  YouthPossible={item.yngbgsposblat}
                  ServiceClassCode={item.srvcclcode}
                  URL={item.url}
                  ProgramStatus={item.progrmsttusse}
                  ProvinceCode={item.guguncd}
                  Place={item.actplace}
                  NoticeStartDate={item.noticebgnde}
                  NoticeEndDate={item.noticeendde}
                />
              ))}
            </div>
          }
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*<Route
          path="/search/details/:progrmRegistNo"
          element={<ListDetail />}
        />
        */
