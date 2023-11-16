import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full ">
      <section className="px-10 flex justify-between lg:pt-20 flex-col lg:flex-row lg:px-20">
        {/* logo */}
        <div className="flex flex-col justify-start items-start mb-10">
         <div>
         <Image src={"/asserts/logo2.svg"} alt="" width={150} height={150} />
         </div>
         <div className="py-2 flex justify-center">
         <Image src={"/asserts/ndprAuditjpeg.png"} alt="" width={100} height={100} />
         </div>
        </div>

        {/* nav links */}
        <div className="grid grid-cols-2 gap-10 font-light lg:justify-between lg:grid-cols-3 lg:gap-20 ">
          {/* liink1  */}
          <div>
            <h1 className="font-bold">Products</h1>
            <ul className="flex flex-col space-y-2 pt-2 text-sm">
              <li>Piggybank</li>
              <li>Invest</li>
              <li>Safelock</li>
              <li>Target Savings</li>
              <li>Flex Naira</li>
              <li>Flex Dollar</li>
            </ul>
          </div>

          {/* liink2  */}
          <div>
            <h1 className="font-bold">Company</h1>
            <ul className="flex flex-col space-y-2 pt-2 text-sm">
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* liink3 */}
          <div>
            <h1 className="font-bold">Legal</h1>
            <ul className="flex flex-col space-y-2 pt-2 text-sm">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Security</li>
            </ul>
          </div>
        </div>

        {/* address */}
        <div className="pt-10 ">
          <div className="flex  gap-4 items-center justify-start lg:justify-end ">
            <div>
              <Image
                src={"asserts/facebook.svg"}
                alt=""
                width={10}
                height={10}
              />
            </div>
            <div>
              <Image
                src={"asserts/instagram.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
            <div>
              <Image
                src={"asserts/twitter.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
            <div>
              <Image
                src={"asserts/twitter.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
            <div>
              <Image
                src={"asserts/youtube.svg"}
                alt=""
                width={15}
                height={15}
              />
            </div>
          </div>

          <div className="text-left font-light pt-4 text-sm lg:text-right">
            <p>Tesmot house, Abdulrahman Okene close,</p>
            <p>Victoria Island, Lagos, Nigeria.</p>

            <div className="py-4">
              <p>contact@piggyvest.com</p>
              <p>+234 700 933 933 933</p>
            </div>
          </div>
        </div>



      </section>
        {/* bottom part footer */}

        <div className="px-4 lg:px-20 py-10">
        <hr className="border-t-2 text-black"  />

        <div className=" font-extralight text-primary_text w-full py-10">
            <p className="w-full lg:w-[50%] text-[10px]">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>

            <p className="w-full lg:w-[30%] text-[10px] py-6">PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>

            <p className="text-[10px] text-blue-600">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
        </div>
        </div>
    </footer>
  );
}
