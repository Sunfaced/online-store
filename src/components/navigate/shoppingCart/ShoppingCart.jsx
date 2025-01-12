import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./shoppingCart.css";
import cross from "./../../../../public/images/x.png";

const ShoppingCart = () => {
  const [isVisible, setVisibility] = useState(false);

  const stopPageScrolling = () => {
    document.documentElement.classList.add('off__scroll');
  }

  const returnPageScrolling = () => {
    document.documentElement.classList.remove('off__scroll');
  }

  const toggle = () => {
    setVisibility((prev) => {
      if (!prev) {
        stopPageScrolling()
      } else {
        returnPageScrolling()
      }
      return !prev
    })
  };

  const { cartItems } = useCart();
  
  let sumOfPrices = cartItems.reduce((total, item) => total + item.price, 0)
  const cartItem = [...new Set(cartItems)];
  
  return (
    <div className="cartContainer">
      <span onClick={toggle} className="material-symbols-outlined">
        shopping_cart
      </span>
      {isVisible && (
        <div>
          <div onClick={toggle} className="cart__modal "></div>
          <div className="cart__info">
            <div className="empty__cart">
              <h2 className="empty__cart-inner">Корзина</h2>
              <button className="empty__cart-btn" onClick={toggle}>
                <img src={cross} alt="" />
              </button>
            </div>
            {cartItem.length === 0 ? (
              <h2 className="empty__cart-inner">Ваша корзина пуста</h2>
            ) : (
              <>
                <h3 className="quantityOfGoods">
                  {cartItem.length}{" "}
                  {cartItem.length === 1
                    ? "ТОВАР"
                    : cartItem.length > 1 && cartItem.length < 5
                    ? "ТОВАРА"
                    : "ТОВАРОВ"}
                </h3>

                {cartItem.map((item, index) => (
                  <div key={item.id || index}>
                    <div className="border"></div>
                    <div className="all__items">
                      <div className="items">
                        <img
                          className="itemImage"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <h3 className="itemName">{item.name}</h3>
                          <p className="itemPrice">{item.price + " р"}</p>
                        </div>
                      </div>
                      <div className="goods__item-props">
                        {/* <button className="del__item">-</button> */}
                        <h3 className="goods__quantity">{item.countInCart}</h3>
                        {/* <button className="add__item">+</button> */}
                      </div>
                    </div>
                    <div className="border"></div>
                  </div>
                ))}

                <div className="result">
                  <div>
                    <p>Итого</p>
                    <h3>
                      {sumOfPrices}{" "}
                      р
                    </h3>
                  </div>
                  <div>
                    <button>Оформить заказ</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
