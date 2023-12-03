import React, { useEffect, useState } from 'react'

import AIBox from '../components/AIBox';
import AIInfo from '../components/AIInfo'
import AIList from '../components/AIList';

function AIPage (){
    const [searchResults, setSearchResults] = useState([]);//가져온 목록
    const [loading, setLoading] = useState(false);
    const [SearchCriteria, setSearchCriteria] = useState({});//조건

    const handleSearch = async (searchCriteria=SearchCriteria) => {
        searchCriteria = searchCriteria || {};
        try {
            setLoading(true);
            const queryString = Object.keys(searchCriteria)
            .map((key) => {
                switch (key) {
                    case 'totalTime':
                    case 'gugunNm':
                    case 'sidoNm':
                    case 'srvcClCodes':
                    case 'yngbgsPosblAt':
                    case 'adultPosblAt':
                    case 'possibleStartDate':
                    case 'possibleEndDate':
                    if(searchCriteria[key]) {
                        return `${key}=${encodeURIComponent(searchCriteria[key])}`;
                    }
                    return '';
                default:
                    return '';
                }
            })
            .filter(Boolean)
            .join('&');

            setSearchCriteria(queryString);
            const response = await fetch(
                `http://43.202.119.179:8080/api/activities/recommendActivities?${queryString}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                })
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const searchData = await response.json();

            if (searchData.content && Array.isArray(searchData.content)) {
                setSearchResults(searchData);
                console.log("yes")
            } else {
                setSearchResults([]);
            }
            setSearchResults(searchData);
            

        } catch (error) {
            console.error('Error searching:', error);
        } finally{
            setLoading(false);
        }
    };
    
    
   

    
      
     
  return (
    <div>
        <AIInfo/>
            <AIBox onSearch={(searchCriteria) => handleSearch(searchCriteria)} />
            <div className="app-container">
            {loading && <div>Loading...</div>}
            {searchResults && searchResults.length > 0 ? (
                searchResults.map((item) => (
                    <AIList
                    key={item.id}
                    BeginTime={item.actBeginTm}
                    EndTime={item.actEndTm}
                    ActDuringTm={item.actDuringTm} //추가
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
                    ServiceClassCode={item.srvcClCode}
                    URL={item.url}
                    YouthPossible={item.yngbgsPosblAt}
                    ProgramBeginDate={item.progrmBgnde}
                    ProgramEndDate={item.progrmEndde}
                    ProgramCn={item.progrmCn}
                    AssignedDate={item.assignedDate} //추가
                    />
                ))
            ) : (
                <div>데이터가 부족하여 추천드릴 수 없었습니다.</div>
            )}
        </div>
    </div>
  );
};

export default AIPage;
