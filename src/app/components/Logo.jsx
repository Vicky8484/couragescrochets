import Image from "next/image";

const Logo = () => {
  return (
    <div className="gap-4 flex items-center">
      <div className="relative size-12 shrink-0 overflow-hidden p-1 rounded-full bg-[#601728]">
        <Image
          src="/logo.png"
          fill
          alt=""
          sizes="48px"
          className="rounded-full object-contain"
        />
      </div>

      <h1 className="text-3xl text-[#601728] font-bold">Courage's Chrochets</h1>
    </div>
  );
};

export default Logo;
