import * as styles from './AIList.style.jsx';

import React,{useState} from 'react';

function AIList({
    BeginTime,
    EndTime,
    ActDuringTm,
    AdultPossible,
    GugunNm,
    OrganizationName,
    NoticeBeginDate,
    NoticeEndDate,
    ProgramSubject,
    ProgramStatus,
    SidoNm,
    ServiceClassCode,
    URL,
    YouthPossible,
    ProgramBeginDate,
    ProgramEndDate,
    ProgramCn,
    AssignedDate,
}) {

    const [showDetail, setShowDetail] = useState(false);

    const DetailButtonClick = () =>{
        setShowDetail(!showDetail);
    }

    const handleButtonClick = () => {
        window.location.href = URL;
    };

  return (
    <styles.Container>
        <styles.Box>
            <styles.H1>
            <styles.AssignedDate>{AssignedDate}</styles.AssignedDate>
            <styles.ActDuringTm>{ActDuringTm}시간</styles.ActDuringTm>
            </styles.H1>
        </styles.Box>
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
            <styles.Span>---------------------------------------------------------------------------------------------------------------------------------------</styles.Span>
            
            {showDetail && ProgramCn &&(
                <>
                    <styles.Span2>
                        {ProgramCn.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </styles.Span2>
                </>
            )}
            <styles.UrlButton onClick={DetailButtonClick}>
                {showDetail ? '상세정보 닫기' : '상세정보 보기'}
            </styles.UrlButton>
            
            <styles.UrlButton onClick={handleButtonClick}>
                신청하러가기
            </styles.UrlButton>
        </styles.ListInfo>
    </styles.ListContainer>
    </styles.Container>
  );
}

export default AIList;
