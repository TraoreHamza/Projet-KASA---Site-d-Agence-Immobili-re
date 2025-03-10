import React from 'react';
import { Link } from 'react-router';

const Banner = ({image, alt, text}) => {
    return (
    <>
        <img src={image} alt={alt} text={text} />
         {text && <h1 className='homeTitle'>{text}</h1>}
    </>
    )
}
export default Banner;