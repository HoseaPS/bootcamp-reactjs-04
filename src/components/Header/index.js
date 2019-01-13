import React from 'react';
import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/19921640?v=4" alt="User" />
      Oséias Paulo da Silva
    </User>
  </Container>
);

export default Header;
