import styled from 'styled-components';
import mixins from 'styles/mixins';

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
  ${mixins.sm`
      position:fixed;
      bottom:0;
      left:0;
      z-index:1000;
      background:#fff;
      padding: 15px 0 10px;
      box-shadow: 0px -3px 6px #00000029!important;
    `}
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
  ${mixins.sm`
    flex-flow:column;
    svg{
      margin-bottom:3px;
      width:unset!important;
    }
  `}
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
