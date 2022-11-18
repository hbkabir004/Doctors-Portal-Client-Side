import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const {user} = useContext(AuthContext);
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            phone,
            email
        }
      
        // fetch(`http://localhost:5000/bookings`, {
        fetch(`https://doctors-portal-rho.vercel.app/bookings`, {
        method: 'POST',
        headers: {
        'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if(data.acknowledged){
            setTreatment(null);
            toast.success('Booking Confirmed!');
            refetch();
        }
        else{
            toast.error(data.message);
        }
        })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} placeholder={date} className="font-semibold input input-bordered w-full" />
                        <select name='slot' className="select select-bordered font-semibold">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" disabled/>
                        <input name='email' type="text" defaultValue={user?.email} placeholder="Email" className="input input-bordered w-full" disabled/>
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="SUBMIT" className='btn -btn-accent w-full w-max-xs' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;