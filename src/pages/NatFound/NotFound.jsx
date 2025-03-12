import { useEffect, useState } from 'react'
import { Link } from 'react-router';

import './notFound.css'

const D_404 = () => {
    return (
        <>
        <section className='page'>
            <h1 className='page_404'>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>Retourner vers la page d'acceuil</Link>
        </section>
        </>
    )
}


export default D_404;