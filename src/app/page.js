import Hero from "@/app/components/Hero";
import ProductList from "@/app/components/ProductList";
import KundeAnmeldelser from "@/app/components/KundeAnmeldelser";
import SenesteVideoer from "@/app/components/SenesteVideoer";
import OmMig from "@/app/components/OmMig";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductList />
      <KundeAnmeldelser />
      <SenesteVideoer />
      <OmMig />
    </>
  );
}
