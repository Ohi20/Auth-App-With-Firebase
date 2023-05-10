import React from 'react';

const Categories = () => {
    return (
      <section className='py-10 md:py-16'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-3xl sm:text-5xl font-bold mb-4'>What We Do</h2>
          <p className='text-lg sm:text-2xl mb-6 md:mb-14'>
          THE EXHIBITION IS DEDICATED TO AN ARTIST WHO WAS SIMULTANEOUSLY SUCCESSFUL AND INTERESTING IN SEVERAL GUISES
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>
          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-search text-4xl'></i>
              <h2 className="card-title">Action Painting</h2>
              <p>
              Action painting, sometimes called "gestural abstraction", is a style of painting in which paint is spontaneously dribbled, splashed or smeared onto the canvas. <br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-chat-left-dots text-4xl'></i>
              <h2 className="card-title">Oil Painting</h2>
              <p>
              Oil painting is the process of painting with pigments with a medium of drying oil as the binder.<br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-badge-ad text-4xl'></i>
              <h2 className="card-title">Impressionism</h2>
              <p>
              Impressionism was a 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition.<br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-card-checklist text-4xl'></i>
              <h2 className="card-title">Portrait Painting</h2>
              <p>
              Portrait Painting is a genre in painting, where the intent is to represent a specific human subject.<br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-wallet2 text-4xl'></i>
              <h2 className="card-title">Fine Art</h2>
              <p>
              In European academic traditions, fine art is made primarily for aesthetics or creative expression.<br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="card-body items-center text-center gap-4">
              <i className='bi bi-funnel text-4xl'></i>
              <h2 className="card-title">Pastel</h2>
              <p>
              A pastel is an art medium in a variety of forms including a stick, a square, a pebble, or a pan of color.<br className='hidden xl:inline' />supporting text below as a <br className='hidden xl:inline' /> natural content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Categories;