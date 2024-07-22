const Footer = () => {
  return (
    <footer
      className="w-full pt-[53px] pb-[30px] flex flex-col justify-center items-center bg-footer gap-[45px] laptop:pt-[30px] laptop:px-[20px]
    laptop:gap-[25px]"
    >
      <div className="flex gap-[336px] laptop:flex-col laptop:gap-[26px]">
        <div className="flex flex-col justify-center items-center gap-[16px] mobile:gap-[10px]">
          <img
            src="/footerlogo1.svg"
            alt="footerlogo1"
            className="mobile:w-[45px]"
          />
          <img
            src="/footerlogo2.svg"
            alt="footerlogo2"
            className="mobile:w-[54px]"
          />
        </div>
        <div className="flex gap-[60px] laptop:flex-col laptop:justify-center laptop:items-center laptop:gap-[22px]">
          <div className="flex flex-col gap-[12px] laptop:text-center">
            <div className="text-[16px] font-bold text-footerlinks">
              Policies
            </div>
            <div className="text-[14px] font-medium text-footerlinks">
              Privacy policy
            </div>
            <div className="text-[14px] font-medium text-footerlinks">
              Terms & Conditions
            </div>
          </div>
          <div className="flex flex-col gap-[12px] laptop:text-center">
            <div className="text-[16px] font-bold text-footerlinks">
              Need Help?
            </div>
            <div className="text-[14px] font-medium text-footerlinks">
              1 (302) 316-5995
            </div>
            <div className="text-[14px] font-medium text-footerlinks">
              hello@parentingleader.com
            </div>
            <div className="flex gap-[24px] laptop:justify-center laptop:items-center">
              <img src="/insta.svg" alt="instagram" />
              <img src="/facebook.svg" alt="facebook" />
              <img src="/youtube.svg" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[12px] font-medium text-footerlinks text-center">
        All rights reserved (C) 2023 www.parentingleader.com
      </div>
    </footer>
  );
};

export default Footer;
