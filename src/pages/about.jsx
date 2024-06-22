import React from "react";

const About = () => {
  return (
    <main className="px-12 py-8">
      <h1 className="mb-10 text-3xl font-bold">Подробнее о компании</h1>
      <div className="flex mb-8 max-md:flex-col justify-between text-xl gap-16 max-md:text-[14px] leading-9">
        <p>
          Наша компания специализируется на установке видеонаблюдения,
          обеспечивая надежную защиту вашего объекта. Мы предлагаем
          профессиональные услуги по установке камер и настройке системы
          видеонаблюдения для различных типов помещений и объектов. Наши
          специалисты имеют обширный опыт работы с современным
          оборудованием, что гарантирует высокое качество установки.
        </p>
        <img
          src="../assets/images/about1.jpg"
          alt="about1"
          className="md:w-[40%] self-center rounded-lg"
        />
      </div>
      <div className="flex mb-8 max-md:flex-col flex-row-reverse justify-between text-xl gap-16 max-md:text-[14px] leading-9">
        <p>
          Мы предлагаем широкий выбор камер видеонаблюдения различных
          типов: от стандартных камер наблюдения до камер с функцией
          ночного видения и поворотной головкой. Наши эксперты помогут
          вам выбрать оптимальное решение, учитывая особенности вашего
          объекта и потребности в безопасности. Мы стремимся к тому,
          чтобы каждый клиент получил идеально подходящую систему
          видеонаблюдения
        </p>
        <img
          src="../assets/images/about2.jpg"
          alt="about2"
          className="md:w-[40%] self-center rounded-lg"
        />
      </div>
      <div className="flex mb-8 max-md:flex-col justify-between text-xl gap-16 max-md:text-[14px] leading-9">
        <p>
          Наша компания также предлагает услуги по настройке удаленного
          доступа к системе видеонаблюдения через мобильное приложение.
          Это позволяет вам контролировать происходящее на объекте в
          реальном времени, даже находясь вдали от него. Мы гарантируем
          удобство и безопасность использования удаленного доступа.
        </p>
        <img
          src="../assets/images/about3.jpg"
          alt="about3"
          className="md:w-[40%] self-center rounded-lg"
        />
      </div>
      <div className="flex mb-8 max-md:flex-col flex-row-reverse justify-between text-xl gap-16 max-md:text-[14px] leading-9">
        <p>
          Наша команда профессионалов всегда готова предложить
          консультацию и поддержку по всем вопросам, связанным с
          установкой и настройкой системы видеонаблюдения. Мы стремимся
          к тому, чтобы каждый клиент получил индивидуальный подход и
          полное удовлетворение от работы с нами. Обращайтесь к нам, и
          мы поможем вам обеспечить максимальную безопасность вашего
          объекта.
        </p>
        <img
          src="../assets/images/about4.jpg"
          alt="about4"
          className="md:w-[40%] self-center rounded-lg"
        />
      </div>
    </main>
  );
};

export default About;
