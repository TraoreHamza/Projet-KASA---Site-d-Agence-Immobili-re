import { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Banner from '../../components/Banner/Banner';

import './home.scss'
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
        <Banner image="./src/assets/Image_1.webp" alt="code" text="Chez vous, partout et ailleurs" />
        <div className="home">
            <div className="home__list">
                {logements.map(logement => (
                    <Link to={`/logement/${logement.id}`} key={logement.id} className="home__list-item">
                        <img src={logement.cover} alt={logement.title} />
                        <div className="home__list-item-absolute">
                            <h2>{logement.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>  
        </div>
        </>
    )
}


export default Home;