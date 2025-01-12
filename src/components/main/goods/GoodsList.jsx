import { useEffect, useState } from "react";
import data from "../../../server/db.json";
import "./goodsList.css";
import CustomSelect from "./dialog/CustomSelect";
import { useCart } from "../../navigate/shoppingCart/CartContext";

const GoodsList = ({ filters }) => {
  const [toCard, setToCard] = useState({});

  const addToCard = (item) => {
    setToCard((prev) => {
      const currentQuantity = prev[item.id] || 0;
      if (item.quantity > currentQuantity) {
        return {
          ...prev,
          [item.id]: currentQuantity + 1,
        };
      } else {
        return prev;
      }
    });
    checkState(item, 'plus')
  };
  
  const checkState = (item, type) => {
    if (type == 'plus') {
        let isMaxQuantity = item.countInCart >= item.quantity ? true : false
        if (!isMaxQuantity) {
            item.countInCart += 1
        } else {
            return false
        }       
    } else {
        let isMinQuantity = item.countInCart == 0 ? true : false
        if (!isMinQuantity) {
            item.countInCart -= 1
        } else {
            return false
        }
    }
    addToCart(item, type);
  }

  const delToCard = (item) => {
    setToCard((prev) => {
      const currentQuantity = prev[item.id] || 0;

      if (currentQuantity > 0) {
        return {
          ...prev,
          [item.id]: currentQuantity - 1,
        };
      } else {
        return prev;
      }
    });
    checkState(item, 'minus')
  };

  const [goods, setGoods] = useState([]);

  const [parentState, setParentState] = useState("Сначала дорогие");

  const handleChildStateChange = (newState) => {
    debugger;
    setParentState(newState);
  };

  useEffect(() => {
    setGoods(data.goods);
  }, []);

  const { addToCart } = useCart();


  const renderContent = () => {
    const filteredGoods = goods.filter((item) => {
      const matchesNew = filters.isNew ? item.isNew : true;
      const matchesStock = filters.isStock ? item.isStock : true;
      const matchesContract = filters.isContract ? item.isContract : true;
      const matchesExclusive = filters.isExclusive ? item.isExclusive : true;
      const matchesSale = filters.isSale ? item.isSale : true;

      return (
        matchesNew &&
        matchesStock &&
        matchesContract &&
        matchesExclusive &&
        matchesSale
      );
    });

    const sortContent = () => {
      if (parentState === "Сначала дорогие") {
        filteredGoods.sort((a, b) => b.price - a.price);
      }
      if (parentState === "Сначала недорогие") {
        filteredGoods.sort((a, b) => a.price - b.price);
      }
      if (parentState === "Сначала популярные") {
        filteredGoods.sort((a, b) => b.isPopular - a.isPopular);
      }
      if (parentState === "Сначала новые") {
        filteredGoods.sort((a, b) => b.isNew - a.isNew);
      }
    };
    sortContent();

    if (filteredGoods.length > 0) {
      return (
        <div className="goods__section">
          <div className="goods__params">
            <p className="goods__sum">
              {filteredGoods.length}{" "}
              {filteredGoods.length === 1
                ? "ТОВАР"
                : filteredGoods.length > 1 && filteredGoods.length < 5
                ? "ТОВАРА"
                : "ТОВАРОВ"}
            </p>
            <CustomSelect onStateChange={handleChildStateChange} />
          </div>
          <ul className="goods__list">
            {filteredGoods.map((item) => (
              <li key={item.id} className="goods__item">
                <img className="goods__img" src={item.image} alt={item.name} />
                <h3 className="goods__name">{item.name}</h3>
                <p className="goods__price">{item.price + " р"}</p>
                <div className="goods__item-props">
                  <button
                    onClick={() => {
                      delToCard(item);
                      // handleAddToCart(item);
                    }}
                    className="goods__button"
                  >
                    {"-"} {}
                  </button>
                  <h3 className="goods__quantity">{toCard[item.id] || 0}</h3>
                  <button
                    onClick={() => {
                      addToCard(item);
                      // handleAddToCart(item);
                    }}
                    className="goods__button"
                  >
                    {"+"} {}
                  </button>
                </div>
                <div className="border"></div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="goods__section">
          <p>Нет доступных товаров.</p>
        </div>
      );
    }
  };

  return <div>{renderContent()}</div>;
};

export default GoodsList;
