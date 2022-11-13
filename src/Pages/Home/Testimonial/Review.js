import React from 'react';

const Review = ({ reviews }) => {

    const { name, image, review, location } = reviews
    return (
        <div className="card  shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions mt-5">
                    <img src={image} alt="" className='ring ring-primary avatar rounded-full' />
                    <div>
                        <p>{name}</p>

                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;