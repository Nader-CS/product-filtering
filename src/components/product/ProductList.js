import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import Search from "../search/Search";
import Categories from "../categories/Categories";
import Product from "./Product";
import { products as productData } from "../../utilities/products-data";
import NotFound from "./NotFound";

const allCategories = [
  "all",
  ...new Set(
    productData.map((product) => {
      return product.category;
    })
  ),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterProducts = (category) => {
    if (category == "all") {
      setProducts(productData);
      return;
    }
    const newProducts = productData.filter((product) => {
      return product.category == category;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    setFilteredProduct(
      products.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, products]);

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span style={{ color: "#00a7e1" }}>Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search
              inputValue={search}
              onInputChange={handleSearch}
              filteredProduct={filteredProduct}
            />
            <Categories
              categories={categories}
              filterItemsHandler={filterProducts}
            />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProduct.length === 0 ? (
            <NotFound />
          ) : (
            filteredProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
