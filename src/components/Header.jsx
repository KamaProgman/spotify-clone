import { useNavigate } from 'react-router-dom'

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

import ava from '../resources/ava.svg'

const Header = ({ isShown }) => {
   const navigate = useNavigate()

   return (
      <header className={` ${isShown ? 'isShown' : null}`}>
         <div className="flex items-center">
            <button className="p-[4px] bg-[#00000090] rounded-full mr-5"
               onClick={() => navigate(-1)}
            >
               <IoIosArrowBack size='32' />
            </button>
            <button className=" p-[4px] bg-[#00000090] rounded-full"
               onClick={() => navigate(1)}
            >
               <IoIosArrowForward size='32' />
            </button>
         </div>
         <div className="max-w-[190px] flex items-center bg-[#00000080] rounded-3xl p-1 cursor-pointer">
            <img src={ava} alt="ava" />
            <span className="mx-3 font-semibold">davedirect</span>
            <MdArrowDropDown size='30px' />
         </div>
      </header>
   );
}

export default Header;