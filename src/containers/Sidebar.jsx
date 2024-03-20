'use client';
import { FaBell } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { useState } from 'react';
import navLinks from '@/data/sidebar';
import { MdOutlineArrowRight } from "react-icons/md";

const Sidebar = ({ className = '' }) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav
      className={`${visible ? 'absolute lg:relative' : 'absolute'
        } lg:w-3/12 h-full bg-[#172554] w-[50%] z-30  transition-all duration-200 ${visible ? 'left-0' : '-left-[50%] lg:-left-[25%] text-white'
        } ${className}`}
    >
      <header className='flex justify-between p-4 py-5 mb-3 text-white border-b border-white/50'>
        <div className='flex items-center gap-2'>
          <HiUser className='text-2xl' />
          Hello, User
        </div>

        <div className="relative">
          <FaBell className='text-2xl' />
          <div className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></div>
        </div>
      </header>

      <main className='h-full'>
        <div className="w-full flex flex-col items-start text-white py-7 gap-y-3 ">
          <div className="flex items-center justify-between w-full bg-blue-900 px-6 pl-8 py-2 ">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1 className="md:text-lg text-md ">Discussion Forum</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-2 px-6 pl-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 className="md:text-lg text-md">Market stories</h1>
          </div>

          <div className="flex flex-col gap-y-5 mt-4 pl-10">
            {navLinks.map((link, index) => (
              <div key={index}>
                <h1 className="md:text-lg text-md px-6 pl-6">{link}</h1>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Opening Closing Button for sidebar */}
      <button
        onClick={() => setVisible((prev) => !prev)}
        className='absolute text-lg top-[40vh] right-0 z-50 p-1 py-5 transition-all duration-200 translate-x-full rounded-r-md bg-[#172554] hover:bg-accent-hover text-white hover:scale-105 '
      >
        <MdOutlineArrowRight size={20} />
      </button>
    </nav>
  );
};

export default Sidebar;
