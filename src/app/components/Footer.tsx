import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full ">
      <section className="px-20 flex justify-between pt-20">
        {/* logo */}
        <div>
         <div>
         <Image src={"/asserts/logo2.svg"} alt="" width={150} height={150} />
         </div>
         <div className="py-2 flex justify-center">
         <Image src={"/asserts/ndprAuditjpeg.png"} alt="" width={100} height={100} />
         </div>
        </div>

        {/* nav links */}
        <div className="flex justify-between gap-20 font-light ">
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
        <div className="">
          <div className="flex justify-end items-center gap-4">
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

          <div className="text-right font-light pt-4 text-sm">
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

        <div className="px-20 py-10">
        <hr className="border-t-2 text-black"  />

        <div className=" font-extralight text-primary_text w-full py-10">
            <p className="w-[50%] text-[10px]">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 7 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>

            <p className="w-[30%] text-[10px] py-6">PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>

            <p className="text-[10px] text-blue-600">2016 - 2023 PiggyTech Global Limited - RC 1405222</p>
        </div>
        </div>
    </footer>
  );
}
