"use client";

import Image from "next/image";
import LocationIcon from "@/public/icons/LocationIconBlue.svg";
import TimeIcon from "@/public/icons/timeIcon.svg";
import TimeIconMobile from "@/public/icons/TimeIconMobile.svg";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type EventCardProps = {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
  isInitiallyExpanded: boolean;
};
const EventCard = ({
  day,
  date,
  title,
  location,
  time,
  description,
  isInitiallyExpanded,
}: EventCardProps) => {
  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);
  return (
    <div className="flex w-11/12 items-center gap-6 rounded-3xl bg-[#FFFFFF61] p-4 sm:h-1/3 sm:w-4/5 sm:pb-12 lg:h-1/3 lg:w-3/4">
      <div className="mb-20 hidden sm:mb-0 sm:flex sm:h-full sm:w-1/5 sm:flex-col sm:items-center sm:justify-start sm:pt-7 lg:h-full lg:w-1/5 lg:items-center lg:justify-center lg:pt-3">
        <div className="text-center font-questrial text-base uppercase text-[#DDF0FE] sm:text-left sm:text-2xl sm:text-quant-blue-100 lg:text-center lg:text-xl">
          {day}
        </div>
        <div className="-mt-2 font-questrial text-4xl font-bold text-quant-white sm:-mt-0 sm:text-left sm:text-6xl sm:font-normal lg:text-center lg:text-7xl">
          {date}
        </div>
      </div>
      <div className="flex w-full flex-col sm:h-full lg:h-full">
        <div className="flex gap-5">
          <div className="sm:hidden">
            <div className="text-center font-questrial text-base uppercase text-[#DDF0FE]">
              {day}
            </div>
            <div className="-mt-2 font-questrial text-4xl font-bold text-[#E8EDF3]">
              {date}
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <div className="mb-1 justify-start font-questrial text-xl font-bold text-quant-white sm:pb-0 sm:pt-10 sm:text-2xl lg:text-3xl">
                {title}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-full p-2 text-quant-blue-100 transition hover:bg-white/20 sm:hidden"
              >
                {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
              </button>
            </div>
            <div className="lg:h-2/8 mt-1 flex w-fit flex-row gap-3 sm:mt-0 sm:gap-5">
              <div className="flex w-fit flex-row items-center gap-2 font-roboto text-quant-blue-100">
                <Image
                  src={LocationIcon}
                  alt="Location Icon"
                  className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                />
                <div className="text-base sm:text-lg">{location}</div>
              </div>
              <div className="h-7/8 flex w-fit flex-row items-center gap-2 font-roboto">
                <Image
                  src={TimeIconMobile}
                  alt="Time Icon"
                  className="h-5 w-5 sm:hidden"
                />
                <Image
                  src={TimeIcon}
                  alt="Time Icon"
                  className="hidden sm:block sm:h-6 sm:w-6 md:h-7 md:w-7"
                />

                <div className="text-base text-quant-blue-100 sm:text-lg">
                  {time}
                </div>
              </div>
            </div>
            {isExpanded && (
              <div className="mt-2 text-xs text-[#BDBDBD] transition-opacity duration-300 sm:hidden">
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="sm:w-5/7 hidden pt-3 font-roboto text-xs text-quant-gray sm:flex sm:h-full sm:pt-3 sm:text-base lg:h-full lg:w-5/6 lg:pt-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
