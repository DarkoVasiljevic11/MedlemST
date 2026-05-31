import Dropdown from "./Dropdown";
import products from "./Products";
import ProductCard from "./CartCard";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
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
    <Nav />
      <div className="flex justify-center bg-cream py-10">
        <h1 className="text-brown font-bree">Kupite nas med jebem vas usta!</h1>
      </div>
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
              description={{
                des: product.description.des,
                prof: Array.isArray(product.description.prof)
                  ? product.description.prof
                  : [product.description.prof],
                tec: Array.isArray(product.description.tec)
                  ? product.description.tec
                  : [product.description.tec],
              }}
              variants={product.variants}
              onAddToCart={handleCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}