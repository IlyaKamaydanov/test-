import { useEffect, useState } from "react";
import s from "./Slider.module.scss";

interface todosType {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
}

const Slider = () => {
  const [todos, setTodos] = useState<todosType[]>([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/nfts/list")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  console.log(todos);

  return (
    <div className={s.container}>
      <div>
        {todos.map((item, index) => (
          <div key={index}>
            {item.name}
            <img src={item.symbol} alt="1"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Slider };
