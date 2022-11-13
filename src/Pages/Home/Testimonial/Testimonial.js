import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people3.png'
import person3 from '../../../assets/images/people1.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: person1
        },
        {
            id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: person2
        },
        {
            id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: person3
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>

                <div className=''>
                    <h4 className='text-xl text-primary font-bold'> Testimonial</h4>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                <figure>
                    <img src={quote} className='lg:w-48 w-24' alt="" />
                </figure>
            </div>


            <div className='grid gap-6 grid-cols-1 lg:grid-cols-3  md:grid-cols-2'>


                {
                    reviews.map(review => <Review key={review.id}
                        reviews={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonial;