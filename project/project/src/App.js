import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import List from "./components/List";
import { dummy } from "./dummydata";

function App() {
  return (
    <div className="root-wrap">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route
    path = "/search"
    element={
      <div className="app-container">
        {dummy.item.map((item) => (
            <List
            key={item.progrmregistno}
            BeginTime={item.actbegintm}
            EndTime={item.actendtm}
            Place={item.actplace}
            AdultPossible={item.adultposblat}
            GugunNm={item.guguncd}
            OrganizationName={item.nanmmbynm}
            NoticeBeginDate={item.noticebgnde}
            NoticeEndDate={item.noticeendde}
            ProgramRegistNumber={item.progrmregistno}
            ProgramSubject={item.progrmsj}
            ProgramStatus={item.progrmsttusse}
            SidoNm={item.sidocd}
            ServiceClassCode={item.srvcclcode}
            URL={item.url}
            YouthPossible={item.yngbgsposblat}
            ProgramBeginDate={item.progrmbgnde}
            ProgramEndDate={item.progrmendde}
            />
  ))}
      </div>
    }/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;