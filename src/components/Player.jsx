import { useState } from "react";

import { FiHeart } from "react-icons/fi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { BiBluetooth } from "react-icons/bi";
import { FaPlayCircle, FaPauseCircle, FaRandom } from "react-icons/fa";
import { TbRepeat, TbRepeatOnce, TbDevices2, TbVolume, TbVolume2, TbVolume3 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";

import playlist from '../resources/playlist2.png'

const Player = () => {
   const [play, setPlay] = useState(false)
   // const [transform, setTransform] = useState(true)

   const onPlay = () => {
      setPlay(!play)
   }

   return (
      <div className="player">
         <div className="flex justify-between max-lg:flex-col w-[70%] max-lg:w-full">
            <div className="flex items-center max-lg:justify-between max-sm:w-full">
               <div className="flex gap-3">
                  <div className="w-14 h-14">
                     <img className="w-full" src={playlist} alt="" />
                  </div>

                  <div className="max-lg:flex">
                     <p className="text-[18px] font-medium"> Miyagi & Эндшпиль</p>
                     <p className="text-[#B3B3B3] font-medium">When i Win</p>
                  </div>
               </div>
               <button className="ml-9"><FiHeart size="20" /></button>
            </div>

            <div className="flex flex-col justify-between items-center max-w-xl max-lg:max-w-none w-full h-fit">
               <div className="max-lg:hidden flex justify-between items-center max-w-[200px] w-full">
                  <button><FaRandom size="20" color="#ffffff" /></button>
                  <button><IoMdSkipBackward size="22px" color="#ffffff" /></button>
                  <button onClick={onPlay}>
                     {
                        !play ? <FaPlayCircle size="40px" color="#ffffff" /> : <FaPauseCircle size="40px" color="#ffffff" />
                     }
                  </button>
                  <button><IoMdSkipForward size="22px" color="#ffffff" /></button>
                  <button><TbRepeat size="22" color="#ffffff" /></button>
               </div>
               <div className="w-[620px] mt-2">
                  <audio className="w-full " src="../music/baby-mama.m4a" controls></audio>
               </div>
            </div>
         </div>

         <div className="max-lg:hidden flex items-center gap-2.5">
            <button><HiOutlineQueueList size="24px" color="#ffffff70" /></button>
            <button><TbDevices2 size="24px" color="#ffffff70" /></button>
            <button><TbVolume size="24px" color="#ffffff70" /></button>
            <div className="w-[120px] h-[5px] bg-[#ffffff50] rounded-md overflow-hidden">
               <div className="w-5/6 h-full bg-white rounded-md"></div>
            </div>
         </div>
      </div>
   );
}

export default Player;