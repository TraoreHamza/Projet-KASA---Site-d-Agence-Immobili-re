import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router';




const Logement = () => {
        const { identifiant } = useParams();
        const [details, setDetailLogement] = useState([]);
        
        const fetchDetailLogement = async () => {
            try {
                const response = await fetch(`https://titi.startwin.fr/logements/${identifiant}`);
                if (!response.ok) {
                throw new Error('Logement introuvable');
                }
                const data = await response.json();
                setDetailLogement(data);
                console.log(data);
            }   catch (error) {
                setError(error.message);
            }
        }
        useEffect(() => {
            fetchDetailLogement();
        }, [identifiant]);
        

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
        <div>
            <figure className='slider'>
                <img src={details.cover} alt={details.title} /> 
            </figure>
        </div>
    <section className='logement'>
        <article className='articleContainer'>
                <h2 className='title'>{details.title}</h2>
                <p className='location'>{details.location}</p>
            <div>
                {details.tags && details.tags.map(tags => (
                    <span>{tags}</span>
                ))}
            </div>
                <details className='details'><summary className='description'>Description<span></span></summary><p >{details.description}</p></details>
        </article>
        <article className='articleContainer2'>
                {details.host &&
                <div className='avatar'>
                    <h2 className='name'>{details.host.name}</h2>
                <figure className='figure'>
                    <img src={details.host.picture} alt={details.host.name} className='figure_image' />
                </figure>
                </div>
                }
                    <span>★★★✩✩</span>
                    {/* <p>{details.rating}</p> */}
                <details >
                    <summary className='equipement'>Equipements</summary>
                        {details.equipments && details.equipments.map(equipments => (
                        <p>{equipments}</p>
                        ))}
                </details>
        </article>
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

export default Logement;
