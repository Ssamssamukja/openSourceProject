import styled from 'styled-components';

export const ListContainer = styled.div`
 width:250px;
margin: 16px;
background-color: #373b59;
border-radius: 5px; /* 사각형 모서리 둥글게*/
box-shadow: 3px 3px 5px rgba(0,0,0,0.1); /*그림자!*/
color:white;
position: relative;
overflow: hidden;
`;

  export const ListContent = styled.div`
     display: flex;
    padding: 20px; /*글씨 주위의 여백 주기*/
    justify-content: space-between;
  `;
