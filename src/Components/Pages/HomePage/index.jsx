import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from './Banner';
import Second from './SecondSection';
import ThirdSection from './ThirdSection';

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Second/>
            <ThirdSection/>
            <Footer/>
        </div>
    );
};

export default HomePage;