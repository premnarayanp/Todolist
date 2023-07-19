import { useState } from "react";

export function useFormInput(initialValue){
   const[value,setValue]=useState(initialValue);

  function handleChange(e){
    // console.log("e.target.checked=",e.target.checked);
    // console.log("e.target.value=",e.target.value);

    const value=e.target.className==="todoToggle"?e.target.checked:e.target.value;
    setValue(value);
  } 

  return{
    value,
    onChange:handleChange
    };
    
}
