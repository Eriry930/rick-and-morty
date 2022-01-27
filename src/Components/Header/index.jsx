import React from "react";
import style from "./style.module.css"

function Header (props) {
    const {children} = props;
    return (
        <header className= {style.container}>
            {children}

        </header>
    );
}

export default Header