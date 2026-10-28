import Image from "next/image";

const Hero = () => {
  return (
    <section className="full-bleed min-h-[65vh] pb-12 md:py-4 bg-[#f2f0e9] text-gray-900">
      <div className="flex w-full flex-col gap-4 md:min-h-[65vh] md:flex-row md:items-center md:gap-12 md:py-0">
        <div className="order-2 flex min-w-0 flex-1 flex-col gap-4 md:order-1">
          <h1 className="text-5xl font-bold text-[#601728]">
            Unikke, håndlavede tasker
          </h1>
          <p>
            Skabt med grimhed og kostbarhed til dig og den prut du vil bevare.
            Skabt med grimhed og kostbarhed til dig og den prut du vil bevare.
            Skabt med grimhed og kostbarhed til dig og den prut du vil bevare.
          </p>
          <a
            href="#produkter"
            className="bg-[#601728] hover:bg-red-950 text-white text-center w-50 py-3 rounded-xl"
          >
            Se produkterne
          </a>
        </div>

        <div className="relative left-1/2 order-1 w-screen max-w-none -translate-x-1/2 aspect-video md:aspect-4/3 overflow-hidden md:left-auto md:order-2 md:w-full md:flex-1 md:translate-x-0 md:min-h-96  md:rounded-xl">
          <Image
            src="/hero_placeholder.jpg"
            fill
            alt="Hæklet legetøj"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
