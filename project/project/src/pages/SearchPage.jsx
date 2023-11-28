/* SearchPage.jsx

import * as styles from './style'; // import styles from style.jsx

import React, { useState } from 'react';

import List from './List';
import SearchBox from './SearchBox';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchCriteria) => {
    // Implement your logic to send search criteria to the server
    // and receive search results from the server
    // For now, just set some dummy data as an example
    const dummyData = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      // Add more data as needed
    ];
    
    setSearchResults(dummyData);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <List
            key={result.id}
            // Pass data and props to List component as needed
            {...result}
          />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchPage;
*/

// Search.jsx

import React, { useState } from 'react';

import List from '../components/List';
import SearchBox from '../components/SearchBox';
import {dummy} from '../dummydata';

function SearchPage (){
      const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchData) => {
    // 여기서 API 호출 및 데이터 가져오기
    // axios 또는 fetch 등을 사용하여 서버에 검색 조건을 전달하고 결과를 받아옴
    // setSearchResults(받아온 데이터);
    console.log('Search Data:', searchData);
// 더 많은 결과들 추가
      setSearchResults(dummy.item);
      
  };

  return (
    <div className="app-container">
      <SearchBox onSearch={handleSearch} />
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
                />
        ))
      ) : (
        <div>검색 결과가 없습니다</div>
      )}
    </div>
  );
};

export default SearchPage;
