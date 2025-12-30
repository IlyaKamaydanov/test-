import s from "./Button.module.scss";

interface ButtonType {
  title: string;
  variant: "header" | "create" | "explore";
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
              : undefined
      }
    >
      {title}
    </button>
  );
};

export { Button };
