import React from 'react';
import { Link } from 'react-router-dom';

const Homebanner = () => {
    return (
      <section>
      <div className='container'>
        <div className="hero h-96 md:h-[500px] rounded-box overflow-hidden" style={{ backgroundImage: `url("https://webneel.com/wallpaper/sites/default/files/images/03-2014/5-art-wallpaper.jpg")` }}>
          <div className="hero-overlay bg-opacity-50 bg-secondary"></div>
          <div className="hero-content text-center text-secondary-content">
            <div className="max-w-lg">
              <h1 className="mb-5 sm:mb-7 text-4xl sm:text-5xl font-bold">
                Let's make your
                art mind a success
              </h1>
              <p className="mb-5 sm:mb-7 sm:text-lg">
                Welcome to possibilitarian world
              </p>
              <button className="btn btn-warning sm:btn-wide"><Link to='/purchase'>Get Started</Link></button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Homebanner;