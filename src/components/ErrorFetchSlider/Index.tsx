import s from "./ErrorFetchSlider.module.scss";

const ErrorFetchSlider = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Oops... An error occurred. We are already working on eliminating it.
        Update the site later
      </p>
    </div>
  );
};

export { ErrorFetchSlider };
