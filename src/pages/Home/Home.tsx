import { useEffect, useState } from 'react';
import { Hero } from '../../components/Ui/Hero';
import styles from './Home.module.css';
import { CardProduct } from '../../components/Ui/CardProduct';

const Home = () => {

  const [products, setProducts] = useState ([]);

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');   
      const data = await response.json();
      setProducts(data);
    } 
      catch (error) {
      console.error('Error fetching products:', error);
    }
  }; 

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <>
      <Hero />
      <div className={styles.container}>
      {products.map((product) => (
        <CardProduct key={product.tail} product={product}/>))}
        </div>
    </>
  )
}

export default Home