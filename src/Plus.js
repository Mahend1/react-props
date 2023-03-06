import React from 'react';
import Child from './Child';

function Plus(props) {
    const {value} = props;
  return (
//    <Baby ButtonIncrement={props.ButtonIncrement} initialValue={props.initialValue} ButtonDecrement={props.ButtonDecrement}/>
<Child value={value}></Child>
)
}

export default Plus;
