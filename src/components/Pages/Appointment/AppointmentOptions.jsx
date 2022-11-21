import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AppointmentOptions = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            // const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AppointmentOptions;