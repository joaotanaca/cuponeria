import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: calc(100% - 10px);
  display: flex;
  flex-flow: column;
  box-shadow: 0px 6px 12px #0000001f;
  border-radius: 14px;
  margin-bottom: 30px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 13px 13px 30px;
  color: #000000b3;
  h3 {
    font-size: 16px;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  em {
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    line-height: 25px;
    margin: 20px 0;
  }
  button {
    max-width: 100%;
  }
`;
