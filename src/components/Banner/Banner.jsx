import React from 'react';
import { Link } from 'react-router';
import './banner.css';
const Banner = ({image, alt, text}) => {
    return (
    <>
    <figure className='image'>
        <img src={image} alt={alt} text={text} />
         {text && <h1 className='homeTitle'>{text}</h1>}
    </figure>
    </>
    )
}
export default Banner;