import React from "react";
import style from "./style.module.css"

function Logo(props) {
  const {children} = props;
  return (
    <a href="mas" className={style.log}>
      {children}
      <img className={style.img}
        src={"http://assets.stickpng.com/images/58f37720a4fa116215a9240f.png"}
        alt={"hola"}
        
      />
    </a>
  );
}

export default Logo;
