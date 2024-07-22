import { customers } from '@/constants';

const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="w-full py-[30px] bg-blue flex flex-col justify-center items-center mobile:py-[15px]">
        <h2 className="text-white text-[40px] font-bold text-center mobile:text-[28px]">
          What Our Customers Say
        </h2>
      </div>
      <div
        className="w-full pt-[80px] pb-[63px] px-[20px] bg-[url('/bg3.svg')] bg-cover bg-center flex flex-col justify-center items-center mobile:py-[50px] mobile:bg-none mobile:bg-main 
      mobile:pb-0"
      >
        <div className="flex flex-col justify-center items-center gap-[20px] max-w-[791px]">
          {customers.map((item, i) => (
            <div
              key={i}
              className="py-[13px] px-[15px] bg-white shadow-lg rounded-lg"
            >
              <div className="flex items-center mb-[10px]">
                <img src={item.src} alt={item.name} className="mr-[10px]" />
                <p className="font-bold text-[18px] mr-[5px]">{item.name}</p>
                <img
                  src={item.badge}
                  alt="badge"
                  className="mr-[30px] mobile:mr-[20px]"
                />
                <img src={item.stars} alt="stars" />
              </div>
              <p className="font-medium text-[20px] mobile:text-[16px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
