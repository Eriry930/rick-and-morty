import React from 'react';


const Pagination = ({prev, next, onPrevius, onNext}) => {
    const HandlePrevius =() => {
        onPrevius ()

    }
    const HandleNext =() => {
        onNext ()

    }
  return (
  <nav>
      <ul style={{listStyleType:'none'}} >
          {prev ? (
               <li>
               <button onClick={HandlePrevius}>Previus</button>
           </li>
          ): null}
         
         {next ? (
             <li>
             <button onClick={HandleNext} 
             style={{backgroundColor:'darkgreen',
             fontSize: '20px',
             borderBlockColor:'orange' 
            }}>Next</button>
         </li>
         ): null}
          

      </ul>
  </nav>
  );
};

export default Pagination;
