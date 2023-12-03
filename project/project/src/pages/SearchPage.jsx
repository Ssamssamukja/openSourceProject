import React, { useEffect, useState } from 'react';

import List from '../components/List';
import SearchBox from '../components/SearchBox';

function SearchPage (){
    const initialSearchCriteria = {};
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPageGroup, setCurrentPageGroup] = useState(1);
    const [loading, setLoading] = useState(false);
    const [lastSearchCriteria, setLastSearchCriteria] = useState({});
    const [totalItems, setTotalItems] = useState(0);
    
    const handleSearch = async (searchCriteria=lastSearchCriteria, page =1, getTotalItems = false) => {
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
            .join('&');
        
            // 검색 결과 가져오는.
            const response = await fetch(
                `http://43.202.119.179:8080/api/activities/search?${queryString}&page=${page-1}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if(getTotalItems){
            const totalResponse = await fetch(
                `http://43.202.119.179:8080/api/activities/search?${queryString}&size=8000`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!totalResponse.ok) {
                throw new Error(`HTTP error! Status: ${totalResponse.status}`);
            }
            const totalData = await totalResponse.json();
            setTotalItems(totalData.length);
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
            //setCurrentPage(newPage);
            handleSearch(lastSearchCriteria, newPage);
        }
      };

    const handleNextGroup = () => {
        setCurrentPageGroup(currentPageGroup + 1);
        setCurrentPage((currentPageGroup + 1) * 10 - 9);
    };

    const handlePreviousGroup = () => {
        setCurrentPageGroup(currentPageGroup - 1);
        setCurrentPage((currentPageGroup - 1) * 10);
    };

    //최초 페이지 들어갈 때 렌더링
    useEffect(() => {
        handleSearch(initialSearchCriteria, 1, true);
    }, []);


    const totalPages = Math.ceil(totalItems / 10);
    console.log(totalPages);
    const firstPageInGroup = (currentPageGroup - 1) * 10 + 1;
    const lastPageInGroup = Math.min(currentPageGroup * 10, totalPages);
      
      

  return (
    <div className="app-container">
      <SearchBox onSearch={(searchCriteria) => {
        setCurrentPage(0);
        setCurrentPageGroup(1);
        handleSearch(searchCriteria, 1, true)} }/>
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
        <div style={{ display: 'block', gap: '1px', marginTop: '1px', width:'800px' }}>
            {currentPage >-1 && <button onClick={handlePreviousGroup}>이전</button>}
            {Array.from({ length: lastPageInGroup - firstPageInGroup + 1 }, (_, index) => index+firstPageInGroup).map((page) => (
                <button 
                    style={{backgroundColor : currentPage === page ? '#1e6ebe' : 'white', 
                    color: currentPage === page ? 'white' : 'black',width:'60px',height:'30px',
                    border: '1px solid #ccc', 
                    borderRadius: '4px',}}
                    key={page} 
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages -1  && <button onClick={handleNextGroup}>다음</button>}
          </div>
            </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default SearchPage;
