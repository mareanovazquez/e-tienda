import { useEffect, useState } from 'react';
import { Hero } from '../../components/Ui/Hero';
import styles from './Home.module.css';
import { CardProduct } from '../../components/Ui/CardProduct';
import { getProducts } from '../../service';
import type { Product } from '../../interface';

const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts()
    .then((data) => {
      setProducts(data);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
}, []);



  console.log(products);
  return (
    <>
      <Hero />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div className={styles.container}>
        {products.map((product) => (
          <CardProduct key={product.tail} product={product} />))}
      </div>
    </>
  )
}

export default Home