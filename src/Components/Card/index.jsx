/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import style from "./style.module.css"

function Card(props) {
    const {children} = props;

    const {name, 
    status, 
    species,
    gender,
    image,
    } = props;
    return (
        <section className={style.cambios}> 
        {children}
            <h2>{name}</h2>
            <img src = {image}/>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>

        </section>
    );
}




export default Card