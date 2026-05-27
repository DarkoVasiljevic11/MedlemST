import Dropdown from "./Dropdown";
import products from "./Products";
import ProductCard from "./CartCard";
import { useParams } from "react-router-dom";

export default function Shop() {
  const handleCart = (product:any) => {
    console.log("Added:", product);
  };

const { category } = useParams();

  const filteredProducts =
    !category || category === "all"
      ? products
      : products.filter(
          (product) => product.category.slug === category
        );

  return (
    <>
      <Dropdown buttonText="Kategorije" />

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              category={product.category.name}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={handleCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}