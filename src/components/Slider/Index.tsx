import { useEffect, useRef, useState } from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useWindowWidth } from "@react-hook/window-size";
import axios from "axios";
import { Slide } from "../Slide/Index";
import { useErrorBoundary } from "react-error-boundary";

interface todosType {
  id?: string;
  contract_address?: string;
  name: string;
  asset_platform_id?: string;
  symbol?: string;
  img?: string;
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

  const randomImg = [...allIMG];

  for (let i = randomImg.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomImg[i], randomImg[j]] = [randomImg[j], randomImg[i]];
  }

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response: { data: todosType[] } = await axios.get(
          "https://api.coingecko.com/api/v3/nfts/list"
        );

        const result = response.data;

        setData(result);
      } catch (error) {
        console.error;
        showBoundary(error);
      }
    };

    fetchUserData();
  }, []);

  data.map((item, index) => (item.img = randomImg[index]));

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
