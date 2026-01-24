import s from "./Footer.module.scss";

const LINKS = [
  { title: "Privacy Policy", link: "#" },
  { title: "Term & Conditions", link: "#" },
  { title: "About Us", link: "#" },
  { title: "Contact", link: "#" },
];

const SOCIAL = [
  { link: "www.instagram.com", img: "././img/inst.svg", alt: "instagram" },
  { link: "www.in.com", img: "././img/inin.svg", alt: "in" },
  { link: "www.facebook.com", img: "././img/FB.svg", alt: "facebook" },
  { link: "www.twitter.com", img: "././img/twit.svg", alt: "twitter" },
];

const Footer = () => {
  return (
    <footer className={s.container}>
      <div className={s.flex}>
        <div className={s.miniContainer}>
          <div>
            <a href="#info" className={s.logo}>
              <img
                className={s.logo}
                src="././img/FooterLogo.svg"
                alt="Footer Logo"
              />
              <p className={s.title}>DiveSea</p>
            </a>
          </div>
          <div className={s.links}>
            {LINKS.map((item, index) => (
              <a key={index} className={s.link} href={item.link}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className={s.social}>
          <div className={s.date}>© 2023</div>
          <div className={s.socialIcon}>
            {SOCIAL.map((item, index) => (
              <a className={s.soc} key={index} href={item.link}>
                <img src={item.img} alt={item.alt} className={s.socImg}></img>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={s.mobileDate}>© 2023 DiveSea All Rights Reserved.</div>
    </footer>
  );
};

export { Footer };
