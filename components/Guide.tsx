import { guide } from '@/constants';

const Guide = () => {
  return (
    <section className="w-full py-[80px] px-[122px] flex flex-col justify-center items-center bg-main mobile:py-[40px] mobile:px-[20px]">
      <div className="max-w-[1196px] flex flex-col justify-center items-center gap-[50px] laptop:gap-[30px]">
        <p className="font-semibold text-[36px] text-blue laptop:text-center mobile:text-[20px]">
          Created{' '}
          <span className="font-extrabold uppercase">
            by a Child Psychologist
          </span>
          , this guide features expertly designed content to help you raise
          happy and{' '}
          <span className="font-extrabold text-orange uppercase">
            confident children.
          </span>
        </p>
        <div className="flex flex-col justify-center items-center gap-[10px] laptop:gap-[20px]">
          {guide.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-[10px] laptop:flex-col laptop:items-center laptop:gap-[20px]"
            >
              <img src={item.src} alt={item.span} className="laptop:w-[66px]" />
              <p className="font-semibold text-[36px] text-blue laptop:text-center mobile:text-[20px]">
                <span className="font-extrabold uppercase">{item.span}</span>{' '}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
