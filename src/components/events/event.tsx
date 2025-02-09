import Image from "next/image";
import locationIcon from "@/public/icons/locationIcon.svg";
import timeIcon from "@/public/icons/timeIcon.svg";

const EventCard = (props: {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
}) => {
  return (
    <div className="flex sm:h-1/3 sm:w-4/5 lg:h-1/3 lg:w-3/4 items-center rounded-3xl bg-[#FFFFFF61]">
      <div className="flex sm:h-full sm:w-4/5 lg:h-full lg:w-1/5 flex-col sm:justify-start sm:items-center lg:items-center lg:justify-center sm:pt-7 lg:pt-0">
        <div className="sm:text-left lg:text-center font-questrial sm:text-2xl lg:text-lg text-quant-blue-100">
          {props.day} 
        </div>
        <div className="sm:text-left lg:text-center font-questrial sm:text-6xl sm:font-bold lg:text-7xl text-quant-white">
          {props.date}
        </div>
      </div>
      <div className="flex sm:h-full lg:h-full lg:w-4/5 flex-col">
        <div className="justify-start lg:pl-10 pt-10 font-questrial sm:text-3xl lg:text-4xl font-medium text-quant-white">
          {props.title}
        </div>
        <div className="lg:h-2/8 flex lg:w-1/2 flex-row gap-20 lg:pl-8">
          <div className="h-1/8 flex w-1/5 flex-row gap-2 pl-1 font-roboto text-lg text-quant-blue-100">
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={24}
              height={24}
              className="invert"
            />
            {props.location}
          </div>
          <div className="h-7/8 flex w-1/2 flex-row gap-2 pl-10 font-roboto text-lg text-quant-blue-100">
            <Image
              src={timeIcon}
              alt="Time Icon"
              width={24}
              height={24}
              className="invert"
            />
            {props.time}
          </div>
        </div>
        <div className="sm:h-full sm:pt-3 sm:text-base sm:w-5/7 lg:h-full lg:w-5/6 lg:pl-10 lg:pt-2 font-roboto text-lg text-quant-gray">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
