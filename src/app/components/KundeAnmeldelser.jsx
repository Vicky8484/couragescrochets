import Review from "@/app/components/Review.jsx";
import {GoStarFill} from "react-icons/go";
import {GoStar} from "react-icons/go";

const KundeAnmeldelser = () => {
  return (
    <section id="anmeldelser" className="bg-[#450a2079] py-12 full-bleed p-4 text-center flex flex-col gap-4">
      <h4>Kundeanmeldelser</h4>
      <h1 className="text-4xl text-[#601728] font-bold">Hvad andre siger</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Review
          stjerner={
            <>
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStar className="text-[#601728]" />
            </>
          }
          review="Så fint og omhyggeligt hæklet. Man kan virkelig se, at der er lagt kærlighed i hver eneste detalje."
          navn="Sofie"
        />
        <Review
          stjerner={
            <>
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
            </>
          }
          review="Jeg er så glad for mit køb! Det var nemt at bestille, og det færdige produkt blev endnu finere, end jeg havde forestillet mig."
          navn="Mette B."
        />
        <Review
          stjerner={
            <>
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
            </>
          }
          review="En virkelig sød og personlig gave. Jeg fik god hjælp til at vælge farver, og resultatet blev helt perfekt."
          navn="Freja"
        />
        <Review
          stjerner={
            <>
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
              <GoStarFill className="text-[#601728]" />
            </>
          }
          review="Flot håndværk og en hyggelig oplevelse fra start til slut. Jeg kunne godt finde på at bestille igen."
          navn="Louise"
        />
      </div>
    </section>
  );
};

export default KundeAnmeldelser;
