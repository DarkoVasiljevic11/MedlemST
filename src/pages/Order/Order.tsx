import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import products from "./Products";
import ProductCard from "./CartCard";
import Nav from "../../components/Nav";
import pcela from "..//../assets/pcela.jpg";
import { Helmet } from "react-helmet-async";

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
    !category || category === "sve"
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
const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map(
    (product, index) => ({
      "@type": "Product",
      position: index + 1,
      name: product.title,
      description: product.description.des,
    })
  ),
};


const productsRef = useRef<HTMLElement | null>(null);
const firstLoad = useRef(true);

useEffect(() => {
  if (firstLoad.current) {
    firstLoad.current = false;
    return; // do nothing on initial page load
  }

  productsRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, [category]);
  return (
    <>
    <Helmet>
    <title>Medlem - Poručite naš domaći med</title>
    <meta
    name="description"
    content="Pogledajte našu ponudu prirodnog bagremovog, livadskog i šumskog meda. Proizvedeno u Srbiji."
  />

  <meta
    name="robots"
    content="index,follow"
  />

  <link
    rel="canonical"
    href="https://medlem.rs/poručite"
  />

  <meta
    property="og:title"
    content="Medlem - Poručite naš med"
  />

  <meta
    property="og:description"
    content="Ponuda prirodnog domaćeg meda."
  />

  <meta
    property="og:image"
    content="https://medlem.rs/og-products.webp"
  />
   <script type="application/ld+json">
  {JSON.stringify(schema)}
</script>
    </Helmet>
      <Nav />
    
     <section className="w-full bg-cream py-20 px-6 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* LEFT TEXT */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-lg text-brown leading-relaxed font-bree text-justify">
            Izaberite neki od proizvoda iz naše ponude. Ukoliko imate ideju za proizvod koji biste voleli da probate, kontaktirajte nas i rado ćemo saslušati vaš predlog.
          </p>
        </div>
        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            
            <img
              src={pcela}
              alt="Pčelarstvo"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
 <div className="w-full flex justify-center my-5">
  <div className="w-2 h-2 bg-honey rounded-full opacity-60" />
</div>
      <Dropdown buttonText="Kategorije" />

      <section  ref={productsRef} className="container mx-auto px-4 py-8">
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