import "./navigate.css";
import logo from "./../../public/images/logo.svg";
import search from "./../../public/images/search.svg";
import profile from "./../../public/images/profile.svg";
import heart from "./../../public/images/heart.svg";
import basket from "./../../public/images/basket.svg";
import ShoppingCart from "./shoppingCart/ShoppingCart";

const Navigate = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__area">
          <div className="nav__menu">
            <a className="logo" href="#">
              <img className="logo__img" src={logo} alt="" />
            </a>
            <ul className="menu__list">
              <li className="menu__item">
                <a href="">ПРОДУКТЫ</a>
              </li>
              <li className="menu__item">
                <a href="">ЦВЕТА</a>
              </li>
              <li className="menu__item">
                <a href="">ВДОXНОВЕНИЕ</a>
              </li>
              <li className="menu__item">
                <a href="">СОВЕТЫ</a>
              </li>
              <li className="menu__item">
                <a href="">НАЙТИ МАГАЗИН</a>
              </li>
            </ul>
          </div>
          <div className="nav__contacts">
            <div className="phone__contact">
              <a className="phone" href="tel:79819113882">
                +7 981-911-38-82
              </a>
              <div className="call">Заказать звонок</div>
            </div>

            <ul className="contacts">
              <li className="contacts__item">
                <a href="">
                  <img src={search} alt="" />
                </a>
              </li>
              <li className="contacts__item">
                <a href="">
                  <img src={profile} alt="" />
                </a>
              </li>
              <li className="contacts__item">
                <a href="">
                  <img src={heart} alt="" />
                </a>
              </li>
              <li className="contacts__item">
                <a href="#">
                  <ShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigate;
