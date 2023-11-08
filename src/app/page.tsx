import "../app/globals.css";
import "@/utils/font.css";
import { BiSolidLock } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import HeroSection from "./components/HeroSection";
import DetailCard from "./components/DetailCard";

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

      <section className="pt-[10em] flex justify-between mb-10">
        <div className="text-center flex flex-row justify-center pt-20">
          <div className="w-[65%] text-center ">
            <h1 className="text-5xl font-bold leading-snug  ">
              5 ways to build your savings
            </h1>
            <div className="w-full flex justify-center items-center">
              <p className="text-2xl w-[90%]   text-center py-4">
                Earn 5%-15% when you save with any of these PiggyVest plans.
              </p>
            </div>
          </div>
        </div>

        <DetailCard
          title="Automated Savings"
          description="Build a dedicated savings faster on your terms, automatically or manually."
          imagePath="piggybankImage.avif"
          cardName="Piggybank"
          id={0}
        />
      </section>

      <section className="pt-[2em] flex justify-between items-center mb-10 gap-8">
        <DetailCard
          title="Fixed Savings"
          description="Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit."
          imagePath="fixedsavings.avif"
          cardName="safelock"
          id={1}
        />

        <DetailCard
          title="Goal-oriented Savings "
          description="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
          imagePath="goalsavings.avif"
          cardName="Target Savings"
          id={2}
        />
      </section>

      <section className="pt-[2em] flex justify-between items-center mb-10 gap-8">
        <DetailCard
          title="Flex Naira"
          description="Save, transfer, manage, organise, and withdraw your money at any time.."
          imagePath="flexnaira.avif"
          cardName="Flex Naira"
          id={3}
        />

        <DetailCard
          title="Flex Dollar "
          description="Save and grow your money in foreign currencies such as Dollars."
          imagePath="flexdollar.avif"
          cardName="Flex Dollar"
          id={4}
        />
      </section>
    </main>
  );
}

export default Home;
