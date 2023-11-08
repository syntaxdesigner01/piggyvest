import "../app/globals.css";
import "@/utils/font.css";
import { BiSolidLock } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <main className="pt-[14em] px-20 relative">
      <HeroSection />

      {/*  */}
      <div className="flex items-center gap-10 w-[70%] pt-[10em] ">
        <div className="bg-white  p-6 rounded-[30px]">
          <BiSolidLock size="60px" />
        </div>

        <div>
          <h1 className="font-[Eina-bold] text-primary font-bold text-3xl">
            Your security is our priority
          </h1>
          <p className="py-6 leading-relaxed">
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </p>

          <p className="flex gap-4 font-bold">
            <BsArrowReturnRight size="20px" />
            <span className="text-primary font-bold">
              More on our security measures
            </span>
          </p>
        </div>
      </div>
      {/*  */}


      
    </main>
  );
}

export default Home;
