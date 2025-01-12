import { useState } from "react";
import "./header.css";
import wallpaper from "./../../public/images/wallpaper.png"
import prevImg from "./../../public/images/prevImg.svg"
import nextImg from "./../../public/images/nextImg.svg";
import background from "./../../public/images/background.jpg";

const images = ["image1", "image2"];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const first = "header__menu";
  const second = images[currentIndex];

  return (
    <header className="header">
      <div className="container">
        <div className={`${first} ${second}`}>
          <ul className="header__list">
            <li className="list__item">
              <a className="list__link" href="#">
                ГЛАВНАЯ
              </a>
            </li>
            <li>
              <span className="list__dote"></span>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">
                ПРОДУКТЫ
              </a>
            </li>
            <li>
              <span className="list__dote"></span>
            </li>
            <li className="list__item">
              <a className="list__link" href="#">
                КРАСКИ
              </a>
            </li>
            <li>
              <span className="list__dote"></span>
            </li>
          </ul>

          <div className="header__info">
            <h1 className="title">Краски</h1>
            <p className="info">
              Идеально подходят для стен и других поверхностей. <br /> Найди
              свой идеальный цвет!
            </p>
          </div>
          <button className="prev" onClick={prevSlide}>
            <img className="prevImg" src={prevImg} alt="" />
          </button>
          <button className="next" onClick={nextSlide}>
            <img className="nexImg" src={nextImg} alt="" />
          </button>
          <div className="slider">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
