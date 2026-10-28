import Image from "next/image";
import Logo from "@/app/components/Logo";

const OmMig = () => {
  return (
    <section
      id="om-mig"
      className="bg-[#f2f0e9] full-bleed flex justify-center py-12 items-center"
    >
      <article className="flex flex-col text-center justify-center md:text-start gap-5 md:flex-row items-center">
        <Image
          src="/courage.jpg"
          width={250}
          height={250}
          className="aspect-square rounded-full object-cover"
          alt="Billede af Courage"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-[#601728] font-bold">
            Hej, jeg hedder Courage
          </h1>
          <p className="max-w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            blanditiis sit soluta obcaecati porro molestias quidem laboriosam
            fugit reprehenderit aliquam, ipsum, quisquam nam labore cupiditate
            illum quaerat eveniet! Maiores, dolor.
          </p>
          <Logo />
        </div>
      </article>
    </section>
  );
};

export default OmMig;
