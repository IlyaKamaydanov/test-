import { Button } from "../Button/Index";
import s from "./MobileNav.module.scss";

interface MobileNavType {
  show: boolean;
  close?: () => void;
  nav: { title: string; link: string }[];
}

const SOCIALICONS = [
  {
    link: "www.instagram.com",
    img: "././img/instBlack.svg",
    alt: "instagram",
  },
  {
    link: "www.in.com",
    img: "././img/inBlack.svg",
    alt: "in",
  },
  {
    link: "www.fb.com",
    img: "././img/fbBlack.svg",
    alt: "fb",
  },
  { link: "www.twitter.com", img: "././img/twBlack.svg", alt: "tw" },
];

const MobileNav = ({ show, nav }: MobileNavType) => {
  console.log(show);

  return (
    <div className={show ? s.container : s.none}>
      <>
        <ul className={s.navItem}>
          {nav.map((item, index) => (
            <li key={index}>
              <a className={s.link} href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </>
      <ul className={s.socIcon}>
        {SOCIALICONS.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <img src={item.img} alt={item.alt} />
            </a>
          </li>
        ))}
      </ul>
      <Button variant="mobileExplore" title="Connect Wallet" />
    </div>
  );
};

export { MobileNav };
