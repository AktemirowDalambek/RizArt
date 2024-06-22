import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full px-8 py-4 max-md:py-12 max-md:gap-4 bg-cyan-700 text-white max-md:flex-col-reverse">
      <div className="flex flex-col gap-2">
        © 2024. Установка системы безопасности
      </div>
      <div>
        <ul className="flex flex-col justify-center gap-2">
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/service">Услуги</Link>
          </li>
          <li>
            <Link to="/portfolio">Наши работы</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-bold">Телефон:</span> +7 (928) 644-93-64
        </div>
        <div>
          <span className="font-bold">Email:</span>  riz.monitoring.art@gmail.com
        </div>
        <div>
          <span className="font-bold">Адрес:</span> г. Ростов-на-Дону ул. Тургеневская 8/11 344002
        </div>
        <div className="flex gap-4 font-bold">
          Мы в соцсетях:
          <a href="https://vk.com/" target="_blank" rel="noreferrer">
            <img
              src="../assets/icons/vk.png"
              alt="vk"
              className="w-[20px]"
            />
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/icons/yt.png"
              alt="yt"
              className="w-[20px]"
            />
          </a>
          <a
            href="https://wa.me/79380167550?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20%D0%BF%D0%BE%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B5%20%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%20%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%BE%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%20%D0%B2%D0%B0%D0%BC%D0%B8%3A"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../assets/icons/wa.png"
              alt="wa"
              className="w-[20px]"
            />
          </a>
        </div>
      </div>
    </footer> 
  );
};

export default Footer;
