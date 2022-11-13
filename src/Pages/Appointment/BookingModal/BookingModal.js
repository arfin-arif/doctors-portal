import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatMent }) => {
    const { name, slots } = treatment // treatment is setAppointment
    const date = format(selectedDate, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            name: patientName,
            email,
            phone,
            slot
        }



        console.log(booking)
        setTreatMent(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10' >
                        <input type="text" value={date} disabled className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, index) => <option value={slot}
                                    key={index}>{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <br />
                        <input className='btn mt-4 text-center w-full ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;