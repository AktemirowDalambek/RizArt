import React from "react";
import { advantages } from "../../utils/constants";

const AdvantagesSection = () => {
  return (
    <div className="px-12 py-8 text-center border-b border-cyan-700">
      <h2 className="text-2xl mb-8 font-semibold">
        Преимущества работы с нами
      </h2>
      <div className="md:flex md:flex-wrap gap-6 justify-between max-md:grid max-md:grid-cols-2">
        {advantages.map((a, i) => (
          <div
            className="flex flex-col items-center w-[25%] text-center max-md:w-full"
            key={i}
          >
            <img
              src={a.icon}
              className={"md:w-[100px] mb-[20px] max-md:w-full"}
            />
            <p className={"max-md:text-[16px] font-semibold"}>
              {a.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
