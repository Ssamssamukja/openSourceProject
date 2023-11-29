import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: #1e6ebe;
  padding: 15px;
  color: #ffffff;
  font-size: 20px;
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
