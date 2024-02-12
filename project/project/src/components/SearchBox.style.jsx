import styled, {keyframes}from 'styled-components';

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
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SearchContainer = styled.div`
    width: 60%;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start; 
    justify-content: center;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    width: 100%;
    background-color: rgb(255, 255, 255);
    opacity:0;
    animation: ${fadeInUp} 0.8s ease-in-out forwards;
`;

export const Heading = styled.h1`
    width: 100%;
    text-align: center; 
    margin-bottom: 25px;
    margin-top: 7px;
`;

export const SearchLabel = styled.label`
    flex-basis: 100%;
    margin: 5px;
`;

export const SearchInput = styled.input`
    flex-basis: calc(33.33% - 10px);
    padding: 8px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const SelectBox = styled.select`
    padding: 8px; 
    margin-bottom: 10px;
  
`;

export const DateInput = styled.input`
    padding: 8px; 
    margin-bottom: 10px;
    width: calc(33.33% - 10px);
`;

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const Checkbox = styled.input`
    margin-left: 10px;
`;

export const SearchButton = styled.button`
    padding: 12px 25px; 
    background-color: #3b8ce3;
    color: #fff;
    cursor: pointer;
    margin-top: 10px;
    font-size: 17px;
    border-radius: 8px;
    border: 0px solid #0d0d0d;
    
    transition: box-shadow 0.3s ease;
    margin : 7px;

    &:active {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transform: translateY(1px);
    }
`;

export const ConditionGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    justify-content: center;
`;

export const ConditionItem = styled.div`
    margin-right: 10px;
    margin-bottom: 5px;
`;