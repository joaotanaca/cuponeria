import styled from 'styled-components';
import mixins from 'styles/mixins';

export const Container = styled.div.attrs({ className: 'container' })`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ${mixins.sm`
    grid-template-columns: 1fr;
    h4{
      text-align:center;
      margin-bottom:10px;
    }
  `}
  h4 {
    font-size: 24px;
    color: #000000b3;
    letter-spacing: 0.96px;
    font-weight: bold;
  }
  select {
    appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='000000b3' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 50%;
    border: 1px solid #f62996;
    border-radius: 4px;
    padding: 18px 12px;
    color: #000000b3;
  }
`;
