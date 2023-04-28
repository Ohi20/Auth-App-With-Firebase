import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import Drawer from './Drawer';
import Homebanner from './Homebanner';
import Stats from './Stats';

const Home = () => {
    return (
        <div className='mt-10'>
            <Homebanner/>
            <Categories/>
            <Stats/>
            <Drawer/>
            <Footer/>
        </div>
    );
};

export default Home;