const Header = (props: { title: string }) => {
  return (
    <div className="w-full py-5">
      <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-4">
        <div className="relative inline-block text-center font-hanken text-5xl font-bold text-white">
          {props.title}
          <div className="mt-2 h-1 w-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
