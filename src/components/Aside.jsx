

import { MdHomeFilled } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

const Aside = () => {
   return (
      <aside className="max-w-[310px] h-full fixed top-0 left-0 bg-black px-[30px] pt-[70px] flex-1 pb-4">
         <div className="border-b-[1px] bottom-solid border-[#282828] pb-5">
            <div className="flex flex-col gap-6 mb-[50px]">
               <a href="#" className='flex items-center w-fit'>
                  <div className='w-[50px]'>
                     <MdHomeFilled size='37px' color='#aaaaaa' />
                  </div>
                  <span className='text-[#aaaaaa] text-lg font-bold'>Home</span>
               </a>
               <a href="#" className='flex items-center w-fit'>
                  <div className='w-[50px]'>
                     <FiSearch size="35px" color='#aaaaaa' />
                  </div>
                  <span className='text-[#aaaaaa] text-lg font-bold'>Search</span>
               </a>
               <a href="#" className='flex items-center w-fit'>
                  <div className='w-[50px]'>
                     <VscLibrary size="32px" color='#aaaaaa' />
                  </div>
                  <span className='text-[#aaaaaa] text-lg font-bold'>Your Library</span>
               </a>
            </div>

            <div className="flex flex-col gap-6">
               <a href="#" className='flex items-center w-fit'>
                  <div className='w-[50px]'>
                     <BsPlusSquareFill size="32px" color='#aaaaaa' />
                  </div>
                  <span className='text-[#aaaaaa] text-lg font-bold'>Create Playlist</span>
               </a>
               <a href="#" className='flex items-center w-fit'>
                  <div className='w-[50px]'>
                     <div className="p-[7px] w-fit bg-gradient-to-r from-[#3333A3] to-[#eeeeee] rounded-[4px]">
                        <FaHeart size="18px" color='#aaaaaa' />
                     </div>
                  </div>
                  <span className='text-[#aaaaaa] text-lg font-bold'>Liked Songs</span>
               </a>
            </div>
         </div>
         <div className="pt-[22px] flex flex-col gap-[18px]">
            <p className='text-[#B3B3B3] text-lg truncate '>Chill Mix</p>
            <p className='text-[#B3B3B3] text-lg truncate '>Happy Hits!</p>
            <p className='text-[#B3B3B3] text-lg truncate '>Anime Lofi & Chillhop Music</p>
         </div>
      </aside>
   );
}

export default Aside;