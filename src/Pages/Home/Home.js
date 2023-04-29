import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import Drawer from './Drawer';
import Homebanner from './Homebanner';
import Stats from './Stats';
import Artboard from '../../Shared/Artboard';
import Herosection from '../../Shared/Herosection';

const Home = () => {
    return (
        <div className='mt-10'>
            <Homebanner/>
            <Herosection/>
            <Categories/>
            <Stats/>
            <Drawer/>
            <Artboard/>
            <Footer/>
        </div>
    );
};

export default Home;