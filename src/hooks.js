import { useState } from "react";

// handle text input field change
export function useFormInput(initialValue){
   const[value,setValue]=useState(initialValue);

  function handleInputChange(e){
    setValue(e.target.value);
  } 
  return{
    value,
    onChange:handleInputChange
  };
}

// handle checked input field change
export function useFormInputChecked(initialValue){
  const[checked,setChecked]=useState(initialValue);

  function handleInputChecked(e){
     setChecked(e.target.checked);
  } 
  return{
    checked,
    onChange:handleInputChecked
  };
}



// function handleChange(e){
//    console.log("e.target.checked=",e.target.checked);
//    console.log("e.target.value=",e.target.value);
//    const value=e.target.className==="todoToggle"?e.target.checked:e.target.value;
//   setValue(value);
// } 