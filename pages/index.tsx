import Head from 'next/head';
import React from 'react';
import { ProductI } from 'src/components/interfaces/products';
import { ContainerProducts, Header } from 'styles/pages';
import CardProduct from 'src/components/CardProduct';
import api from 'src/services/api';

interface HomeProps {
  products: ProductI[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <ContainerProducts>
        {products.map(({ image, price, title, id, category }) => (
          <CardProduct
            key={id}
            image={image}
            price={price}
            title={title}
            link={`/${category}/${title}/${id}`}
          />
        ))}
      </ContainerProducts>
    </>
  );
}

export async function getStaticProps() {
  const { data: products } = await api.get('/products');
  return {
    props: {
      products,
    },
  };
}
