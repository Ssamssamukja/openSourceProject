import React, { useState } from 'react';

import List from '../components/List';
import SearchBox from '../components/SearchBox';

function SearchPage (){
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async (searchCriteria) => {
        try {
            // 검색 조건에 맞게 query string을 생성
            const queryString = Object.keys(searchCriteria)
            .map(key => {
                // 각 검색 조건에 따라 key와 value를 매칭하여 문자열 생성
                switch (key) {
                case 'gugunNm':
                case 'sidoNm':
                case 'srvcClCode':
                case 'yngbgsPosblAt':
                case 'adultPosblAt':
                case 'progrmSttusSe':
                case 'progrmBgnde':
                case 'progrmEndde':
                case 'progrmSj':
                    if(searchCriteria[key]) {
                        return `${key}=${encodeURIComponent(searchCriteria[key])}`;
                    }
                    return '';
                default:
                    return '';
                }
            })
            .filter(Boolean) // 빈 문자열은 필터링
            .join('&');
        
            const response = await fetch(`/api/activities/search?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const searchData = await response.json();
        setSearchResults(searchData);
        } catch (error) {
        console.error('Error searching:', error);
        }
    };
  
  return (
    <div className="app-container">
      <SearchBox onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        searchResults.map((item) => (
            <List
                key={item.id}
                BeginTime={item.actBeginTm}
                EndTime={item.actEndTm}
                Place={item.actPlace}
                AdultPossible={item.adultPosblAt}
                GugunNm={item.gugunNm}
                OrganizationName={item.nanmmbyNm}
                NoticeBeginDate={item.noticeBgnde}
                NoticeEndDate={item.noticeEndde}
                ProgramRegistNumber={item.progrmRegistNo}
                ProgramSubject={item.progrmSj}
                ProgramStatus={item.progrmSttusSe}
                SidoNm={item.sidoNm}
                ServiceClassCode={item.srvcClcode}
                URL={item.url}
                YouthPossible={item.yngbgsPosblat}
                ProgramBeginDate={item.progrmBgnde}
                ProgramEndDate={item.progrmEndde}
                ProgramCn={item.progrmCn}
            />
        ))
      ) : (
        <div>검색 결과가 없습니다</div>
      )}
    </div>
  );
}

export default SearchPage;
