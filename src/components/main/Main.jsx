import "./main.css";
import Properties from "./properties/Properties";
import { useState } from "react";
import GoodsList from "./goods/GoodsList";
const Main = () => {

  const [filters, setFilters] = useState({
    isNew: false,
    isStock: false,
    isContract: false,
    isExclusive: false,
    isSale: false
});

const handleFilterChange = (key) => {
  setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: !prevFilters[key], // Переключаем значение по переданному ключу
  }));
};


  return (
    <main className="main">
      <div className="container">
        <div className="main__goods">
          <Properties filterGoods={handleFilterChange}/>
          <GoodsList filters={filters}/>
        </div>
      </div>
    </main>
  );
};

export default Main;
