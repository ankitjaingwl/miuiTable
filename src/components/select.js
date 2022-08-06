import React from 'react'
import { NativeSelect } from '@mui/material';

const Select = (props) => {
    const {value} = props
  return (
    <NativeSelect
          defaultValue={value}
        >
          <option value={"male"}>M</option>
          <option value={"female"}>F</option>
          <option value={"other"}>O</option>
        </NativeSelect>
  )
}

export default Select