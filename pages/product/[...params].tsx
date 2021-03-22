import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Button from 'src/components/Button';
import { ProductI } from 'src/interfaces/products';
import api from 'src/services/api';
import { ContainerProduct } from 'styles/pages/product';

interface ProductsProps {
  data: ProductI;
  name: string;
}

const product = ({ data, name }: ProductsProps) => {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <ContainerProduct>
        <div className="image">
          <Image
            layout="responsive"
            width="100%"
            height="100%"
            objectFit="contain"
            src={data.image.replace('https://fakestoreapi.com/img', '')}
          />
        </div>
        <div className="informations">
          <h1>{data.title}</h1>
          <p className="price">R${data.price}</p>
          <p className="description">{data.description}</p>
          <Button>Comprar</Button>
        </div>
      </ContainerProduct>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const [, name, id] = ctx.params?.params as string[];
  const { data } = await api.get(`/products/${id}`);
  return {
    props: {
      data,
      name,
    },
  };
}

export default product;
