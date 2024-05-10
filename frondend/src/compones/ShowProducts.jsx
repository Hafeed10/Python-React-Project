import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './show.css'
const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:8000/api/products/')
    console.log(response.data);
    setProducts(response.data)
  }

  // Example of using useState and useEffect hooks

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div className='middile'>
        {
          products.map((product) => (
            <div className='max' key={product.id}>
              <img src={product.image} height='200' width='250' alt="" />
              <h3>{product.name}</h3>
              <p className='price'>${product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <button>Show Detail</button>
            </div>
          )

          )
        }
      </div>
    </div>
  );
}

export default ShowProducts;
