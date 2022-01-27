import React from "react";


function SearchBar(props) {
    const{ text, setText} = props;  //value es el estado inicial y serValue es una funcion y useState es el cambio

    const search =(e) => {
        
        setText(e.target.value);

    } 



    return(
        <div style={{ width:'450px'}}>
            <div style={{width:'100%'}}>
                <input  style={{background:'gold', width:'100%'}} 
                    type= {"text"} 
                    placeholder="Type a name"
                    value = {text}
                    onChange ={search}>
                </input>
            </div>
        </div>

    );

};

export {SearchBar };