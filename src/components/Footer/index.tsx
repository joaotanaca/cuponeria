import React from 'react';
import { Container } from './styles';
import Face from './face.svg';
import Insta from './insta.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';

const Footer = () => {
  return (
    <Container>
      <Face />
      <Insta />
      <Twitter />
      <Youtube />
    </Container>
  );
};

export default Footer;
