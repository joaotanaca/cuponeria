import React from 'react';
import { useProducts, filter } from 'src/contexts/Products';

import { Container } from './styles';

const Header = () => {
  const { setFilter } = useProducts();
  return (
    <Container>
      <h4>Sugestões para você</h4>
      <select
        onChange={event => {
          setFilter(event.currentTarget.value as filter);
        }}
      >
        <option selected value="">
          ordernar por
        </option>
        <option value="asc">menor preço</option>
        <option value="desc">maior preço</option>
      </select>
    </Container>
  );
};

export default Header;
