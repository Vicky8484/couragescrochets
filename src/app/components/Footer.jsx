const Footer = () => {
  return (
    <footer className="full-bleed cursor-pointer py-12  bg-[#601728] p-4">
      <div className="footer-content flex flex-col items-center text-center justify-center md:flex-row md:items-center md:justify-between">
        <article className="text-white flex flex-col gap-3">
          <h3 className="font-bold mb-4 text-xl">Information</h3>
          <p className="hover-underline hover-underline-footer">
            Tlf nummer: 12 23 34 45
          </p>
          <p className="hover-underline hover-underline-footer">
            Mail: couragescrochets@gmail.com
          </p>
        </article>

        <article className="text-white flex flex-col gap-3">
          <h3 className="font-bold mb-4 text-xl">Følg mig</h3>
          <p className="hover-underline hover-underline-footer">Instagram</p>
          <p className="hover-underline hover-underline-footer">TikTok</p>
          <p className="hover-underline hover-underline-footer">FaceBook</p>
        </article>

        <article className="text-white flex flex-col gap-3">
          <h3 className="font-bold mb-4 text-xl">Nyhedsbrev</h3>
          <p className="hover-underline hover-underline-footer">
            Tilmeld dig eller noget
          </p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
