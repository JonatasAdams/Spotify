import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/50053472?v=4" alt="Avatar" />
      Jonatas Adams
    </User>
  </Container>
);

export default Header;