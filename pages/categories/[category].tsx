import Head from 'next/head';
import React from 'react';
import { ProductI } from 'src/interfaces/products';
import { ContainerProducts } from 'styles/pages';
import CardProduct from 'src/components/CardProduct';
import api from 'src/services/api';
import { useProducts } from 'src/contexts/Products';
import { GetServerSidePropsContext } from 'next';

interface HomeProps {
  data: ProductI[];
  category: string;
}

export default function categories({ data, category }: HomeProps) {
  const { filterProducts } = useProducts();
  return (
    <>
      <Head>
        <title>{category.toUpperCase()}</title>
      </Head>
      <ContainerProducts>
        {filterProducts(data).map(({ image, price, title, id, category }) => (
          <CardProduct
            key={id}
            image={image}
            price={price}
            title={title}
            link={`/product/${category}/${title}/${id}`}
          />
        ))}
      </ContainerProducts>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { category } = ctx.params as { category: string };
  if (category === 'clothing') {
    const { data: men } = await api.get('/products/category/men clothing');
    const { data: women } = await api.get('/products/category/women clothing');
    return { props: { data: [...men, ...women], category } };
  } else {
    const { data } = await api.get(`/products/category/${category}`);
    return { props: { data, category } };
  }
}
