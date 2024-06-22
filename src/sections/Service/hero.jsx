import React from "react";

const ServiceHero = () => {
  return (
    <div className="py-6 max-md:flex max-md:flex-col md:grid grid-cols-2 border-b border-cyan-700">
      <h1 className="mb-10 text-3xl font-bold">Наши услуги</h1>
      <div className="grid col-start-1 row-start-2">
        <p className="text-xl mb-4">
          RizArt - это надежный способ обеспечить
          безопасность вашего объекта. Наши специалисты профессионально
          установят камеры и настроят систему так, чтобы вы могли
          контролировать происходящее в реальном времени.
        </p>
        <p className="text-xl mb-4">
          Мы предлагаем широкий выбор камер высокого качества, а также
          возможность удаленного доступа к записям через мобильное
          приложение. Обеспечьте себя и своих близких максимальной
          защитой с помощью нашей услуги по установке видеонаблюдения.
        </p>
      </div>
      <img
        src="../assets/images/service.jpg"
        alt="serviceHero"
        className="row-span-2 rounded-xl  ml-auto md:max-w-[40vw] self-center"
      />
    </div>
  );
};

export default ServiceHero;
