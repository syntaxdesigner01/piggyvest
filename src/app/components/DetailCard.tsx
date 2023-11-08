import Image from "next/image";
import { BsArrowReturnRight } from "react-icons/bs";

export default function DetailCard({
    id,
  title,
  description,
  imagePath,
  cardName,

}: cardProps) {

// const colorId={
//     1: "#0F60D6",
//     2: "#2295F2",
//     3: "#59CC8D",
//     4: "#E5489B",
//     5: "#59CC8D",
// }

   

const colorId:Array<string>= ["#0F60D6","#2295F2","#59CC8D","#E5489B","#59CC8D",]



    
  return (
    <div className={`bg-white pt-10 px-10 rounded-3xl `}>
      <div className="text-left">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="leading-relaxed text-xl w-[60%] pt-4">{description}</p>
      </div>

      <div className=" w-full pt-10 ">
        <div className="relative bottom-[-10em] flex gap-4 ">
          <BsArrowReturnRight size="20px" />
          <span className="">{cardName}</span>
        </div>
      
      <div className="flex justify-end ">
      <Image src={`/asserts/${imagePath}`} alt="" width={250} height={250} />
      </div>
      </div>
    </div>
  );
}
