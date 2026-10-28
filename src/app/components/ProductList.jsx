import Product from "@/app/components/Product.jsx";
const ProductList = () => {
  return (
    <section
      id="produkter"
      className="p-4 m-4 rounded-xl full-bleed text-center flex flex-col gap-4"
    >
      <h4>Produkter</h4>
      <h1 className="text-4xl text-[#601728] font-bold">Bestsellers</h1>
      <div className="grid grid-cols-1 min-[560px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <Product
          productImage="/produkt1-1.jpg"
          productAlt="Taske"
          navn="Sort pung"
          info="Grøn pung jabadabadoobab"
          pris="80.00 DKK"
        />
        <Product
          productImage="/produkt2-1.jpg"
          productAlt="Taske"
          navn="Lilla pung"
          info="Grøn pung jabadabadoobab"
          pris="80.00 DKK"
        />
        <Product
          productImage="/produkt3-1.jpg"
          productAlt="Taske"
          navn="Grøn pung"
          info="Grøn pung jabadabadoobab"
          pris="80.00 DKK"
        />
        <Product
          productImage="/produkt-4.jpg"
          productAlt="Taske"
          navn="Rødt hjerte"
          info="Grøn pung jabadabadoobab"
          pris="100.00 DKK"
        />
        <Product
          productImage="/produkt5.jpg"
          productAlt="Taske"
          navn="Lysegrøn pung"
          info="Grøn pung jabadabadoobab"
          pris="80.00 DKK"
        />
      </div>
    </section>
  );
};

export default ProductList;
