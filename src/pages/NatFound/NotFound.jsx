import { useEffect, useState } from 'react'
import { Link } from 'react-router';

import './notFound.css'

const D_404 = () => {
    return (
        <>
        <header>
            <figure className='logo'>
                <img src="../src/assets/LOGO.webp" alt="l" />
            </figure>
            <nav>
            <ul>
                <Link to={"/"} className='active'><li>Acceuil</li></Link>
                <Link to={"/a_propos/"}><li>A Propos</li></Link>
            </ul>
            </nav>
        </header>
        <section className='page'>
            <h1 className='page_404'>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"}>Retourner vers la page d'acceuil</Link>
        </section>
        <footer>
            <div>
                <figure className='footer_fig'> 
                    <img src="../src/assets/LOGO.webp" alt="logo" className='footer_fig--img'/>
                </figure>
                <p>2020 Kasa.All rights reserved</p>
            </div>
        </footer>
        </>
    )
}


export default D_404;