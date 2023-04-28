import React from 'react';

const Homebanner = () => {
    return (
        <div className='px-10'>
            <div className="hero lg:min-h-screen rounded-xl" style={{ 
      backgroundImage: `url("https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb")`
       
    }}>
  <div class="hero-overlay bg-opacity-30"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
      <h1 class="mb-5 lg:text-4xl sm:text-2xl font-bold text-white">Hello there</h1>
      <p class="mb-5 lg:text-2xl sm:text-xl">Welcome to Possibilitarian World</p>
      <button class="btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Homebanner;