
import './about.scss';
import Banner from '../../components/Banner/Banner';
import Accordion from '../../components/Accordion/Accordion';

const About = () => {
    return (
        <>
        <Banner image="/montagne.webp" alt="montagne" />
        <div className='about'>
            <div className="about__content">
                <Accordion title="Fiabilité" content="lorem ispum" />
                <Accordion title="Respect" content="lorem ispum" />
                <Accordion title="Service" content="lorem ispum" />
                <Accordion title="Sécurité" content="lorem ispum" />
            </div>
        </div>
        </>
    );
};

export default About;