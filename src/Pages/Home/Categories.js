import React from 'react';

const Categories = () => {
    return (
        <div className='my-10 flex justify-center items-center'>
            <div>
            <div className='text-center text-xl font-bold'>
                <h2>Top Categories</h2>
            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div class="card w-50 h-100 bg-base-100 shadow-xl image-full">
  <figure><img className='w-96 h-100' src="https://i.pinimg.com/originals/c5/60/9b/c5609b3b87be13f55fd90d3967c180b4.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Amazing!</h2>
    <p>Your Evilness dies with you</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-50 h-100 bg-base-100 shadow-xl image-full">
  <figure><img className='w-96 h-100' src="https://wallpapercave.com/wp/wp4035070.jpg" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Amazing!</h2>
    <p>Be furious! Is the only way</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-50 h-100 bg-base-100 shadow-xl image-full">
  <figure><img className='w-96 h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MNl3oL4mpgjMqcdoWvPj3wVDm-vNNeiF1g&usqp=CAU" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Amazing!</h2>
    <p>Your own bad energy would be your ondoing</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
            </div>
        </div>
    );
};

export default Categories;