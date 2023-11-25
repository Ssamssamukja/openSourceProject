import { ListContainer, ListContent } from './List.style';

import {Link} from 'react-router-dom';
import React from 'react';

function List({
  ProgramRegisterNumber, // 
  ProgramSubject,
  OrganizationName,
  ProgramStartDate,
  ProgramEndDate,
  BeginTime,
  EndTime,
  RegionCode,
  AdultPossible,
  YouthPossible,
  ServiceClassCode,
  URL,
  ProgramStatus,
  ProvinceCode,
  Place,
  NoticeStartDate,
  NoticeEndDate


}) {
  console.log(RegionCode);
  // 계산된 시간 차이
  const timeDiff = parseInt(EndTime, 10) - parseInt(BeginTime, 10);
  const formattedTime = `${timeDiff} hours`;

  // 문자열로 주어진 날짜를 Date 객체로 변환
  const startDate = new Date(ProgramStartDate);
  const endDate = new Date(ProgramEndDate);
  return (
    //<Link to ={`/search/${ProgramRegisterNumber}`}>
    <ListContainer>
      <ListContent>
        <h2>{ProgramSubject}</h2>
        <p>{OrganizationName}</p>
        <p>Start Date: {startDate.toDateString()}</p>
        <p>End Date: {endDate.toDateString()}</p>
        <p>Duration: {formattedTime}</p>
        <p>Region Code: {RegionCode}</p>
        <p>Adult Posbl: {AdultPossible}</p>
        <p>Yngbbgs Posbl: {YouthPossible}</p>
        <p>Srvc Cl Code: {ServiceClassCode}</p>
      </ListContent>
    </ListContainer>
   // </Link>
  );
}

export default List;
