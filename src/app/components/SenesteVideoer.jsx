import {AiFillTikTok} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";

const SenesteVideoer = () => {
  return (
    <section
      id="videoer"
      className="py-12 rounded-xl full-bleed text-center flex flex-col gap-4"
    >
      <h4 className="flex gap-3 justify-center items-center">
        <span className="flex gap-2">
          TikTok <AiFillTikTok className="size-5" />
        </span>
        •
        <span className="flex gap-2">
          Instagram
          <AiFillInstagram className="size-5" />
        </span>
      </h4>
      <h1 className="text-4xl flex gap-3 justify-center text-[#601728] font-bold">
        Følg processen @couragescrochets
      </h1>
      <div className="flex overflow-x-auto snap-x snap-mandatory w-full gap-4 items-center justify-start md:justify-center">
        <div
          className="bg-[url('/video-placeholder.png')] bg-contain bg-center bg-no-repeat aspect-9/16 p-4 rounded-xl w-50 shrink-0 snap-center"
          title="placeholder"
        ></div>
        <div
          className="bg-[url('/video-placeholder.png')] bg-contain bg-center bg-no-repeat aspect-9/16 p-4 rounded-xl w-50 shrink-0 snap-center"
          title="placeholder"
        ></div>
        <div
          className="bg-[url('/video-placeholder.png')] bg-contain bg-center bg-no-repeat aspect-9/16 p-4 rounded-xl w-50 shrink-0 snap-center"
          title="placeholder"
        ></div>
        <div
          className="bg-[url('/video-placeholder.png')] bg-contain bg-center bg-no-repeat aspect-9/16 p-4 rounded-xl w-50 shrink-0 snap-center"
          title="placeholder"
        ></div>
      </div>
    </section>
  );
};

export default SenesteVideoer;
