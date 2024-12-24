

import React  from "react";

const InputComponent = (props)=>{
    console.log(props)
    return(
        <>
        <input className="w-full m-auto rounded-md " value = {props.value} type="number" placeholder={`Enter ${props.label}`} onChange={props.onChange} />
        </>
    )
}
export default InputComponent;