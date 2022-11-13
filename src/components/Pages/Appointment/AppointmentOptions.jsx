import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AppointmentOptions = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch(`appointmentOptions.json`)
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <section className='my-10'>
            <h1 className='text-xl font-bold text-center text-secondary'>Available appointment on: {format(selectedDate, 'PP')}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }
        </section>
    );
};

export default AppointmentOptions;