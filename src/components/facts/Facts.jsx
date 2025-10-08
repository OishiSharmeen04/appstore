import React from 'react';

const Facts = () => {
    return (

        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] max-w-6xl mx-auto text-white p-10'>
            <h1 className='font-extrabold text-4xl text-center'>Trusted by Millions, Built for You</h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="p-6 text-center">
                <p className="mt-2 text-sm">Total Downloads</p>
              <h4 className="text-6xl font-semibold">29.6M</h4>
              <p className="mt-2 text-sm">21% more than last month</p>
            </div>

            <div className="p-6 text-center">
                <p className="mt-2 text-sm">Total Reviews</p>
              <h4 className="text-6xl font-semibold">906K</h4>
              <p className="mt-2 text-sm">46% more than last month</p>
            </div>

            <div className="p-6 text-center">
                <p className="mt-2 text-sm">Active Apps</p>
              <h4 className="text-6xl font-semibold text-[">132+</h4>
              <p className="mt-2 text-sm">31 more will Launch</p>
            </div>
          </div>
            

        </div>

    );
};

export default Facts;