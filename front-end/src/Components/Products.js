import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : `http://localhost:5000/api/products`
        );
        console.log(res.data)
        setProducts(res.data)
      } catch (err) {}
    };
  }, [category]);

  useEffect(() => {
    category && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value]) => 
      item[key].includes(value)
      )
    )
    )
  }, [products, category, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
