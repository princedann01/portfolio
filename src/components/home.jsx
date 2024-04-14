import React from 'react';
import Dodo from '../images/dodo.png';

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow flex justify-center items-center bg-neutral-200">
        <div className="flex flex-col justify-center items-center text-center md:mx-16 lg:mx-24 xl:mx-32">
          <h1 className="text-5xl font-bold mb-4 md:mb-6 lg:mb-8">SIBO Daniel</h1>
          <h2 className=" text-2xl mb-6 md:mb-8 lg:mb-10">I'm a professional Full Stack Developer &amp; UI/UX Designer and electronics and telcommunication engineer</h2>
          <button className="rounded-full h-12 w-48 bg-gray-400 hover:bg-gray-500 text-white font-semibold tracking-wide transition duration-300 ease-in-out">
            <a href="/about">ABOUT ME</a>
          </button>
        </div>
        <div className="hidden lg:block w-1/2">
          <img src={Dodo} alt="Dodo" className="object-cover h-full" />
        </div>
      </div>

      <footer>
        <div className=" p-4 h-20 bg-slate-200 opacity-80 text-xl text-bold text-center text-black">
          <div className="copyright">
            &copy; Copyright <strong><span>Daniel</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="">Daniel campany</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
