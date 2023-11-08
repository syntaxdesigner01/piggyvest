import Image from "next/image";
import { BsArrowReturnRight } from "react-icons/bs";

export default function DetailCard({
  title,
  description,
  imagePath,
  cardName,
}: cardProps) {
  return (
    <div className="bg-white pt-20 px-10 rounded-3xl ">
      <div className="text-left">
        <h2 className="font-bold text-4xl">{title}</h2>
        <p className="leading-relaxed text-xl w-[60%] pt-4">{description}</p>
      </div>

      <div className=" w-full pt-10 ">
        <div className="absolute bottom-10 flex gap-4 ">
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
