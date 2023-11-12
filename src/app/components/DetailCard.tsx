"use client";
import Image from "next/image";
import { BsArrowReturnRight } from "react-icons/bs";
import "@/app/globals.css";
import { useEffect, useState } from "react";

export default function DetailCard({
  id,
  title,
  description,
  imagePath,
  cardName,
}: cardProps) {
  const colorId: Array<string> = [
    "#0F60D6",
    "#2295F2",
    "#59CC8D",
    "#E5489B",
    "#59CC8D",
  ];

  const [color, setColor] = useState({
    color: colorId[id],
    backgroundColor: "#fff",
    normal_color: "#000",
  });

  
// useEffect(()=>{
//   let number = 0
//   document.getElementById(`card${number}`)?.addEventListener('click',()=>{
//     setInterval(()=>{
//       setColor({
//         normal_color: "#fff",
//         backgroundColor: colorId[id],
//         color: "#fff",
//       })

      

//       if(number === 4){
//         number = 0
//       }else{
//         number++
//       }
      
//     },2000)
//   }

//   )
// },[])


  return (
    <div
    id={`card${id}`}
      className={`container pt-10 px-10 rounded-3xl w-[50%] `}
      style={color}
      onMouseOver={() =>
        setColor({
          normal_color: "#fff",
          backgroundColor: colorId[id],
          color: "#fff",
        })
      }
      onMouseOut={() =>
        setColor({
          normal_color: "#000",
          color: colorId[id],
          backgroundColor: "#fff",
        })
      }
    >
      <div className="text-left">
        <h2 className={`font-bold text-4xl `} style={{ color: color.color }}>
          {title}
        </h2>
        <p
          className="leading-relaxed text-xl w-[60%] pt-4"
          style={{ color: color.normal_color }}
        >
          {description}
        </p>
      </div>

      <div className=" w-full pt-4 ">
        <div
          className="relative bottom-[-10em] flex gap-4 "
          style={{ color: color.normal_color }}
        >
          <BsArrowReturnRight size="20px" />
          <span className="">{cardName}</span>
        </div>

        <div className="flex justify-end ">
          <Image
            src={`/asserts/${imagePath}`}
            alt=""
            width={250}
            height={250}
            className="image"
          />
        </div>
      </div>
    </div>
  );
}
