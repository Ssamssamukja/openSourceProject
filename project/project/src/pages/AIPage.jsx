import React, {useState} from 'react'

import AIBox from '../components/AIBox';
import AIInfo from '../components/AIInfo'
import List from '../components/List';
import {dummy} from '../dummydata';

function AIPage (){
    const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchData) => {
    // 여기서 API 호출 및 데이터 가져오기
    // axios 또는 fetch 등을 사용하여 서버에 검색 조건을 전달하고 결과를 받아옴
    // setSearchResults(받아온 데이터);
    console.log('Search Data:', searchData);
// 더 많은 결과들 추가
      setSearchResults(dummy.item);
      
  };
//페이지 밑에 몇 페이지인지 만들어줘야 함....
  return (
    <div>
        <AIInfo/>
      <AIBox onSearch={handleSearch} />
      <div className="app-container">
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
                <List
                key={item.progrmregistno}
                BeginTime={item.actbegintm}
                EndTime={item.actendtm}
                Place={item.actplace}
                AdultPossible={item.adultposblat}
                GugunNm={item.guguncd}
                OrganizationName={item.nanmmbynm}
                NoticeBeginDate67y={item.noticebgnde}
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
                ProgramCn={item.progrmCn}
                />
        ))
      ) : (
        <div></div>
      )}
    </div>
    </div>
  );
};

export default AIPage;
