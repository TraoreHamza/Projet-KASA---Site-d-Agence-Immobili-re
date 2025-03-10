
import { Link } from 'react-router';

const D_A_Propos = () => {
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
        <article className='propos'>
        <div>
            <figure className='figure'>
                <img src="../src/assets/Image_2.webp" alt="l" />
            </figure> 
        </div> 
            <div className='divDetails'>
                <details><summary className='details'>Fiabilite</summary></details>
                <details><summary className='details'>Respect</summary></details>
                <details><summary className='details'>Service</summary></details>
                <details><summary className='details'>Sécurité</summary></details>
            </div>
        </article>
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


export default D_A_Propos;