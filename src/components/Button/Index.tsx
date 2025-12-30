import s from "./Button.module.scss";

interface ButtonType {
  title: string;
  variant: "header" | "create" | "explore" | "explore2" | "sell";
}

const Button = ({ title, variant }: ButtonType) => {
  return (
    <button
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
                  : undefined
      }
    >
      {title}
    </button>
  );
};

export { Button };
