import React, { useEffect, useState } from 'react';

import List from '../components/List';
import SearchBox from '../components/SearchBox';

function SearchPage (){
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [lastSearchCriteria, setLastSearchCriteria] = useState({});

    const handleSearch = async (searchCriteria=lastSearchCriteria, page =1) => {
        setLastSearchCriteria(searchCriteria);
        setCurrentPage(page);
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
            .filter(Boolean)
            .concat(`page=${page-1}`)
            .join('&');
        
        const response = await fetch(
            `http://43.202.119.179:8080/api/activities/search?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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

        setSearchResults(searchData);

    } catch (error) {
        console.error('Error searching:', error);
    } finally{
        setLoading(false);
    }
    };

    const handlePageChange = (newPage) => {
        if (newPage !== currentPage) {
            handleSearch(lastSearchCriteria, newPage);
        }
      };
    
    useEffect(() => {
        handleSearch(lastSearchCriteria, currentPage+1);
    }, []);
      

  return (
    <div className="app-container">
      <SearchBox onSearch={(searchCriteria) => handleSearch(searchCriteria, 1)} />
      {loading && <div>Loading...</div>}
      {searchResults.length > 0 ? (
        <>
        {searchResults.map((item) => (
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
                ServiceClassCode={item.srvcClCode}
                URL={item.url}
                YouthPossible={item.yngbgsPosblAt}
                ProgramBeginDate={item.progrmBgnde}
                ProgramEndDate={item.progrmEndde}
                ProgramCn={item.progrmCn}
            />
        ))}
        <div style={{ display: 'block', gap: '1px', marginTop: '10px', width: '1000px', justifyContent:'center'  }}>
        {Array.from({ length: 15 }, (_, index) => index + 1).map((page) => (
            <button style={{backgroundColor : currentPage === page ? 'gray' : 'white', 
                color: currentPage === page ? 'white' : 'black',}}
                key={page} onClick={() => handlePageChange(page)}>
                {page}
            </button>
            ))}
            </div>
            </>
      ) : (
        <div>검색 결과가 없습니다</div>
      )}
    </div>
  );
}

export default SearchPage;
