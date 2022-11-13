import React from 'react';
import Banner from './Banner';
import GetAppointment from './GetAppointment';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <GetAppointment></GetAppointment>
        </div>
    );
};

export default Home;