import PropTypes from 'prop-types';

import Song from './children/Song';

import { BiTime, BiDotsHorizontalRounded } from 'react-icons/bi';
import { TbDots } from 'react-icons/tb';
import { FaPlay } from "react-icons/fa"
import { FiHeart, FiSearch } from "react-icons/fi"
import { HiArrowRight } from "react-icons/hi"

const SongsList = ({ tracks }) => {
   return (
      <div>
         <div className="mt-8">
            <div className="flex justify-between items-center">
               <div className="flex items-center">
                  <button className="w-[70px] h-[70px] mr-10 bg-[#65D36E] rounded-full flex justify-center items-center">
                     <FaPlay size="25px" />
                  </button>
                  <div className='flex items-center space-x-6'>
                     <button>
                        <FiHeart size="38px" color="white" />
                     </button>
                     <button className="p-1 h-fit rounded-full border-[3px]">
                        <HiArrowRight className="rotate-[90deg]" size="22px" color="white" />
                     </button>
                     <button className="w-10 h-10 rounded-full flex justify-center items-center gap-[5px]">
                        <TbDots size='40px' color='white' />
                     </button>
                  </div>
               </div>
               <div className="flex items-center gap-9">
                  <button>
                     <FiSearch size="22px" color="white" />
                  </button>
                  <select className="bg-transparent text-white text-[18px] font-medium">
                     <option>Custom order</option>
                     <option>Custom order</option>
                     <option>Custom order</option>
                  </select>
               </div>
            </div>
         </div>
         <table className="w-full mt-11">
            <thead className='block border-b-2 border-[#666666] py-2 mb-7'>
               <tr className="flex gap-5 text-base text-[#B3B3B3]">
                  <td className="flex-1 flex gap-5 items-center">
                     <span className='text-[22px]'>#</span>
                     <p>TITLE</p>
                  </td>
                  <td className="flex-1">ALBUM</td>
                  <td className="flex-1">DATE ADDED</td>
                  <td className="w-[99px] flex justify-end"><BiTime size='24px' /></td>
               </tr>
            </thead>
            <tbody className='space-y-4'>
               {
                  tracks.map((item, idx) => {
                     return <Song key={idx} track={item.track} index={idx + 1} />
                  })
               }
            </tbody>
         </table>
      </div>
   );
}

SongsList.propTypes = {
   tracks: PropTypes.array
}

export default SongsList;