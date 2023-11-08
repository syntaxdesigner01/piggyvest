import "@/app/globals.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" px-20">
      {/* hero section */}
      <div className="flex  justify-between">
        <div className="w-[40%] pt-[6em]">
          <h1 className="font-extrabold text-5xl space-2 text-primary font-EinaBold  ">
            The Better Way to Save & Invest
          </h1>
          <p className="text-2xl font-extralight text-primary pt-10 font-200">
            Piggyvest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>

          <div className="mt-8 flex  items-center gap-4">
            <button className="flex justify-between items-center gap-3 bg-primary text-white py-3 px-6 rounded-lg font-bold font-EinaRegular ">
              <Image
                src={"/asserts/applelogo.png"}
                alt=""
                width={20}
                height={20}
              />
              <span>Get on iPhone</span>
            </button>

            <button className="flex justify-between items-center gap-3 bg-primary text-white py-3 px-6 rounded-lg font-bold font-EinaRegular  ">
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

        <div className="relative ">
          <div>
            <Image
              src="/asserts/woman.avif"
              alt="woman"
              width={500}
              height={520}
            />
          </div>

          <div className="absolute top-[8.5em] left-[-5em] ">
            <Image
              src="/asserts/safelockcard.avif"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>

          <div className="absolute top-[20em] left-[-5em] ">
            <Image
              src="/asserts/flexnairacard.avif"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>

          <div className="absolute top-[6em] right-[-2em] ">
            <Image
              src="/asserts/targetsavingscard.avif"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>

          <div className="absolute top-[20em] right-[-2em] ">
            <Image
              src="/asserts/investifycard.avif"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>

          <div className="absolute bottom-[-1.5em] left-[10em] ">
            <Image
              src="/asserts/piggybankcard.avif"
              alt=""
              width={200}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
      {/* hero section end */}
    </section>
  );
}
