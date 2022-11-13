import React from 'react';
import fluoridet from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import OurServicesCard from './OurServicesCard';


const OurServices = () => {


    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing.',
            icon: fluoridet,

        },
        {
            id: 2,
            name: 'Caving Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
            icon: cavity,

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing.',
            icon: whitening,

        },
    ]

    return (
        <div className='mt-24'>

            <div className='text-center'>
                <h3 className='text-xl'> Our Services</h3>
                <h2 className='text-3xl'>Service We Provide</h2>
            </div>

            <div className='grid mt-16 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <OurServicesCard
                        key={service.id}
                        service={service}
                    ></OurServicesCard>)
                }
            </div>
        </div>
    );
};

export default OurServices;