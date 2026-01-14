import { Button } from "../Button/Index";
import s from "./SellNft.module.scss";

const SellNft = () => {
  return (
    <div className={s.container}>
      <div className={s.background}>
        <div className={s.createSell}>
          <div className={s.info}>
            <h3 className={s.title}>Create and Sell NFTs</h3>
            <p className={s.text}>World’s Largest NFT Place</p>
          </div>
          <div className={s.buttons}>
            <Button title="Explore More" variant="explore2" />
            <Button title="Sell Artwork" variant="sell" />
          </div>
        </div>

        <img src="././img/SellNft.png" alt="sell NFT" className={s.img} />
        <img src="././img/long.png" alt="sell NFT" className={s.imgLong} />
      </div>
    </div>
  );
};

export { SellNft };
