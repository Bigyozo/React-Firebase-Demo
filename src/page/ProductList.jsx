import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./Products";
import { fetchProducts } from "../store/product/product.operation";
import { getProducts } from "../store/product/product.selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
            />
          ))}
      </div>
    </section>
  );
};

export default ProductList;
