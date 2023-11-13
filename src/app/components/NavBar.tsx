"use client";
import Link from "next/link";
import "@/utils/font.css";
import "../globals.css";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
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
    <section className={`top-0 z-50 navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav
        className={` lg:px-20  px-4 flex justify-between pt-4 font-EinaBold font-bold text-[18px]  `}
      >
        <div className="flex items-center  gap-10 ">
          {/* logo */}
          <Link href="/">
            <img
              src={"logo.svg"}
              alt="Logo"
              className="w-[120px] lg:w-[200px]"
            />
          </Link>

          {/* nav links */}
          <ul className="lg:flex  gap-6 pt-2 sm:mt-0 text-[#304558]  hidden ">
            <li onMouseOver={() => setShowProduct(true)}>
              <Link href="#about">Save</Link>

              {/* products hover display menu */}
              <div
                className={`absolute bottom-[-13.5em] w-[40%] bg-white px-4 py-6 shadow-md left-[16em] rounded-xl ${
                  showProduct ? "absolute" : "hidden"
                }`}
                onMouseOut={() => setShowProduct(false)}
              >
                <div className="grid grid-cols-2 justify-between gap-10 w-full">

                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/piggybank-icon.png"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-md font-semibold group-hover:text-[#0F60D6]">Piggybank</p>
                      <p className="font-extralight text-xs">Automated Savings</p>
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/safelock-icon.png"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-md font-semibold group-hover:text-[#2295F2]">Safelock</p>
                      <p className="font-extralight text-xs">Fixed Savings</p>
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/targets-icon.png"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-md font-semibold group-hover:text-[#59CC8D]">Target Savings</p>
                      <p className="font-extralight text-xs">Goal-oriented Savings</p>
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/flex-naira-icon.png"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-md font-semibold group-hover:text-[#E5489B]">Flex Naira</p>
                      <p className="font-extralight text-xs">Flexible Savings</p>
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/flex-dollar-icon.png"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-md font-semibold ">Flex Dollar</p>
                      <p className="font-extralight text-xs">Dollar Savings</p>
                    </div>
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

            <li onMouseOver={() => setShowResource(true)}>
              <Link href="#contact">Resources</Link>

              {/* Resource hover display menu */}
              <div
                className={`absolute bottom-[-13.5em] w-[40%] bg-white px-4 py-6 shadow-md left-[40%] rounded-xl ${
                  showResource ? "absolute" : "hidden"
                }`}
                onMouseOut={() => setShowResource(false)}
              >
                <div className="grid grid-cols-2 justify-between gap-10 w-full">

                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/blog.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light ">Blog</p>
                     
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/report.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light ">Reports</p>
                    
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/comics.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light ">Comics</p>
                      
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/calculator.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light">Calculator</p>
                     
                    </div>
                  </div>

 
                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/newsletter.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light ">Newsletter</p>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center hover:bg-[#F2F7F8] p-1 rounded-xl group">
                    <Image
                      src={"/asserts/ebook.svg"}
                      alt=""
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="text-sm font-EinaRegular font-light ">Ebook</p>
                    </div>
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

        {/* mobile menu button */}
        <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`w-full h-[100vh] py-10 shadow-md top-16 z-50 bg-inherit overflow-y-auto ${
          showMenu ? "fixed" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center gap-8 py-8">
          <p>Save</p>
          <p>Invest</p>
          <p>Stories</p>
          <p>FAQs</p>
          <p>Resources</p>
          <div className="flex flex-col gap-4 w-full px-4 ">
            <button
              onClick={() => {}}
              className="border border-black  py-4 w-full rounded-2xl "
            >
              Sign in
            </button>
            <button
              onClick={() => {}}
              className="border border-black  py-4 w-full rounded-2xl bg-primary text-white"
            >
              Create free account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
