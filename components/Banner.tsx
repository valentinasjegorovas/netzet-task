const Banner = () => {
  return (
    <div className="w-full min-h-[258px] flex flex-col justify-center items-center bg-blue py-[30px] px-[20px]">
      <div className="max-w-[970px] mobile:max-w-[304px]">
        <h2 className="text-[40px] font-extrabold text-main text-center mobile:text-[26px]">
          Our analysis of your profile suggests that this add-on can boost your{' '}
          <span className="text-yellow uppercase">parenting journey!</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
