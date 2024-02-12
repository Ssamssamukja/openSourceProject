import { ListContainer } from './List.syle';
import React from 'react';

function List ({ key, progrmSj, agentName, programBgnDate, programEndDate, programBgnTime, programEndTime, sidoCode, gugunCode, adultPosblAt, yngbbgsPosblAt, srvcClCode }) {
    const time = programEndTime-programBgnTime;
    
    return (
        <ListContainer>
            <div key={key}>
                <h2>{progrmSj}</h2> 
                <p>{agentName}</p>
                <p>{programBgnDate}</p>
                <p>{programEndDate}</p>
                <p>{time}</p>
                <p>{sidoCode}</p>
                <p>{gugunCode}</p>
                <p>{adultPosblAt}</p>
                <p>{yngbbgsPosblAt}</p>
                <p>{srvcClCode}</p>
            </div>
        </ListContainer>
    );
};

export default List;
