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
        <div className="justify-start pl-[30px] pt-[45px] font-questrial text-4xl font-medium text-[#FFFFFF]">
          {props.title}
        </div>
        <div className="flex h-2/8 w-1/2 flex-row gap-20 pl-[30px]">
          <div className="h-1/8 w-1/5 pl-[40px] font-roboto text-lg text-[#A7D6FD]">
            {props.location}
          </div>
          <div className="h-7/8 w-1/2 pl-[40px] font-roboto text-lg text-[#A7D6FD]">
            {props.time}
          </div>
        </div>
        <div className="h-full w-5/6 pl-[30px] font-roboto text-lg text-[#BDBDBD]">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
