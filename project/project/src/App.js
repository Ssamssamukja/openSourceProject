import List from "./components/List";
import { dummy } from "./dummydata";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.item.map((item) => {
          return (
            <List
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;