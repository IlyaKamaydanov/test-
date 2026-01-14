import { useEffect, useRef, useState } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Slide } from "../../Slide/Index";

interface todosType {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
  symbol: string;
  img: string;
}

const IMG = [
  "././img/SliderImage.png",
  "././img/SliderImage2.png",
  "././img/SliderImage3.png",
  "././img/SliderImage4.png",
];

const allIMG: string[] = [];

const Slider = () => {
  const [data, setData] = useState<todosType[]>([]);

  for (let i = 0; i < data.length; i++) {
    allIMG.push(...IMG);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/nfts/list"
        );
        if (!response.ok) {
          // Проверяем HTTP-статус
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch {
        <div>lol</div>;
      }
    };

    fetchData();
  }, []);

  data.map((item, index) => (item.img = allIMG[index]));

  const swiperRef = useRef<SwiperType | null>(null);

  const nextel = () => {
    swiperRef.current?.slideNext();
  };

  const prevel = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Weekly - Top NFT</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: s.next,
          prevEl: s.prev,
        }}
        className={s.slider}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={s.slide}>
            <Slide title={item.name} img={item.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.buttons}>
        <button className={s.prev} onClick={prevel}>
          <img className={s.arrow} src="././img/arrowLeft.svg" alt="left" />
        </button>
        <button className={s.next} onClick={nextel}>
          <img className={s.arrow} src="././img/arrowRight.svg" alt="right" />
        </button>
      </div>
    </div>
  );
};

export { Slider };
