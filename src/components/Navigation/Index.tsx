import { useState } from "react";
import s from "./Navigation.module.scss";

import { MobileNav } from "../MobileNav/Index";
import ReactDOM from "react-dom";

const NAVIGATIONITEM = [
  { title: "discover", link: "#info" },
  { title: "creators", link: "#" },
  { title: "sell", link: "#slider" },
  { title: "stats", link: "#" },
];

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };

  const close = () => {
    setNav(false);
  };

  return (
    <div className={s.container}>
      <a href="#info" className={s.logoLink}>
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
        <MobileNav show={nav} nav={NAVIGATIONITEM} close={close} />,
        document.body
      )}
      <nav>
        <ul className={s.navItem}>
          {NAVIGATIONITEM.map((item, index) => (
            <li key={index}>
              <a className={s.link} href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export { Navigation };
