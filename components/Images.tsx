const Images = () => {
  return (
    <section className="w-full bg-main h-[511px] relative laptop:h-[690px]">
      <img
        src="/image1.png"
        alt="image1"
        className="absolute bottom-0 left-[80px] w-[39vw]  laptop:top-[30px] laptop:left-[50%] laptop:translate-x-[-50%] mobile:w-[306px]
        "
      />
      <img
        src="/image2.png"
        alt="image2"
        className="absolute right-[465px] top-[20px] w-[28vw] laptop:top-[240px] laptop:left-[20px] mobile:w-[220px]"
      />
      <img
        src="/image3.png"
        alt="image3"
        className="absolute right-[276px] bottom-[12px] w-[29vw] laptop:top-[520px] laptop:left-[35px] mobile:w-[235px]"
      />
      <img
        src="/image4.png"
        alt="image4"
        className="absolute right-[80px] top-[20px] w-[21vw] laptop:top-[350px] laptop:right-[20px] mobile:w-[182px]"
      />
    </section>
  );
};

export default Images;
