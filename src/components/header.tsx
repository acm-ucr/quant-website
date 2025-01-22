const Header = (props: { title: string }) => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-900 to-blue-800 py-5">
      <div className="mx-auto flex w-3/4 items-center justify-center gap-20">
        <img
          src="/header/left-line.svg"
          alt=""
          aria-hidden="true"
          className="flex h-full"
        />

        <h1 className="text-center font-hanken text-[45px] font-bold text-white">
          {props.title}
        </h1>

        <img
          src="/header/right-line.svg"
          alt=""
          aria-hidden="true"
          className="flex h-full"
        />
      </div>
    </header>
  );
};

export default Header;
