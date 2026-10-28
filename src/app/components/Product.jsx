import Image from "next/image";

const Product = ({productImage, productAlt, navn, info, pris}) => {
  return (
    <article className="bg-[#fbfaf8] rounded-xl shadow-xl text-left">
      <Image
        src={productImage}
        width={300}
        height={300}
        alt={productAlt}
        className="w-full aspect-square rounded-t-xl object-cover"
      />
      <div className="p-4 justify-start flex flex-col gap-2">
        <p className="font-bold">{navn}</p>
        <p>{info}</p>
        <p>{pris}</p>
        <button className="w-full text-white bg-[#601728] py-2 rounded-xl">
          Læg i kurv
        </button>
      </div>
    </article>
  );
};

export default Product;
