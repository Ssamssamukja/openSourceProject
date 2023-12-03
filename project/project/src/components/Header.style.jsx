import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: #1e6ebe;
  padding: 15px;
  color: #ffffff;
  font-size: 18px;
`;

export const Navbar = styled.div`
  display: flex;

  a {
    margin-top: 3px;
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff;


    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Linka = styled.div`
  font-size: 20px;
  margin-right: 20px;
  font-weight: bold;
`
