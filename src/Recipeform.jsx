
import React from 'react';
import {useState} from 'react';

const initstate={
    title:"",
    Ingredients:"",
    cookingtime:0,
    instructions:"",
    price:0
}





const RecipeForm=()=>{
    const[data,setData]=useState(initstate);
   
    const{title,Ingredients,cookingtime,instructions,price}=data

    const inputevent=(event)=>{
       setData(event.target.value)
      console.log(event.target.value);
    }
   const Addrecipe=()=>{
       console.log("hello")
   }

  return (
    <>
        <input type="text" placeholder="Recipe Name" onChange={inputevent}/><br/>
        <input  type="text" placeholder="Ingredients" onChange={inputevent}/><br/>
        <input type="number" placeholder="cooking time" onChange={inputevent} /><br/>

        
         <input type="text" placeholder="Instructions" onChange={inputevent}/><br/>
         <input type="number" placeholder="Price" onChange={inputevent}/><br/>
         {/* <input type="file" placeholder="upload image" onChange={inputevent}/><br/> */}
         <button onClick={Addrecipe}>Add Recipe</button>
    </>
  )
         
   
      
 
}


export default  RecipeForm ;