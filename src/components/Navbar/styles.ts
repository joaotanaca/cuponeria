import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #ff0000, #f91e96);
  .logo_container {
    padding: 35px 0;
  }
`;

export const Menu = styled.div`
  width: 100%;
  box-shadow: 0px 3px 6px #00000029;
  padding: 20px 0;
  .container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`;

export const LinkButton = styled.button<{ active: boolean }>`
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  color: ${({ active }) => (active ? '#ff0000' : '#000')};
  cursor: pointer;
  em {
    font-size: 16px;
    font-weight: normal;
    margin-left: 5px;
  }
  svg {
    width: 100%;
    path {
      fill: ${({ active }) => (active ? '#ff0000' : '#000')};
    }
  }
`;
