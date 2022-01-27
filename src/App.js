/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import Header  from "./Components/Header";
import Logo from "./Components/Logo";
import ContainerCards from "./Components/ContainerCards";
import Card  from "./Components/Card";
import Pagination from "./Components/Pagination";

function App() {

  const baseUrl = 'https://rickandmortyapi.com/api/character';
  const [text,setText] =useState ("");
  let searchCharacters =[];

  const [characters,setCharacters] =useState([]);
  const [info,setInfo] = useState({});

  const consumeApi = async (url) => {
    
    const obj = await fetch (url); //guarde los datos de la api
    const data =await obj.json(); //conviertalos a formato json y guardelos en data
    setCharacters (data.results); //consuma el api desde results
    setInfo(data.info);
  }

  
  useEffect(()=> {
    consumeApi(baseUrl);
  },[]);


  console.log(characters);

  const onPrevius =() => {
    consumeApi (info.prev)
  }
  const onNext =()=> {
    consumeApi (info.next)
  }

  if (characters.length >= 1) {
    searchCharacters = characters.filter(character => {
      const characterText = character.name.toLowerCase();
      const searchText =text.toLowerCase();
      return characterText.includes (searchText);
    });
  }
  else{
  searchCharacters = characters;
  }
 console.log(searchCharacters     )
  return (
          <React.Fragment>
            <Header>
              <Logo/>
              <SearchBar
              text= {text}
              setText = {setText}/>
            </Header>
            <Pagination
              prev={info.prev}
              next={info.next}
              onPrevius={onPrevius}
              onNext={onNext}
              />
            <ContainerCards>
              {searchCharacters?.map(character => (
              <Card
              key= {character.id}
              name = { character.name}
              status ={character.status}
              species ={character.species}
              gender = {character.gender}
              image = {character.image}/>
              ),)};
              
            </ContainerCards>


          </React.Fragment>
      
  );


}

export default App;
