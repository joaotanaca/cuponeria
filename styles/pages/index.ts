import styled from 'styled-components';
import mixins from 'styles/mixins';

export const ContainerProducts = styled.div.attrs({ className: 'container' })`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin-top: 30px !important;
  ${mixins.sm`
    grid-template-columns: 1fr ;
  `}
`;
