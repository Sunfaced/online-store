import "./properties.css";

const Properties = ({ filterGoods }) => {
  const categoryIsNew = () => {
    filterGoods("isNew");
  };

  const categoryIsStock = () => {
    filterGoods("isStock");
  };

  const categoryIsContract = () => {
    filterGoods("isContract");
  };

  const categoryIsExclusive = () => {
    filterGoods("isExclusive");
  };

  const categoryIsSale = () => {
    filterGoods("isSale");
  };

  return (
    <div className="properties">
      <ul className="properties__list">
        <li className="property__item">
          <label className="switch" htmlFor="toggle1">
            <input type="checkbox" onClick={categoryIsNew} id="toggle1" />
            <span className="off on"></span>
          </label>
          НОВИНКИ
        </li>
        <li className="property__item">
          <label className="switch" htmlFor="toggle2">
            <input type="checkbox" onClick={categoryIsStock} id="toggle2" />
            <span className="off on"></span>
          </label>
          ЕСТЬ В НАЛИЧИИ
        </li>
        <li className="property__item">
          <label className="switch" htmlFor="toggle3">
            <input type="checkbox" onClick={categoryIsContract} id="toggle3" />
            <span className="off on"></span>
          </label>
          КОНТРАКТНЫЕ
        </li>
        <li className="property__item">
          <label className="switch" htmlFor="toggle4">
            <input type="checkbox" onClick={categoryIsExclusive} id="toggle4" />
            <span className="off on"></span>
          </label>
          ЭКСКЛЮЗИВНЫЕ
        </li>
        <li className="property__item">
          <label className="switch" htmlFor="toggle5">
            <input type="checkbox" onClick={categoryIsSale} id="toggle5" />
            <span className="off on"></span>
          </label>
          РАСПРОДАЖА
        </li>
      </ul>
    </div>
  );
};

export default Properties;
