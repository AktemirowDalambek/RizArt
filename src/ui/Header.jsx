import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  return (
    <header className="flex sticky top-0 justify-between w-full py-4 h-[60px] px-8 border-b border-black bg-cyan-600 text-white z-40 font-bold">
      <Link to="/">
        <p className="hover:border-b max-md:text-[14px]">
          RizArt
        </p>
      </Link>
      <nav className="w-[40%] max-md:hidden">
        <ul className="flex justify-between self-end">
          <li className="hover:border-b">
            <Link to="/about">О нас</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/service">Услуги</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/portfolio">Наши работы</Link>
          </li>
          <li className="hover:border-b">
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button
          className="md:hidden w-[30px] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="../assets/icons/menu.svg" alt="menu" />
        </button>
        <div
          className="absolute right-0 h-[100vh] bg-cyan-600 w-[60%] z-30"
          hidden={!isMenuOpen}
        >
          <nav>
            <ul className="flex flex-col px-4 py-8 gap-6">
              <li>
                <Link to="/">Главная</Link>
              </li>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
