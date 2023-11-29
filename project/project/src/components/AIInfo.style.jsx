import styled,{ keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Box = styled.div`
    flex-direction: column;
    justify-content: center;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 0px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
    opacity:0;
    animation: ${fadeInUp} 0.8s ease-in-out forwards;
`

export const H1 = styled.h2`
    width: 100%;
    margin-bottom: 10px;
    margin-top: 7px;
`

export const P = styled.p`
    width: 100%;
    margin-bottom: 0px;
    margin: 3px;
`

