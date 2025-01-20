const Header = (props: { title: string }) => {
  return (
    <header
      className="w-full bg-gradient-to-r from-blue-900 to-blue-800 p-5"
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Left Line */}
        <img
          src="/header/left-line.svg"
          alt=""
          aria-hidden="true"
          className="h-[20px] w-[355px]"
        />

        {/* Title */}
        <h1 className="text-white text-center text-[45px] font-bold font-hanken w-[450px] h-[60px]">
          {props.title}
        </h1>

        {/* Right Line */}
        <img
          src="/header/right-line.svg"
          alt=""
          aria-hidden="true"
          className="h-[20px] w-[355px]"
        />
      </div>
    </header>
  );
};

export default Header;
