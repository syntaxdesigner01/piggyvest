import "../app/globals.css";
import "@/utils/font.css";
import { BiSolidLock } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import HeroSection from "./components/HeroSection";
import DetailCard from "./components/DetailCard";
import Image from "next/image";

function Home() {
  return (
    <main className="pt-[14em] relative">
      <HeroSection />

      {/*  */}
      <div className="flex flex-col  items-center px-16   pt-[10em]  md:gap-8 lg:gap-10 lg:w-[70%]  md:flex-row lg:px-20 ">
        <div className="bg-white  p-6 rounded-[30px]">
          <BiSolidLock size="60px" />
        </div>

        <div>
          <h1 className="font-[Eina-bold] text-primary font-bold text-2xl text-center md:text-left md:text-3xl ">
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

      {/* offered service card  */}
      <div className=" px-4 md:px-20 pt-[10em] ">
        <section className="flex flex-col justify-between mt-6 lg:mb-10 lg:flex-row">
          <div className="text-center flex flex-row justify-center pt-20">
            <div className="lg:w-[65%] text-center ">
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

        <section className="flex-col pt-[2em] flex justify-between items-center mt-6 lg:mb-10 gap-8 lg:flex-row">
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

        <section className="flex-col pt-[2em] flex justify-between items-center mt-6 lg:mb-10 gap-8 lg:flex-row">
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
      </div>
      {/* offered service card end */}

      {/* Diverse ways to Invest */}
      <div className="py-[9em] mt-20 mb-20 bg-white ">
        <div className="text-center ">
          <h1 className="font-bold text-5xl">Diverse ways to Invest</h1>
          <p className="py-4 text-2xl text-primary_text">
            Grow your money and invest for your future confidently.
          </p>
        </div>

        <div className="lg:px-20  mt-10">
          <section className=" bg-[#7913E5] rounded-[40px] pt-10 flex flex-col justify-between px-4 lg:flex-row  lg:px-10">
            <aside className="text-white">
              <h1 className="font-bold text-4xl pt-4">
                Earn Up to 25% returns
              </h1>
              <p className="py-10 w-full lg:w-[40%] leading-normal text-xl text-left font-light">
                Invest securely and confidently on the go. Grow your money
                confidently by investing in pre-vetted investment
                opportunities.zz
              </p>

              <div className=" w-full pt-10 ">
                <div className="relative bottom-[-3em] flex gap-4 ">
                  <BsArrowReturnRight size="20px" />
                  <span className="">Learn about Investments</span>
                </div>
              </div>
            </aside>

            <aside>
              <Image
                src={"/asserts/iphoneInvest.avif"}
                alt="iphoneInvest.avif"
                width={700}
                height={500}
              />
            </aside>
          </section>
        </div>
      </div>
      {/* Diverse ways to Invest end */}

      {/* Meet Our Saver of the Month */}
      <div className="py-[9em]mt-10 lg:mt-20 mb-20">
        <div className="text-center ">
          <h1 className="font-bold text-3xl lg:text-5xl">Meet Our Saver of the Month</h1>
          <div className="w-full flex justify-center">
            <p className="py-4 text-xl lg:text-2xl w-full lg:w-[60%] text-primary_text">
              Every month, we shine a spotlight on one saver, asking them about
              their savings culture and how piggyvest has helped them.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-20 border-1">
          <iframe
    
           
            src="https://www.youtube.com/embed/8XzCzC9pFGM?si=ORP2XB5gzo36RrhY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl w-[99%] h-[200px]  md:w-[90%] lg:w-[50%] lg:h-[400px]  "
          ></iframe>
        </div>
      </div>
      {/* Meet Our Saver of the Month end */}

      {/* success story */}
      <div className="px-4 w-full flex flex-col justify-center  gap-10 items-center font-EinaBold  lg:flex-row lg:px-20 ">
        <aside className="">
          <Image
            src={"/asserts/successStory.png"}
            alt=""
            height={400}
            width={400}
          />
          {/* apple-logo-black.svg */}
        </aside>
        <aside className="">
          <h1 className="font-bold w-full lg:w-[80%] text-3xl text-center lg:text-left">
            Join 4+ million people who save and invest with us
          </h1>

          <div className="mt-8 flex justify-center items-center gap-2 lg:gap-4 lg:justify-start ">
            <button className="flex lg:justify-between items-center border shadow-sm text-primary_text text-sm py-2 gap-1 lg:gap-3  lg:py-3 px-2 lg:px-6 rounded-lg font-bold font-EinaRegular ">
              <Image
                src={"/asserts/apple-logo-black.svg"}
                alt=""
                width={20}
                height={20}
              />
              <span>Get on iPhone</span>
            </button>

            <button className="flex lg:justify-between  items-center border shadow-sm text-primary_text text-sm py-2 gap-1 lg:gap-3  lg:py-3 px-2 lg:px-6 rounded-lg font-bold font-EinaRegular ">
              <Image
                src={"/asserts/googleplay.png"}
                alt=""
                width={20}
                height={20}
              />
              <span>Get on Android</span>
            </button>
          </div>
        </aside>
      </div>
      {/* success story end */}

      {/* featured in section */}
      <div className="px-2 lg:px-20 pt-[9em] mb-20  lg:mb-40">
        <h1 className=" text-center font-bold text-3xl font-EinaRegular">
          As featured in
        </h1>

        {/* comapny */}
        <div className="flex gap-1 lg:justify-between w-full items-center">

          <div>
            <Image src={"/asserts/brand3.png"} alt="" width={150} height={100}/>
          </div>

          <div>
            <Image src={"/asserts/brand2.png"} alt="" width={150} height={100}/>
          </div>

          <div>
            <Image src={"/asserts/brand1.png"} alt="" width={150} height={100}/>
          </div>

          <div>
            <Image src={"/asserts/brand4.svg"} alt="" width={100} height={100}/>
          </div>

          <div>
            <Image src={"/asserts/brand5.svg"} alt="" width={150} height={100}/>
          </div>

          <div>
            <Image src={"/asserts/brand6.svg"} alt="" width={70} height={70}/>
          </div>
        </div>
      </div>

      {/* featured in section  end*/}
    </main>
  );
}

export default Home;
