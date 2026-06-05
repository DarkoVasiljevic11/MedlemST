import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Dropdown from "./Dropdown";
import products from "./Products";
import ProductCard from "./CartCard";
import Nav from "../../components/Nav";

export default function Shop() {
  const handleCart = (product: any) => {
    console.log("Added:", product);
  };

  const { category } = useParams();

  const [currentPage, setCurrentPage] =
    useState(1);

  const productsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const filteredProducts =
    !category || category === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.slug ===
            category
        );

  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  const displayedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        productsPerPage,
      currentPage *
        productsPerPage
    );

  return (
    <>
      <Nav />

      <div className="flex justify-center bg-cream py-10">
        <h1 className="text-brown font-bree">
          Kupite nas med jebem vas usta!
        </h1>
      </div>

      <Dropdown buttonText="Kategorije" />

      <section className="container mx-auto px-4 py-8">
        <div
          className="
            grid
            grid-cols-2
            gap-4
            md:gap-6
            lg:grid-cols-4
          "
        >
          {displayedProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                category={
                  product.category.name
                }
                title={product.title}
                description={{
                  des: product
                    .description.des,
                  prof: Array.isArray(
                    product.description
                      .prof
                  )
                    ? product
                        .description
                        .prof
                    : [
                        product
                          .description
                          .prof,
                      ],
                  tec: Array.isArray(
                    product.description
                      .tec
                  )
                    ? product
                        .description
                        .tec
                    : [
                        product
                          .description
                          .tec,
                      ],
                }}
                variants={
                  product.variants
                }
                onAddToCart={
                  handleCart
                }
              />
            )
          )}
        </div>

        {totalPages > 1 && (
          <div
            className="
              flex
              justify-center
              gap-2
              mt-10
              flex-wrap
            "
          >
            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.max(
                    1,
                    p - 1
                  )
                )
              }
              disabled={
                currentPage === 1
              }
              className="
                px-4
                py-2
                rounded-xl
                border
                bg-white
                text-brown
                disabled:opacity-50
                disabled:cursor-not-allowed
                cursor-pointer
              "
            >
              ←
            </button>

            {Array.from(
              {
                length:
                  totalPages,
              },
              (_, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setCurrentPage(
                      i + 1
                    )
                  }
                  className={`
                    px-4
                    py-2
                    rounded-xl
                    border
                    cursor-pointer
                    ${
                      currentPage ===
                      i + 1
                        ? "bg-honey text-brown border-honey"
                        : "bg-white text-brown"
                    }
                  `}
                >
                  {i + 1}
                </button>
              )
            )}

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(
                    totalPages,
                    p + 1
                  )
                )
              }
              disabled={
                currentPage ===
                totalPages
              }
              className="
                px-4
                py-2
                rounded-xl
                border
                bg-white
                text-brown
                disabled:opacity-50
                disabled:cursor-not-allowed
                cursor-pointer
              "
            >
              →
            </button>
          </div>
        )}
      </section>
    </>
  );
}