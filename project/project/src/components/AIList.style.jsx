import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
`

export const ListContainer = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 800px;
    background-color: rgb(255, 255, 255);
    opacity:90%;
`;

export const ListInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.div`
    display: flex;
    margin-bottom: 2px;
`;

export const Heading = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 3px 0 3px;
`;

export const Span = styled.span`
    margin-bottom: 2px;
    font-size: 14px;
`;

export const Span2 = styled.span`
    margin-bottom: 2px;
    margin-top: 5px;
    font-size: 14px;
`;

export const ProgramStatus = styled.span`
    color: ${(props) => (props.status === '모집중' ? 'blue' : props.status === '모집완료' ? 'red' : 'black')};
    margin-right: 8px;
    font-weight: bold;
    font-size: 16px;
`;

export const ServiceClassCode = styled.span`
    margin-left: 8px;
    font-size : 15px;
`;

export const SidoGugunSpan = styled.span`
    margin-left: 0px;
    font-size : 15px; 
`;

export const UrlButton = styled.button`
    margin-top: 8px;
    padding: 8px 16px;
    background-color: #3b8ce3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
`;

export const ActDuringTm = styled.span`
    color:#3b8ce3;
    margin-left: 10px;
    padding: 2px;
    font-size: 25px;
`;

export const AssignedDate = styled.span`
    margin-right: 3px;
    font-size: 25px;
`;

export const Box = styled.div`
    flex-direction: column;
    justify-content: center;
    width: 60%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 0px;
    padding: 4px;
    padding-left: 7px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
`

export const H1 = styled.h1`
    width: 100%;
    margin-bottom: 0px;
    margin-top: 0px;
`