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
    <div className="flex items-center rounded-3xl bg-[#FFFFFF61] sm:h-1/3 sm:w-4/5 lg:h-1/3 lg:w-3/4">
      <div className="flex flex-col sm:h-full sm:w-4/5 sm:items-center sm:justify-start sm:pt-7 lg:h-full lg:w-1/5 lg:items-center lg:justify-center lg:pt-0">
        <div className="text-quant-blue-100 font-questrial sm:text-left sm:text-2xl lg:text-center lg:text-lg">
          {props.day}
        </div>
        <div className="text-quant-white font-questrial sm:text-left sm:text-6xl sm:font-bold lg:text-center lg:text-7xl">
          {props.date}
        </div>
      </div>
      <div className="flex flex-col sm:h-full lg:h-full lg:w-4/5">
        <div className="text-quant-white justify-start pt-10 font-questrial font-medium sm:text-3xl lg:pl-10 lg:text-4xl">
          {props.title}
        </div>
        <div className="lg:h-2/8 flex flex-row gap-20 lg:w-1/2 lg:pl-8">
          <div className="h-1/8 text-quant-blue-100 flex w-1/5 flex-row gap-2 pl-1 font-roboto text-lg">
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={24}
              height={24}
              className="invert"
            />
            {props.location}
          </div>
          <div className="h-7/8 text-quant-blue-100 flex w-1/2 flex-row gap-2 pl-10 font-roboto text-lg">
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
        <div className="sm:w-5/7 text-quant-gray font-roboto text-lg sm:h-full sm:pt-3 sm:text-base lg:h-full lg:w-5/6 lg:pl-10 lg:pt-2">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
