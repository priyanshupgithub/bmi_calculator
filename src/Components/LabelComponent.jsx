import React from 'react'
import InputComponent from './InputComponent';

const LabelComponent = (props) => {
  // console.log(props);
  return (
    <>
    <div className='flex flex-col p-2 justify-center items-center'>
        <label className='m-2 font-bold'>Enter your {props.label}</label>
        <InputComponent value = {props.value} label={props.label} onChange={props.onChange} />
    </div>
    </>
  )
}

export default LabelComponent;