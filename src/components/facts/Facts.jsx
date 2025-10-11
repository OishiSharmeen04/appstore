import React from 'react';

const Facts = () => {
    return (

        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 sm:px-8 py-10 sm:py-14">
  <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-8">
    Trusted by Millions, Built for You
  </h1>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
   
    <div className="p-6 text-center w-full sm:w-1/3">
      <p className="mt-2 text-sm opacity-90">Total Downloads</p>
      <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold">29.6M</h4>
      <p className="mt-2 text-xs sm:text-sm opacity-80">21% more than last month</p>
    </div>

    
    <div className="p-6 text-center w-full sm:w-1/3">
      <p className="mt-2 text-sm opacity-90">Total Reviews</p>
      <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold">906K</h4>
      <p className="mt-2 text-xs sm:text-sm opacity-80">46% more than last month</p>
    </div>

    
    <div className="p-6 text-center w-full sm:w-1/3">
      <p className="mt-2 text-sm opacity-90">Active Apps</p>
      <h4 className="text-4xl sm:text-5xl md:text-6xl font-semibold">132+</h4>
      <p className="mt-2 text-xs sm:text-sm opacity-80">31 more will launch</p>
    </div>
  </div>
</div>

    );
};

export default Facts;