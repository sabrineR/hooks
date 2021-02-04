import React from 'react';

const Rate = ({rating,setSearchRate}) => {
    let Arr=[];
 
      for (let i = 0; i < 5; i++) {
          if (rating>i) {
              Arr.push(
              <span onClick={()=>setSearchRate(i+1)} >★</span>)
              
          } else {
              Arr.push(<span onClick={()=>setSearchRate(i+1)} >☆</span>)
              
          }
          
      }
 
    return Arr;
  
    
        
  
}

export default Rate;
