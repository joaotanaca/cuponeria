import React from 'react';
import Image from 'next/image';
import { Container, InformationContainer } from './styles';
import Button from '../Button';
import { useRouter } from 'next/router';

interface CardProductProps {
  link: string;
  title: string;
  price: number;
  image: string;
}

const CardProduct = ({ image, title, price, link }: CardProductProps) => {
  const { push } = useRouter();
  return (
    <Container>
      <Image
        src={image.replace('https://fakestoreapi.com/img/', '')}
        objectFit={'contain'}
        layout="responsive"
        width="100%"
        height="60%"
        priority
        decoding="async"
      />
      <InformationContainer>
        <h3>{title}</h3>
        <em>R${price}</em>
        <Button onClick={() => push(link)}>ver produto</Button>
      </InformationContainer>
    </Container>
  );
};

export default CardProduct;
