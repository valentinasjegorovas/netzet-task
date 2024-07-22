const Header = () => {
  return (
    <header className="w-full pt-[41px] pb-[47px] flex flex-col justify-center items-center bg-main mobile:py-[16px]">
      <div className="max-w-[160px] flex flex-row items-center gap-[20px] mobile:max-w-[110px] mobile:gap-[14px]">
        <img src="./logo-1.svg" alt="logo-1" className="mobile:w-[27px]" />
        <img src="./logo-2.svg" alt="logo-2" className="mobile:w-[69px]" />
      </div>
    </header>
  );
};

export default Header;
