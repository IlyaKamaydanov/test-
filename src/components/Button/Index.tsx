import s from "./Button.module.scss";

interface ButtonType {
  title: string;
  variant:
    | "header"
    | "create"
    | "explore"
    | "explore2"
    | "sell"
    | "mobileExplore"
    | "slide";
  click?: () => void;
}

const Button = ({ title, variant, click }: ButtonType) => {
  return (
    <button
      onClick={click}
      className={
        variant === "header"
          ? s.button
          : variant === "create"
            ? s.createButton
            : variant === "explore"
              ? s.exploreButton
              : variant === "explore2"
                ? s.explore2
                : variant === "sell"
                  ? s.sell
                  : variant === "mobileExplore"
                    ? s.mobileExplore
                    : variant === "slide"
                      ? s.sliderButton
                      : undefined
      }
    >
      {title}
    </button>
  );
};

export { Button };
