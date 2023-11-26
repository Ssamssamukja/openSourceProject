import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: #1b7de6;
  padding: 10px;
  color: #ffffff;
  font-size: 18px;
`;

export const Navbar = styled.div`
  display: flex;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff;

    &:hover {
      text-decoration: underline;
    }
  }
`;
