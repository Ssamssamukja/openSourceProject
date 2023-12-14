import styled from 'styled-components'

export const ListContainer = styled.div`
width:250px;
margin: 16px;
background-color: #373b59;
border-radius: 5px; /* 사각형 모서리 둥글게*/
box-shadow: 3px 3px 5px rgba(0,0,0,0.1); /*그림자!*/
color:white;
position: relative;
overflow: hidden;

&:hover {.movie-overlay {
    opacity: 1
}}
`;