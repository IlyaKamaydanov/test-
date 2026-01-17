import { useEffect, useState } from "react";
import { Button } from "../components/Button/Index";
import s from "./Slide.module.scss";

interface SlideType {
  title: string;
  img?: string;
}

const Slide = ({ title, img }: SlideType) => {
  const [random, setRandom] = useState(1);
  const numb = () => {
    useEffect(() => {
      setRandom(random + Math.random());
    }, []);
  };

  numb();

  return (
    <div className={s.container}>
      <div>
        <img src={img} alt="ig" className={s.img} />
        <p className={s.title}>{title}</p>
        <div className={s.currentAndButton}>
          <div className={s.current}>
            <span className={s.text}>Current bid</span>
            <div className={s.bid}>
              <img
                src="././img/current.svg"
                alt="current"
                className={s.imgMimi}
              />
              <span className={s.number}>{random.toFixed(2)}</span>
            </div>
          </div>
          <Button variant="slide" title="PLACE BID"></Button>
        </div>
      </div>
    </div>
  );
};

export { Slide };
