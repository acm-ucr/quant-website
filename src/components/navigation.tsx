import Logo from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import NavItems from "@/data/navigation";

interface NavItems {
  name: string;
  link: string;
}

const Navigation = () => {
  return (
    <div className="mx-5 my-5 flex h-20 items-center justify-between px-12">
      <div className="flex w-[12%] flex-row bg-gradient-to-l from-[#272592] via-[#272592] to-[#100F48]">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className="w-full" />
        </Link>
        <div className="flex items-center pl-2 font-istok-web text-xl font-bold text-white">
          Quant Club at UCR
        </div>
      </div>
      <div className="flex w-1/3 flex-row items-center justify-around font-jost text-xl font-medium text-white">
        {NavItems.map((item, i) => {
          return (
            <Link key={i} href={item.link} className="hover:underline">
              {item.name}
            </Link>
          );
        })}
      </div>
      {/* change join link */}
      <Link
        href={"https://discord.gg/bzCbpzZRtH"}
        className={
          "bg-aviatr-blue-100 flex h-14 w-[12%] items-center justify-center rounded-3xl bg-[#C6C6E4] font-hanken text-lg font-semibold transition-transform duration-300 hover:scale-125 hover:underline"
        }
      >
        JOIN US
      </Link>
    </div>
  );
};

export default Navigation;
