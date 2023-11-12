import "@/app/globals.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="px-4 lg:px-20">
      {/* hero section */}
      <div className="flex flex-col justify-between  items-center lg:flex-row">
        <div className="lg:w-[40%] pt-[0.4em] pb-20 lg:pt-[6em]">
          <h1 className="font-extrabold text-3xl text-center space-2 text-primary font-EinaBold lg:text-5xl lg:text-left ">
            The Better Way to Save & Invest
          </h1>
          <p className="text-xl font-extralight text-center text-primary pt-10 font-200 lg:text-2xl  lg:text-left">
            Piggyvest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 lg:flex-row">
            <button className="flex justify-between items-center gap-3 bg-primary text-white py-3 px-20 lg:px-6 rounded-lg font-bold font-EinaRegular ">
              <Image
                src={"/asserts/applelogo.png"}
                alt=""
                width={20}
                height={20}
              />
              <span>Get on iPhone</span>
            </button>

            <button className="flex  justify-between items-center gap-3 bg-primary text-white py-3 px-20 lg:px-6 rounded-lg font-bold font-EinaRegular  ">
              <Image
                src={"/asserts/googleplay.png"}
                alt=""
                width={20}
                height={20}
              />
              <span>Get on Android</span>
            </button>
          </div>
        </div>

        {/*  */}

        <div className="relative  px-4">
          <div>
            <Image
              src="/asserts/woman.avif"
              alt="woman"
              width={500}
              height={520}
            />
          </div>

          <div className="absolute top-[5em] left-[-1em] lg:left-[-5em] lg:top-[8.5em] ">
            <img
              src="/asserts/safelockcard.avif"
              alt=""
             
              className="w-[40%] lg:w-[40%]"
            />
          </div>

          <div className="absolute top-[14em]   left-[-1em]  lg:top-[20em] lg:left-[-5em] ">
            <img
              src="/asserts/flexnairacard.avif"
              alt=""
             
              className="w-[30%] lg:w-[40%]"
            />
          </div>

          <div className="absolute top-[6em] right-[-27em] lg:right-[-25em] ">
            <img
              src="/asserts/targetsavingscard.avif"
              alt=""
             
              className="w-[20%] lg:w-[30%]"
            />
          </div>

          <div className="absolute top-[13em]  right-[-24em] lg:right-[-25em] lg:top-[20em]  ">
            <img
              src="/asserts/investifycard.avif"
              alt=""
             
              className="w-[30%] lg:w-[40%]"
            />
          </div>

          <div className="absolute bottom-[-1em] left-[8em] lg:left-[10em] ">
            <img
              src="/asserts/piggybankcard.avif"
              alt=""
             
              className="w-[35%] lg:w-[40%]"
            />
          </div>
        </div>
      </div>
      {/* hero section end */}
    </section>
  );
}
