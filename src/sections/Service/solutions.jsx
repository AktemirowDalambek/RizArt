import React from "react";
import { solutions } from "../../utils/constants";

const Solutions = () => {
  return (
    <div className="my-6">
      <h2 className="text-center text-semibold text-[24px] mb-6">
        Попробуйте наши готовые решения
      </h2>
      <div className="flex justify-between max-md:gap-8 max-md:flex-col">
        {solutions.map((s) => (
          <div
            className="flex flex-col items-center gap-4 text-center border border-cyan-700 w-[24%] max-md:w-full pb-6 justify-between"
            key={s.head}
          >
            <img
              src={s.image}
              className="w-[250px] h-[150px] max-md:w-full max-md:h-auto"
              alt={s.head}
            />
            <h3 className="font-semibold text-xl">{s.head}</h3>
            <p className="text-[16px]">{s.first}</p>
            <p className="text-[16px]">{s.second}</p>
            <p className="text-xl font-bold text-cyan-700">{s.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
