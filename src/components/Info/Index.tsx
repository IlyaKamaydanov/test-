import { Button } from "../Button/Index";
import s from "./Info.module.scss";

const Info = () => {
  return (
    <div className={s.container}>
      <div className={s.discoverCreate}>
        <div className={s.info}>
          <p className={s.mobileInfo}>
            <span className={s.line}></span>OVER 1M CREATORS
          </p>
          <h1 className={s.title}>Discover And Create NFTs</h1>
          <p className={s.text}>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a{" "}
            <span className={s.bonus}>$20 bonus</span>.
          </p>
        </div>
        <div className={s.buttons}>
          <Button title="Explore More" variant="explore" />
          <Button title="create NFT" variant="create" />
        </div>
        <div className={s.statistics}>
          <div className={s.stat}>
            <h3 className={s.statTitle}>430K+</h3>
            <p className={s.statText}>Art Works</p>
          </div>
          <div className={s.stat}>
            <h3 className={s.statTitle}>159K+</h3>
            <p className={s.statText}>Creators</p>
          </div>{" "}
          <div className={s.stat}>
            <h3 className={s.statTitle}>87K+</h3>
            <p className={s.statText}>Collections</p>
          </div>
        </div>
      </div>
      <div className={s.imgBlock}>
        <img className={s.imgLeft} src="././img/LeftIMG.png" alt="IMG" />
        <img className={s.imgRight} src="././img/RightIMG.png" alt="IMG" />
        <img className={s.arrow} src="././img/Arrow.svg" alt="IMG" />
        <img className={s.grid} src="././img/Grid.svg" alt="IMG" />
      </div>
    </div>
  );
};

export { Info };
