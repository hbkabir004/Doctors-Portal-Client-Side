import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" disabled value={date} placeholder={date} className="font-semibold input input-bordered w-full" />
                        <select name='slot' className="select select-bordered font-semibold">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" value="SUBMIT" className='btn -btn-accent w-full w-max-xs' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;