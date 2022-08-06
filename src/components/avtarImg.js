import React from 'react'
import { Avatar } from '@mui/material';
import TextTooltip from './tooltip'

const AvtarImg = (props) => {
    const { child, source, name } = props
    return (
        <>
            {child ? <span className='children'></span> : null}
            <Avatar src={source} className='user-img' />
            <TextTooltip value={name} />
        </>

    )
}

export default AvtarImg