import { useEffect, useRef, useState } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Slide } from "../../Slide/Index";
import { useWindowWidth } from "@react-hook/window-size";

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
  const [error, setError] = useState();

  for (let i = 0; i < data.length; i++) {
    allIMG.push(...IMG);
  }

  error === undefined ? null : console.log(error);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/nfts/list"
        );
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
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

  const [slideNumber, setSlideNumber] = useState(5);

  const size = useWindowWidth();

  useEffect(() => {
    size <= 385 ? setSlideNumber(slideNumber - 4) : slideNumber;
  }, []);

  return (
    <div className={s.container} id="slider">
      <h2 className={s.title}>Weekly - Top NFT</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={slideNumber}
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
