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
    <div className="flex h-1/4 w-3/4 items-center rounded-3xl bg-[#FFFFFF61]">
      <div className="flex h-full w-1/5 flex-col items-center justify-center">
        <div className="text-center font-questrial text-xl text-[#A7D6FD]">
          {props.day}
        </div>
        <div className="text-center font-questrial text-7xl text-[#C3D0DF]">
          {props.date}
        </div>
      </div>
      <div className="flex h-full w-4/5 flex-col">
        <div className="justify-start pl-10 pt-10 font-questrial text-4xl font-medium text-[#FFFFFF]">
          {props.title}
        </div>
        <div className="h-2/8 flex w-1/2 flex-row gap-20 pl-8">
          <div className="h-1/8 flex w-1/5 flex-row gap-2 pl-1 font-roboto text-lg text-[#A7D6FD]">
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={24}
              height={24}
            />
            {props.location}
          </div>
          <div className="h-7/8 flex w-1/2 flex-row gap-2 pl-10 font-roboto text-lg text-[#A7D6FD]">
            <Image src={timeIcon} alt="Time Icon" width={24} height={24} />
            {props.time}
          </div>
        </div>
        <div className="h-full w-5/6 pl-10 pt-2 font-roboto text-lg text-[#BDBDBD]">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
