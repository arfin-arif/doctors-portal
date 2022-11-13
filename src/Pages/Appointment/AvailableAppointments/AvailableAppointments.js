import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentSlots, setAppointmentSlot] = useState([]);
    const [treatment, setTreatMent] = useState(null);
    useEffect(() => {
        fetch('appointmentDataSlot.json')
            .then(res => res.json())
            .then(data => setAppointmentSlot(data))
    }, [])
    return (
        <section className='mt-16'>
            <p className='text-secondary text-center font-bold'>Available appointment on {format(selectedDate, "PP")}  </p>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                {
                    appointmentSlots.map(appointmentSlot => <AppointmentOptions key={appointmentSlot._id}
                        appointmentSlot={appointmentSlot}
                        setTreatMent={setTreatMent} />)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    setTreatMent={setTreatMent}
                    selectedDate={selectedDate}
                    treatment={treatment}></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;