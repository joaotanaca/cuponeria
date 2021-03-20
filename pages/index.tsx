import React, { useEffect } from 'react';
import Navbar from 'src/components/Navbar';
import api from 'src/services/api';

export default function Home() {
  useEffect(() => {
    api.get('/products').then(({ data }) => {
      console.log(data);
    });
  }, []);
  return <Navbar />;
}
