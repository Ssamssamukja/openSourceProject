import * as styles from './Header.style';

import { Link } from 'react-router-dom';
import React from 'react';

function Header() {
  return (
    <styles.HeaderContainer>
      <styles.Navbar>
        <Link to="/AI">봉사 추천</Link>
        <Link to="/search">봉사 조회</Link>
      </styles.Navbar>
    </styles.HeaderContainer>
  );
}

export default Header;
