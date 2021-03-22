import styled from 'styled-components';
import mixins from 'styles/mixins';

export const ContainerProduct = styled.div.attrs({ className: 'container' })`
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
  margin-bottom: 50px;
  ${mixins.sm`
    grid-template-columns: 1fr;
    .image{
      margin-bottom:30px;
      margin-right:0!important;
    }
    .informations{
      margin-left:0!important;
      h1{
        margin-bottom:5px;
      }
      button{
        max-width:100%;
      }
    }
  `}
  .image {
    margin-right: 10px;
    border-radius: 14px;
  }
  .informations {
    color: #000000b3;
    margin-left: 10px;
    h1 {
      font-size: 22px;
      font-weight: bold;
    }
    p {
      &.description {
        font-size: 16px;
        margin-top: 20px;
      }
      &.price {
        color: #4caf50;
        font-weight: bold;
        font-size: 30px;
        margin-top: 15px;
      }
    }
    button {
      margin-top: 40px;
    }
  }
`;
