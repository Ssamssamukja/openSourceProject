import React from 'react'

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
    YouthPossible
}) {
  return (
    <div className="list-container">
           <div className="list-info">
                <h4>{ProgramSubject}</h4>
                <span>{BeginTime}</span>
                <span>{EndTime}</span>
                <span>{Place}</span>
                <span>{AdultPossible}</span>
                <span>{GugunNm}</span>
                <span>{OrganizationName}</span>
                <span>{NoticeBeginDate}</span>
                <span>{NoticeEndDate}</span>
                <span>{ProgramRegistNumber}</span>
                <span>{ProgramStatus}</span>
                <span>{SidoNm}</span>
                <span>{ServiceClassCode}</span>
                <span>{URL}</span>
                <span>{YouthPossible}</span>
            </div>
        </div>
  )
}


export default List;
