import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import { FiSearch, FiSettings } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import ava from '../resources/ava.svg'

const Header = ({ isShown }) => {
   const location = useLocation()
   const navigate = useNavigate()

   // Temporary function
   const onGetOut = () => {
      localStorage.clear()
      window.location = window.location.href;
   }

   return (
      <header className={` ${isShown ? 'isShown' : null}`}>
         <div className="flex items-center">
            <button className="p-[4px] bg-[#00000090] rounded-full mr-5"
               onClick={() => navigate(-1)}
            >
               <IoIosArrowBack size='32' />
            </button>
            <button className="p-[4px] bg-[#00000090] rounded-full mr-5"
               onClick={() => navigate(1)}
            >
               <IoIosArrowForward size='32' />
            </button>

            {location.pathname === "/search" ? (
               <label htmlFor="search">
                  <div className="w-full px-2 flex items-center gap-2 rounded-full bg-white overflow-hidden cursor-text" >
                     <FiSearch size="25" color="black" />
                     <input
                        className="w-[300px] py-2.5 text-[16px] text-black"
                        placeholder="What do you want listen to?"
                        id='search'
                        type="text"
                     />
                  </div>
               </label>
            ) : null}
         </div>
         <div className="max-w-[190px] flex items-center bg-[#00000080] rounded-3xl p-1 cursor-pointer">
            <img src={ava} alt="ava" />
            <span className="mx-3 font-semibold" onClick={onGetOut}>davedirect</span>
            <MdArrowDropDown size='30px' />
         </div>
      </header>
   );
}

export default Header;