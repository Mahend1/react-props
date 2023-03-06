import React from 'react'
import Baby from './Baby'

export default function Child(props) {
  const {value} = props;
  return (
       <div>
     <Baby value={value}></Baby>
      {/* <Baby ButtonIncrement={props.ButtonIncrement} initialValue={props.initialValue} ButtonDecrement={props.ButtonDecrement}/> */}
    </div>

  )
}
