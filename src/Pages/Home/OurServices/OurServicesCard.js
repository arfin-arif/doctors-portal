import React from 'react';

const OurServicesCard = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div className={`card  shadow-xl  `}>
            <figure className='px-10 pt-10'>
                <img src={icon} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurServicesCard;