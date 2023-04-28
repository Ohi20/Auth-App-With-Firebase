import React from 'react';
import Footer from '../../Shared/Footer';
import Categories from './Categories';
import Drawer from './Drawer';
import Homebanner from './Homebanner';
import Stats from './Stats';
import Artboard from '../../Shared/Artboard';

const Home = () => {
    return (
        <div className='mt-10'>
            <Homebanner/>
            <Categories/>
            <Stats/>
            <Drawer/>
            <Artboard/>
            <Footer/>
        </div>
    );
};

export default Home;