import React, { useRef, useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';

const TextTooltip = (props) => {
    const { value } = props
    const textElementRef = useRef();

    const [hoverStatus, setHover] = useState(false);
    const compareSize = () => {
        const compare =
            textElementRef.current.scrollWidth > textElementRef.current.clientWidth;
        setHover(compare);
    };

    useEffect(() => {
        compareSize();
        window.addEventListener('resize', compareSize);
    }, []);

    useEffect(() => () => {
        window.removeEventListener('resize', compareSize);
    }, []);

    return (
        <Tooltip
            title={value}
            interactive
            disableHoverListener={!hoverStatus}
            style={{ fontSize: '2em' }}
        >
            <div
                ref={textElementRef}
                style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}
            >
                {value}
            </div>
        </Tooltip>
    )
}

export default TextTooltip