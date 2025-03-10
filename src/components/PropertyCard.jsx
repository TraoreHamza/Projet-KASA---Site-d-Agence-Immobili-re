import React from 'react';
import { Link } from 'react-router';

const PropertyCard = ({logement}) => {
    return (
    <>
        <div key={logement.id} className="grid_logement">
            <Link to={`/logement/${logement.id}`}>
            <figure>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
            </figure>
            </Link>
        </div>  
    </>
    )
}

export default PropertyCard;