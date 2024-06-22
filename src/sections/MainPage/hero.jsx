import React from "react";

const HeroBlock = () => {
  return (
    <div className="relative px-12 max-md:px-2 py-[140px] max-md:py-[50px] border-b border-cyan-700 z-1 text-center bg-heroBg bg-no-repeat bg-cover	">
      <div className="w-[60%] my-auto mx-auto text-center z-30 relative max-md:w-[100%]">
        <h1 className="text-[48px] mb-[10px]  text-cyan-700 font-bold text-white max-md:text-[24px] z-4">
          RizArt
        </h1>
        <p className="text-white">
          Каждый день мы работаем для того чтобы жизнь наших клиентов
          стала лучше и безопаснее
        </p>
      </div>
    </div>
  );
};

export default HeroBlock;
