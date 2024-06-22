import React from "react";

const Contacts = () => {
  return (
    <main className=" px-12 py-8 text-xl ">
      <div className="py-8">
        <h1 className="mb-10 text-3xl font-bold">Контакты</h1>
      </div>
      <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-8 mb-4 border-b border-cyan-700 py-4">
        <div className="flex flex-col gap-2 justify-center ">
          <div className="flex flex-col gap-4">
            <span className="font-bold">Телефон:</span> +7 (928)
            644-93-64
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold">Email:</span> riz.monitoring.art@gmail.com
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold">Адрес:</span> г. Ростов-на-Дону ул. Тургеневская 8/11 344002
          </div>
        </div>
        <img
          src="../assets/images/contacts.jpeg"
          className="w-[60%] max-md:w-[90%] h-auto rounded-md border self-center border-black"
          alt="contacts"
        />
      </div>
      <div className="flex gap-2 max-md:flex-col">
        <div className="md:max-w-[70%]">
          <p className=" mb-4">
            Наши специалисты готовы предложить вам профессиональные
            услуги по установке видеонаблюдения. Мы обеспечим надежную
            защиту вашего дома или бизнеса, установив качественное
            оборудование и настроив его под ваши потребности.
          </p>
          <p className=" mb-4">
            Наш опытный персонал поможет выбрать оптимальное решение для
            вашего объекта, учитывая все особенности и требования. Мы
            гарантируем качественный монтаж и настройку системы
            видеонаблюдения, а также обучим вас работе с ней.
          </p>
          <p>
            Свяжитесь с нами прямо сейчас, чтобы обсудить детали вашего
            проекта и получить консультацию от профессионалов. Вместе мы
            создадим надежную систему безопасности, которая будет
            работать для вас 24/7.
          </p>
        </div>
        <img
          src="../assets/icons/head_camera.png"
          className="md:max-w-[50vw] h-auto self-center"
          alt="contacs_camera"
        />
      </div>
    </main>
  );
};

export default Contacts;
