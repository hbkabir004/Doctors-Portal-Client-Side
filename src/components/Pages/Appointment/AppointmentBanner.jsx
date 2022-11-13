import React from 'react';
import { DayPicker } from 'react-day-picker';
import banner from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='hero bg-contain  lg:w-[1363px] lg:h-96' style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl lg:mb-0 mb-6" alt='' />
                <div className='shadow-lg p-2 rounded-xl lg:mr-10'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;