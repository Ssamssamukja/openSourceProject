import *  as styles from './AIBox.style';

import React, { useEffect, useState } from 'react';

const locations = {
    '': ['-- 구군 선택 --'],
    '서울특별시': [
      '-- 서울 구군 전체 --', '종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '강북구',
      '도봉구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구',
      '동작구', '관악구', '서초구', '송파구', '강동구'
    ],
    '부산광역시': [
      '-- 부산 구군 전체 --', '중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구',
      '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'
    ],
    '대구광역시': [
      '-- 대구 구군 전체 --', '중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'
    ],
    '인천광역시': [
      '-- 인천 구군 전체 --', '중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구',
      '강화군', '옹진군'
    ],
    '광주광역시': [
      '-- 광주 구군 전체 --', '동구', '서구', '남구', '북구', '광산구'
    ],
    '대전광역시': [
      '-- 대전 구군 전체 --', '동구', '중구', '서구', '유성구', '대덕구'
    ],
    '울산광역시': [
      '-- 울산 구군 전체 --', '중구', '남구', '동구', '북구', '울주군'
    ],
    '세종특별자치시': [
      '-- 세종 구군 전체 --', '세종'
    ],
    '경기도': [
      '-- 경기 구군 전체 --', '수원시', '성남시', '안양시', '안산시', '용인시', '부천시', '광명시', '평택시',
      '동두천시', '안산시', '과천시', '고양시', '의정부시', '구리시', '남양주시', '파주시', '양주시', '이천시',
      '여주시', '시흥시', '군포시', '의왕시', '하남시', '용인시', '이천시', '안성시', '오산시', '화성시',
      '수원시', '용인시', '안성시', '화성시', '성남시', '군포시', '포천시', '양평군', '여주시', '여주시'
    ],
    '강원특별자치도': [
      '-- 강원 구군 전체 --', '춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군',
      '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'
    ],
    '충청북도': [
      '-- 충청북도 구군 전체 --', '청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군',
      '괴산군', '음성군', '단양군'
    ],
    '충청남도': [
      '-- 충청남도 구군 전체 --', '천안시', '공주시', '보령시', '아산시', '논산시', '계룡시', '당진시', '금산군',
      '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'
    ],
    '전라북도': [
      '-- 전라북도 구군 전체 --', '전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군',
      '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'
    ],
    '전라남도': [
      '-- 전라남도 구군 전체 --', '목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군',
      '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군',
      '장성군', '완도군', '진도군', '신안군'
    ],
    '경상북도': [
      '-- 경상북도 구군 전체 --', '포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시',
      '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군',
      '칠곡군'
    ],
    '경상남도': [
      '-- 경상남도 구군 전체 --', '창원시', '김해시', '진주시', '양산시', '거제시', '통영시', '사천시', '하동군',
      '남해군', '함안군', '거창군', '합천군'
    ],
    '제주특별자치도': [
      '-- 제주 구군 전체 --', '제주시', '서귀포시'
    ],
  };
  

const AIBox = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [totalTime, setTotalTime] = useState('');
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [district, setDistrict] = useState('');
    const [volunteerType, setVolunteerType] = useState({
        청소년: true,
        성인: true,
    });

    //페이지 처음 로딩시 date설정해주기.
    useEffect (() => {
        const today = new Date();
        const setToday = today.toISOString().split('T')[0];
        setStartDate(setToday);

        const oneMonthLater = new Date(today);
        oneMonthLater.setMonth(oneMonthLater.getMonth()+1);
        const setOneMonthLater = oneMonthLater.toISOString().split('T')[0];
        setEndDate(setOneMonthLater);
    }, []);




    const handleLocationChange = (e) => {
        const selectedLocation = e.target.value;
        setLocation(selectedLocation.includes('전체') ? '' : selectedLocation);
        setDistrict('');
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setDistrict(selectedDistrict.includes('전체') ? '' : selectedDistrict);
    };

    const handleVolunteerTypeChange = (type) => {
        setVolunteerType((prevType) => ({
          ...prevType,
          [type]: !prevType[type],
        }));
    };

    const handleField1Change = (e) => {
        const selectedField1 = e.target.value;
        setField1(selectedField1.includes('전체') ? '' : selectedField1);  
        // 봉사분야 전체를 눌렀을 때 추가하기로 바뀌게 하는 거.
        if (selectedField1.includes('전체')) {
            setField2('추가하기');
            
          }
    };


    const handleField2Change = (e) => {
        const selectedField2 = e.target.value;
        setField2(selectedField2.includes('추가하기') ? '' : selectedField2);
    };

    
    const handleSearch = () => {
      const srvcClCodes = [field1, field2].filter(field => field !== '' && field !== '추가하기');
      // 전체 눌렀을 때 추가하기로 바꾸게 되었을 때 추가하기가 srvcClCodes에 들어가지 않도록 함.
      const searchCriteria = {
          totalTime: totalTime,
          sidoNm: location,  
          yngbgsPosblAt: volunteerType['청소년'] ? "가능" : "불가능",  
          adultPosblAt: volunteerType['성인'] ? "가능" : "불가능",  
          possibleStartDate: startDate, 
          possibleEndDate: endDate, 
      };
      if (srvcClCodes.length > 0) {  // srvcClCodes가 비어있지 않을 때만 추가한다.
        searchCriteria.srvcClCodes = srvcClCodes;
      }
      if(district.length > 0) {
        searchCriteria.gugunNm = district;
      }
    
      onSearch(searchCriteria);
    };
    

    return (
        <styles.Container>
        <styles.SearchContainer>
        <styles.ConditionGroup>
        <styles.ConditionItem>
            <styles.SearchLabel>봉사지역</styles.SearchLabel>
            <styles.SelectBox
                value={location}
                onChange={handleLocationChange}>
                <option value="전체">-- 전체 --</option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="세종특별자치시">세종특별자치시</option>
                <option value="경기도">경기도</option>
                <option value="강원특별자치도">강원특별자치도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="제주특별자치도">제주특별자치도</option>
            </styles.SelectBox>
        {location && (
            <styles.SelectBox value={district} onChange={handleDistrictChange}>
            {locations[location].map((districtOption, index) => (
                <option key={index} value={districtOption}>
                {districtOption}
                </option>
            ))}
            </styles.SelectBox>
        )}
        </styles.ConditionItem>
        </styles.ConditionGroup>
        <styles.ConditionGroup>
            <styles.ConditionItem>
            <styles.SearchLabel>봉사분야</styles.SearchLabel>
            <styles.SelectBox value={field1} onChange={handleField1Change}>
                <option value="전체">-- 봉사분야 전체 --</option>
                <option value="생활편의지원">생활편의지원</option>
                <option value="주거환경">주거환경</option>
                <option value="상담">상담</option>
                <option value="교육">교육</option>
                <option value="보건의료">보건의료</option>
                <option value="농어촌 봉사">농어촌 봉사</option>
                <option value="문화행사">문화행사</option>
                <option value="환경보호">환경보호</option>
                <option value="행정보조">행정보조</option>
                <option value="안전.예방">안전.예방</option>
                <option value="공익.인권">공익.인권</option>
                <option value="재해ㆍ재난">재해ㆍ재난</option>
                <option value="국제협력.해외봉사">국제협력.해외봉사</option>
                <option value="멘토링">멘토링</option>
                <option value="자원봉사교육">자원봉사교육</option>
                <option value="국제행사">국제행사</option>
                <option value="기타">기타</option>
            </styles.SelectBox>
            <styles.SelectBox value={field2} onChange={handleField2Change} >
                <option value="추가하기">-- 봉사분야 추가하기 --</option>
                <option value="생활편의지원">생활편의지원</option>
                <option value="주거환경">주거환경</option>
                <option value="상담">상담</option>
                <option value="교육">교육</option>
                <option value="보건의료">보건의료</option>
                <option value="농어촌 봉사">농어촌 봉사</option>
                <option value="문화행사">문화행사</option>
                <option value="환경보호">환경보호</option>
                <option value="행정보조">행정보조</option>
                <option value="안전.예방">안전.예방</option>
                <option value="공익.인권">공익.인권</option>
                <option value="재해ㆍ재난">재해ㆍ재난</option>
                <option value="국제협력.해외봉사">국제협력.해외봉사</option>
                <option value="멘토링">멘토링</option>
                <option value="자원봉사교육">자원봉사교육</option>
                <option value="국제행사">국제행사</option>
                <option value="기타">기타</option>
            </styles.SelectBox>
        </styles.ConditionItem>
        <styles.ConditionItem>
                <styles.CheckboxContainer>
                    <styles.Checkbox
                        type="checkbox"
                        id="youthCheckbox"
                        checked={volunteerType['청소년']}
                        onChange={() => handleVolunteerTypeChange('청소년')}
                    />
                <label htmlFor="youthCheckbox">청소년</label>
                </styles.CheckboxContainer>
                
                <styles.CheckboxContainer>
                <styles.Checkbox
                    type="checkbox"
                    id="adultCheckbox"
                    checked={volunteerType['성인']}
                    onChange={() => handleVolunteerTypeChange('성인')}
                />
                <label htmlFor="adultCheckbox">성인</label>
            </styles.CheckboxContainer>
            </styles.ConditionItem>
        </styles.ConditionGroup>
        
        <styles.ConditionGroup>
        <styles.ConditionItem>
        <styles.SearchLabel>봉사기간</styles.SearchLabel>
        <styles.DateInput
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
        />
        <span>~</span>
        <styles.DateInput
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
        />
        </styles.ConditionItem>
        <styles.ConditionItem>
        <styles.SearchLabel>총 시간</styles.SearchLabel>
        <styles.SearchInput
                    type="int"
                    placeholder="시간 단위로 숫자만 입력"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                />
        </styles.ConditionItem>
        </styles.ConditionGroup>
        </styles.SearchContainer>
        <styles.SearchButton onClick={handleSearch}>슈볼아 부탁해</styles.SearchButton>
        </styles.Container>
    );
    };

    export default AIBox;
