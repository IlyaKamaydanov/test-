import s from "./Navigation.module.scss";

const NAVIGATIONITEM = [
  { title: "discover", link: "#" },
  { title: "creators", link: "#" },
  { title: "sell", link: "#" },
  { title: "stats", link: "#" },
];

const Navigation = () => {
  return (
    <div className={s.container}>
      <a href="#">
        <img src="././img/logo.svg" />
      </a>
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
