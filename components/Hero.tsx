const Hero = () => {
  return (
    <section className="w-full min-h-[750px] bg-secondary relative z-10 flex flex-col justify-center items-center pt-[101px] pr-[94px] pb-[102px] pl-[152px] overflow-hidden laptop:px-[20px] laptop:pb-[80px] laptop:pt-[120px]">
      <img
        src="./Bg-1.png"
        alt="bg-1"
        className="
          absolute
          left-0
          z-20
          h-full
          w-[71px]
          object-cover
          laptop:left-[50%]
          laptop:translate-x-[-50%]
          laptop:laptop-top-calc
          laptop:rotate-90"
      />
      <div className="max-w-[1194px] min-h-[547px] flex justify-center items-center laptop:flex-col laptop:gap-[80px]">
        <div className="max-w-[542px] flex-1 mobile:max-w-[323px] mobile:flex-1">
          <h1 className="text-[56px] text-blue font-medium text-left laptop:text-center mobile:text-[32px]">
            <div>Discover the</div>
            <span className="font-extrabold">Power of Positive Parenting </span>
            with
          </h1>
          <h2 className="text-[56px] font-extrabold uppercase text-orange laptop:text-center mobile:text-[32px]">
            The Art of Smart Parenting
          </h2>
        </div>
        <div className="relative z-10 max-w-[652px] flex-2 mobile:max-w-[323px] mobile:flex-1">
          <img className="object-cover w-full" src="./Vector.png" alt="bg-2" />
          <div className="w-[273px] h-[656px] absolute z-20 right-0 top-[-54px] mobile:w-[143px] mobile:h-[372px] mobile:top-[-33px]">
            <img
              src="./red.svg"
              alt="red"
              className="absolute top-0 left-[116px] mobile:w-[43px] mobile:left-[68px]"
            />
            <img
              src="./blue.svg"
              alt="blue"
              className="absolute bottom-0 right-0 mobile:w-[85px]"
            />
            <img
              src="./green.svg"
              alt="green"
              className="absolute top-[5px] left-[5px] mobile:w-[34px]"
            />
            <img
              src="./orange.svg"
              alt="orange"
              className="absolute top-[100px] left-[154px] mobile:w-[53px] mobile:left-[90px] mobile:top-[58px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
