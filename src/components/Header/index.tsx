import React from 'react';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <h4>Sugestões para você</h4>
      <select>
        <option value="">ordernar por</option>
      </select>
    </Container>
  );
};

export default Header;
