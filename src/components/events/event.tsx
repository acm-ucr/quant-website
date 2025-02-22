import Image from "next/image";
import locationIcon from "@/public/icons/LocationIconBlue.svg";
import TimeIcon from "@/public/icons/TimeIcon.svg";
import TimeIconMobile from "@/public/icons/TimeIconMobile.svg";

const EventCard = (props: {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
}) => {
  return (
    <div className="flex w-11/12 items-center gap-6 rounded-3xl bg-[#FFFFFF61] p-4 sm:h-1/3 sm:w-4/5 sm:pb-12 lg:h-1/3 lg:w-3/4">
      <div className="mb-20 hidden sm:mb-0 sm:flex sm:h-full sm:w-4/5 sm:flex-col sm:items-center sm:justify-start sm:pt-7 lg:h-full lg:w-1/5 lg:items-center lg:justify-center lg:pt-3">
        <div className="text-center font-questrial text-base uppercase text-[#DDF0FE] sm:text-left sm:text-2xl sm:text-quant-blue-100 lg:text-center lg:text-xl">
          {props.day}
        </div>
        <div className="-mt-2 font-questrial text-4xl font-bold text-quant-white sm:-mt-0 sm:text-left sm:text-6xl sm:font-normal lg:text-center lg:text-7xl">
          {props.date}
        </div>
      </div>
      <div className="flex flex-col sm:h-full lg:h-full lg:w-4/5">
        <div className="flex gap-5">
          <div className="sm:hidden">
            <div className="text-center font-questrial text-base uppercase text-[#DDF0FE]">
              {props.day}
            </div>
            <div className="-mt-2 font-questrial text-4xl font-bold text-[#E8EDF3]">
              {props.date}
            </div>
          </div>
          <div className="sm:w-2/3">
            <div className="justify-start pb-1 font-questrial text-xl font-medium text-quant-white sm:pb-0 sm:pt-10 sm:text-3xl lg:pl-10 lg:text-4xl">
              {props.title}
            </div>
            <div className="lg:h-2/8 mt-1 flex flex-row gap-3 sm:mt-0 sm:gap-20 lg:w-1/2 lg:pl-8">
              <div className="h-1/8 flex w-1/5 flex-row gap-2 pl-1 font-roboto text-quant-blue-100 sm:text-lg">
                <Image
                  src={locationIcon}
                  alt="Location Icon"
                  width={24}
                  height={24}
                  className="h-3/5 sm:mt-1 sm:h-4/5"
                />
                <div className="-translate-y-[1px] text-xs sm:-translate-y-0 sm:text-lg">
                  {props.location}
                </div>
              </div>
              <div className="h-7/8 flex w-1/2 flex-row gap-2 pl-10 font-roboto text-sm text-quant-blue-100 sm:translate-x-12 sm:text-lg">
                <Image
                  src={TimeIconMobile}
                  alt="Time Icon"
                  width={24}
                  height={24}
                  className="h-3/5 -translate-x-4 sm:hidden sm:-translate-x-0"
                />
                <Image
                  src={TimeIcon}
                  alt="Time Icon"
                  width={24}
                  height={24}
                  className="hidden sm:block"
                />
                <div className="-translate-x-5 -translate-y-[1px] text-xs sm:-translate-x-0 sm:-translate-y-0 sm:text-lg">
                  {props.time}
                </div>
              </div>
            </div>
            <div className="pt-2 text-xs text-[#BDBDBD] sm:hidden">
              {props.description}
            </div>
          </div>
        </div>
        <div className="sm:w-5/7 hidden pt-3 font-roboto text-xs text-quant-gray sm:flex sm:h-full sm:pt-3 sm:text-lg lg:h-full lg:w-5/6 lg:pl-10 lg:pt-2">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
