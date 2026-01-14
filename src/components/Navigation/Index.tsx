import { useState } from "react";
import s from "./Navigation.module.scss";

import { MobileNav } from "../MobileNav/Index";
import ReactDOM from "react-dom";

const NAVIGATIONITEM = [
  { title: "discover", link: "#" },
  { title: "creators", link: "#" },
  { title: "sell", link: "#" },
  { title: "stats", link: "#" },
];

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <div className={s.container}>
      <a href="#" className={s.logoLink}>
        <img className={s.logo} src="././img/logo.svg" alt="logo" />
        <span className={s.mobileTitle}>DiveSea</span>
      </a>

      {nav ? (
        <div className={s.mobileClose} onClick={showNav}>
          <span className={s.lineCloseLeft}></span>
          <span className={s.lineCloseRight}></span>
        </div>
      ) : (
        <div className={s.mobileNav} onClick={showNav}>
          <span className={s.line}></span>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
      )}

      {ReactDOM.createPortal(
        <MobileNav show={nav} nav={NAVIGATIONITEM} />,
        document.body
      )}

      <ul className={s.navItem}>
        {NAVIGATIONITEM.map((item, index) => (
          <li key={index}>
            <a className={s.link} href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navigation };
