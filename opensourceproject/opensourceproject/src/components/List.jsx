import { ListContainer } from './List.style';
import React from 'react';

function List({
  progrmSj,
  agentName,
  programBgnDate,
  programEndDate,
  programBgnTime,
  programEndTime,
  sidoCode,
  gugunCode,
  adultPosblAt,
  yngbbgsPosblAt,
  srvcClCode,
}) {
  // 계산된 시간 차이
  const timeDiff = parseInt(programEndTime, 10) - parseInt(programBgnTime, 10);
  const formattedTime = `${timeDiff} hours`;

  // 문자열로 주어진 날짜를 Date 객체로 변환
  const startDate = new Date(programBgnDate);
  const endDate = new Date(programEndDate);

  return (
    <ListContainer>
      <div>
        <h2>{progrmSj}</h2>
        <p>{agentName}</p>
        <p>Start Date: {startDate.toDateString()}</p>
        <p>End Date: {endDate.toDateString()}</p>
        <p>Duration: {formattedTime}</p>
        <p>Sido Code: {sidoCode}</p>
        <p>Gugun Code: {gugunCode}</p>
        <p>Adult Posbl: {adultPosblAt}</p>
        <p>Yngbbgs Posbl: {yngbbgsPosblAt}</p>
        <p>Srvc Cl Code: {srvcClCode}</p>
      </div>
    </ListContainer>
  );
}

export default List;
