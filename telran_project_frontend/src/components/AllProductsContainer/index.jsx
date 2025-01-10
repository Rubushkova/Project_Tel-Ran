import React from 'react'
import ProductCard from '../ProductCard'
import s from './index.module.css'

export default function AllProductsContainer({ products }) {
    return (
        
      <div className={s.container}>
        <h2>AllProducts</h2>
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((el) => <ProductCard key={el.id} {...el} />)
        )}
      </div>
    );
  }
