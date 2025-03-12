import { useState } from 'react';
import './style.scss';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='accordion'>
            <div className="accordion__top" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img className={isOpen ? "active" : ""} src="/top.svg" alt="Fleche" />
            </div>
            <div className={"accordion__bottom" + (isOpen ? " active" : "")}>
                {Array.isArray(content) ? content.map(word => (
                    <p>{word}</p>
                )) : content}
            </div>
        </div>
    );
};

export default Accordion;