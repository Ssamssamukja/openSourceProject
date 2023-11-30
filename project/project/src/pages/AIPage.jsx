import React, {useEffect, useState} from 'react'

import AIBox from '../components/AIBox';
import AIInfo from '../components/AIInfo'
import List from '../components/List';
import {dummy} from '../dummydata';

function AIPage (){
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [SearchCriteria, setSearchCriteria] = useState({});

    const handleSearch = async (searchCriteria) => {
        try {
            setLoading(true);
            const queryString = Object.keys(searchCriteria)
            .map((key) => {
                switch (key) {
                    case 'gugunNm':
                    case 'sidoNm':
                    case 'srvcClCode':
                    case 'yngbgsPosblAt':
                    case 'adultPosblAt':
                    case 'progrmBgnde':
                    case 'progrmEndde':
                    case 'totalTime':
                    if(searchCriteria[key]) {
                        return `${key} : ${encodeURIComponent(searchCriteria[key])}`;
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
                `API`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(SearchCriteria)
                });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const searchData = await response.json();

            if (Array.isArray(searchData.content)) {
                setSearchResults(searchData.content);
            } else {
                setSearchResults([]);
            }

        } catch (error) {
            console.error('Error searching:', error);
        } finally{
            setLoading(false);
        }
    };
    
      useEffect(() => {
        handleSearch({} );
      }, []);
      
      // 나중에 dummy를 SearchResults로 바꿔줘야함.
  return (
    <div>
        <AIInfo/>
      <AIBox onSearch={(searchCriteria) => handleSearch(searchCriteria)} />
      <div className="app-container">
      {loading && <div>Loading...</div>}
      {dummy.length > 0 ? (
        dummy.map((item) => (
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
