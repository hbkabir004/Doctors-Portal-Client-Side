import React from 'react';
import Banner from './Banner';
import Extra from './Extra';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Extra></Extra>
        </div>
    );
};

export default Home;