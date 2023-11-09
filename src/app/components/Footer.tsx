import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full ">
      <section className="px-20 flex justify-between pt-20">
        {/* logo */}
        <div>
          <Image src={"/asserts/logo2.svg"} alt="" width={150} height={150} />
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
        <hr color="black"  />
        </div>
    </footer>
  );
}
