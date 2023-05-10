import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import Drawer from './Drawer';
import Homebanner from './Homebanner';
import Stats from './Stats';
import Artboard from '../../Shared/Artboard';
import SolarSystem from '../../Shared/SolarSystem';
import Testimonial from '../../Shared/Testimonial';

const Home = () => {
    return (
        <div className='mt-10'>
            <Homebanner/>
            <Categories/>
            <Stats/>
            <Drawer/>
            <Testimonial/>
            <Artboard/>
            <Footer/>
            <SolarSystem/>
        </div>
    );
};

export default Home;