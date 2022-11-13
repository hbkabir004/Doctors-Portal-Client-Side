import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import GetAppointment from './GetAppointment';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <GetAppointment></GetAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;