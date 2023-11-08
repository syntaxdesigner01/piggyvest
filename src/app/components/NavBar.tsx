"use client";
import Link from "next/link";
import "@/utils/font.css";
import "../globals.css";

export default function NavBar() {
 

  return (

     <section className=" fixed w-full  py-4">
       <nav
      className={` px-20  flex justify-between pt-4 font-EinaBold font-bold text-[18px]  `}
    >
      <div className="flex items-center  gap-10 ">
        {/* logo */}
        <Link href="/">
          <img src={"logo.svg"} alt="Logo" />
        </Link>

        {/* nav links */}
        <ul className="flex  gap-6 pt-2 sm:mt-0 text-[#304558]   ">
          <li>
            <Link href="#about">Save</Link>
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
          <li>
            <Link href="#contact">Resources</Link>
          </li>
        </ul>
      </div>

      <div>
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
    </nav>
     </section>

  );
}
