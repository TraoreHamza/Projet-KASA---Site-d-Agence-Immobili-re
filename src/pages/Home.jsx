import { useEffect, useState } from 'react'
import { Link } from 'react-router';
import PropertyCard from '../components/PropertyCard'

const Home = () => {

    const [logements, setLogements] = useState([]);
    
    const fetchLogements = async () => {
        try {
            const response = await fetch('https://titi.startwin.fr/logements');
            if (!response.ok) {
            throw new Error('Erreur lors du chargement des logements');
            }
            const data = await response.json();
            setLogements(data);
        } catch (error) {
            setError(error.message);
        }
    }
    useEffect(() => {
        fetchLogements();
    }, [])
    return (
        <>
        <header>
            <figure className='logo'>
                <img src="./src/assets/LOGO.webp" alt="logo" />
            </figure>
            <nav>
            <ul>
                <Link to={"/"} className='active'><li>Acceuil</li></Link>
                <Link to={"/A_Propos/"}><li>A Propos</li></Link>
            </ul>
            </nav>
        </header>
        <div>
            <figure className='image'>
                <img src="./src/assets/Image_1.webp" alt="l" />
                <h1 className='homeTitle'>Chez vous, partout et ailleurs</h1>
            </figure> 
        </div>    
        <div className="grid">
        {logements.map((logement) => (
            <PropertyCard key={logement.id} logement={logement} />
        ))}
        </div>
        <footer>
            <div>
                <figure className='footer_fig'> 
                    <img src="./src/assets/LOGO.webp" alt="logo" className='footer_fig--img'/>
                </figure>
                <p>2020 Kasa.All rights reserved</p>
            </div>
        </footer> 
        </>
    )
}


export default Home;