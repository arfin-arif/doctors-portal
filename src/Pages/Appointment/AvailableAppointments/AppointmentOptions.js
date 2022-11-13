import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOptions = ({ appointmentSlot, setTreatMent }) => {
    const { slots, name } = appointmentSlot;
    return (
        <div className="card  shadow-xl">
            <div className="card-body text-center mt-4">
                <h2 className="text-center text-2xl text-secondary font-bold ">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'No Slots Available'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                <div className="card-actions justify-center">

                    <PrimaryButton><label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatMent(appointmentSlot)}
                    >Book Appointment</label></PrimaryButton>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;