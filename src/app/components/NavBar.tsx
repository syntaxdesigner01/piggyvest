"use client";
import Link from "next/link";
import "@/utils/font.css";
import "../globals.css";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showResource, setShowResource] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={` z-50 navbar ${isScrolled ? "scrolled" : ""}`}>
        <nav
          className={` lg:px-20  flex justify-between pt-4 font-EinaBold font-bold text-[18px]  `}
        >
          <div className="flex items-center  gap-10 ">
            {/* logo */}
            <Link href="/">
              <img src={"logo.svg"} alt="Logo" />
            </Link>

            {/* nav links */}
            <ul className="lg:flex  gap-6 pt-2 sm:mt-0 text-[#304558]  hidden ">
              <li onMouseOver={() => setShowProduct(true)}>
                <Link href="#about">Save</Link>

                {/* products hover display  */}
                <div
                  className={`absolute bottom-[-5.3em] bg-white px-10 py-2 shadow-sm rounded-sm ${
                    showProduct ? "absolute" : "hidden"
                  }`}
                  onMouseOut={() => setShowProduct(false)}
                >
                  <div className="grid grid-cols-2 justify-between gap-6">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>Safelock</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>Safelock</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>Safelock</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>Safelock</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="#services">Invest</Link>
              </li>
              <li>
                <Link href="#contact">Stories</Link>
              </li>
              <li>
                <Link href="#contact">FAQs</Link>
              </li>

              <li onMouseOver={()=>setShowResource(true)}>
                <Link href="#contact">Resources</Link>
                <div
                  className={`absolute bottom-[-5.3em] bg-white px-10 py-2 shadow-sm rounded-sm ${
                    showResource ? "absolute" : "hidden"
                  }`}
                  onMouseOut={() => setShowResource(false)}
                >
                  <div className="grid grid-cols-2 justify-between gap-6">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>text1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>text1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>text1</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <Image
                        src={"/asserts/googleplay.png"}
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p>text1</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex">
            <button
              onClick={() => {}}
              className="border border-black mx-4 py-4 px-6 rounded-2xl "
            >
              Sign in
            </button>
            <button
              onClick={() => {}}
              className="border border-black  py-4 px-6 rounded-2xl bg-primary text-white"
            >
              Create free account
            </button>
          </div>
          {/* mobile mue button */}
          <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
        </nav>
      </section>

      {/* mobile menu */}
      <div
        className={`w-full h-[50vh] shadow-md top-20 z-50 bg-white overflow-y-auto ${
          showMenu ? "fixed" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-8 py-8">
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </>
  );
}
