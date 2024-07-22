import Button from './Button';

const Promo = () => {
  return (
    <section className="w-full py-[60px] flex flex-col justify-center items-center bg-secondary mobile:py-[50px] mobile:px-[20px]">
      <div className="max-w-[500px] flex flex-col justify-center items-center gap-[18px]">
        <h2 className="font-extrabold text-[35px] text-darkgrey text-center uppercase mobile:text-[24px] mobile:max-w-[242px]">
          Limited-time price of only
        </h2>
        <div className="flex gap-[24px] items-center mobile:gap-[18px] mobile:justify-center mobile:flex-wrap">
          <div className="font-extrabold text-[45px] text-red mobile:text-[35px]">
            $19.95
          </div>
          <div className="font-medium text-[27px] text-grey line-through mobile:text-[21px]">
            $59.95
          </div>
          <div className="font-extrabold text-[35px] text-darkgrey mobile:text-[26px]">
            Save 67%
          </div>
        </div>
        <Button>add to order</Button>
        <div className="text-lightgrey font-semibold underline text-[16px] mobile:text-[12px]">
          No, thanks
        </div>
        <div className="text-darkgrey font-medium text-[16px] text-center mobile:text-[12px]">
          One click, and your account will be charged for $19.95 for
          <br />
          The Art of Smart Parenting
        </div>
        <div className="flex justify-center items-center gap-[22px] mobile:gap-[17px]">
          <img src="./paypal.svg" alt="paypal" className="mobile:w-[60px]" />
          <img src="./visa.svg" alt="visa" className="mobile:w-[34px]" />
          <img
            src="./american.svg"
            alt="american"
            className="mobile:w-[20px]"
          />
          <img
            src="./mastercard.svg"
            alt="mastercard"
            className="mobile:w-[25px]"
          />
          <img
            src="./discover.svg"
            alt="discover"
            className="mobile:w-[38px]"
          />
          <img src="./maestro.svg" alt="maestro" className="mobile:w-[27px]" />
        </div>
        <div className="font-medium text-[14px] text-darkgrey mobile:text-[10px]">
          100% Secure 256-bit Encryption.
        </div>
      </div>
    </section>
  );
};

export default Promo;
