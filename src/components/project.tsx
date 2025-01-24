const Project = (props: {
  image_src: string;
  image_alt: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="w-7/8 flex h-auto flex-col text-lg">
      <div className="w-7/8 flex h-auto flex-wrap items-center justify-center gap-24 p-8 text-white">
        <div className="flex h-44 w-44 items-center justify-center rounded-full bg-[#94C7ED]">
          <img src={props.image_src} alt={props.image_alt} />
        </div>
        <div className="flex flex-col">
          <div className="h-20 w-60 font-questrial text-4xl font-bold">
            {props.name}
          </div>
          <div className="h-44 max-w-5xl font-roboto text-lg">
            {props.description}
          </div>
        </div>
      </div>
      <div className="w-7/8 border-2"></div>
    </div>
  );
};

export default Project;
