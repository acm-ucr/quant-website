import Description from "@/components/home/description";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-sky-950">
      <Description
        title="What is Quant Club?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit. Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida convallis. Sed nec risus vel purus varius eleifend. Nunc id molestie nisl. Sed ac ante quis nisl tincidunt feugiat. Maecenas pharetra libero ut nunc vulputate, in mattis velit ultricies. Maecenas tincidunt magna a nisl bibendum, nec auctor nunc iaculis. Vivamus sed eleifend purus. Ut sodales erat non diam accumsan, sit amet hendrerit justo consequat. "
        image="/assets/chartimage.webp"
      />
    </div>
  );
};

export default Home;
