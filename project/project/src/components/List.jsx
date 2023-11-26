import * as styles from './List.style.jsx';

import React from 'react';

function List({
  BeginTime,
  EndTime,
  Place,
  AdultPossible,
  GugunNm,
  OrganizationName,
  NoticeBeginDate,
  NoticeEndDate,
  ProgramRegistNumber,
  ProgramSubject,
  ProgramStatus,
  SidoNm,
  ServiceClassCode,
  URL,
  YouthPossible,
  ProgramBeginDate,
  ProgramEndDate
}) {
  const handleButtonClick = () => {
    window.location.href = URL;
  };

  return (
    <styles.ListContainer>
      <styles.ListInfo>
        <styles.ListItem>
          <styles.ProgramStatus status={ProgramStatus}>
            {ProgramStatus}
          </styles.ProgramStatus>
          <styles.SidoGugunSpan> {SidoNm} {GugunNm}</styles.SidoGugunSpan>
          <styles.ServiceClassCode>{">> "}{ServiceClassCode}</styles.ServiceClassCode>
          </styles.ListItem>
          <styles.Heading>{ProgramSubject}</styles.Heading>
        <styles.Span>봉사 기간 : {ProgramBeginDate} ~ {ProgramEndDate}</styles.Span>
        <styles.Span>봉사 시간: {BeginTime}시 ~ {EndTime}시</styles.Span>
        <styles.Span>성인 가능 여부 : {AdultPossible}</styles.Span>
        <styles.Span>청소년 가능 여부 : {YouthPossible}</styles.Span>
        <styles.Span>모집기관 : {OrganizationName}</styles.Span>
        <styles.Span>모집기간 : {NoticeBeginDate} ~ {NoticeEndDate}</styles.Span>

        <styles.UrlButton onClick={handleButtonClick}>
          상세정보
        </styles.UrlButton>
        <styles.UrlButton onClick={handleButtonClick}>
          신청하러가기
        </styles.UrlButton>
      </styles.ListInfo>
    </styles.ListContainer>
  );
}

export default List;