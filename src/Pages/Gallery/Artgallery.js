import React from 'react';
import Footer2 from '../../Shared/Footer2';
import "../Gallery/Artgallery.css";
import gallery1 from "../../Assets/images/gallery1.jpg";
import gallery2 from "../../Assets/images/gallery2.jpg";
import gallery3 from "../../Assets/images/gallery3.jpg";
import gallery4 from "../../Assets/images/gallery4.jpg";

const Artgallery = () => {
    return (
        <div className='px-12 my-12'>
            <div class="carousel lg:min-h-screen rounded-lg">
  <div id="item1" class="carousel-item">
    <img src={gallery1} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item">
    <img src={gallery2} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={gallery3} class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src={gallery4} class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
<Footer2></Footer2>
        </div>
    );
};

export default Artgallery;