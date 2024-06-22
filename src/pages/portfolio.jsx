import React from "react";

const Portfolio = () => {
  return (
    <main className="px-12 py-8 text-xl">
      <h1 className="mb-10 text-3xl font-bold">Примеры наших работ</h1>
      <h2 className="mb-10 text-2xl font-semibold text-center">
        Схема работы
      </h2>
      <img
        src="../assets/images/schema.jpg"
        alt="schema"
        className="mx-auto"
      />
      <div className="py-6 border-b border-t border-cyan-700">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Решения для улицы
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <img
            src="../assets/images/out1.jpg"
            alt="out1"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/out2.jpg"
            alt="out2"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/out3.jpg"
            alt="out3"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/out4.jpg"
            alt="out4"
            className="md:w-[40%]"
          />
        </div>
      </div>
      <div className="py-6">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Решения для помещений
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <img
            src="../assets/images/in1.jpg"
            alt="in1"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/in2.png"
            alt="in2"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/in3.jpg"
            alt="in3"
            className="md:w-[40%]"
          />
          <img
            src="../assets/images/in4.jpg"
            alt="in4"
            className="md:w-[40%]"
          />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
