import React from 'react';

const Stats = () => {
    return (
        <div className='text-center my-10'>
            <div>
                <h2 className='text-xl font-bold'>Summery</h2>
            </div>
            <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat">
    <div class="stat-title">Sold</div>
    <div class="stat-value">200</div>
    <div class="stat-desc">2022</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Interested</div>
    <div class="stat-value">4,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Stats;