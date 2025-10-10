import React from 'react';
import banner from '../../assets/hero.png'
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'

const Banner = () => {
    return (
        <div className="bg-gray-100 p-5 sm:px-10 sm:pt-10 sm:pb-0 flex flex-col items-center pb-0">
  <div className="w-full flex flex-col items-center">
    {/* Banner */}
    <div className="order-1 sm:order-3 w-full pb-0">
      <img
        src={banner}
        alt=""
        className="w-full h-auto max-h-[500px] object-contain sm:rounded-lg"
      />
    </div>

    {/* Text */}
    <div className="order-2 sm:order-1 text-center mb-5 sm:mb-10">
      <h1 className="hidden lg:inline-block text-6xl font-extrabold mb-5">
        We Build<br className='hidden lg:inline-block' />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span> Apps
      </h1>
      <p className="text-sm sm:text-base md:text-lg">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden lg:inline-block'/>
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    </div>

    {/* Buttons */}
    <div className="order-3 sm:order-2 flex gap-3 sm:gap-5 flex-wrap justify-center mb-10">
      <a
        href="https://play.google.com/store/apps/"
        target="_blank"
        className="btn btn-outline btn-primary  flex items-center justify-center hover:shadow-lg 
        transform transition-transform duration-300 hover:-translate-y-2 rounded-md"
      >
        <img src={playstore} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="ml-2">Google Play</span>
      </a>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        className="btn btn-outline btn-primary flex items-center justify-center hover:shadow-lg 
        transform transition-transform duration-300 hover:-translate-y-2 rounded-md"
      >
        <img src={appstore} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        <span className="ml-2">App Store</span>
      </a>
    </div>
  </div>
</div>


    );
};

export default Banner;