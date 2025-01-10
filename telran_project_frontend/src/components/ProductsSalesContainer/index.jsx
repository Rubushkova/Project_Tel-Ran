import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";


export default function ProductsSalesContainer() {
  const productsState = useSelector((store) => store.products)
    .sort(() => Math.random() - 0.5)
    .filter((el, i) => i <= 3);

  return (
    <section className={s.container}>
      <div>
        <h2>Sale</h2>
        <div></div>
        <Link to='/all_sales'>All sales</Link>
      </div>

      <div>
        {productsState.map((el) => (
          <ProductCard key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
}
