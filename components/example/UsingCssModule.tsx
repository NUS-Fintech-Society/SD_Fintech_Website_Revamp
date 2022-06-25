import styles from "./UsingCssModule.module.css";

const UsingCssModule = () => {
  return (
    <>
      <h1 className={["h-96 w-96", styles.example].join(" ")}>
        This shows you how to use tailwindCSS and CSS module together
      </h1>
      <p className=" text-h2">
        But try to avoid this unless no choice cos it is ugly and we standize
        using TailWind
      </p>
    </>
  );
};

export default UsingCssModule;
