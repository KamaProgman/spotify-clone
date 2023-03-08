import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import searchContext from "../contexts/searchContext";
import useService from "../hooks/service.hook";

import { FiSearch, FiSettings } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const Header = ({ isShown }) => {
   const [user, setUser] = useState({});
   const location = useLocation()
   const navigate = useNavigate()
   const { searchText, changeSearchText } = useContext(searchContext)
   const { getUser, token } = useService()

   useEffect(() => {
      getUser().then(res => setUser(res))
   }, [token]);

   useEffect(() => {
      changeSearchText('')
   }, [location]);

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
                  <div className="w-full pl-2 flex items-center gap-2 rounded-full bg-white overflow-hidden cursor-text" >
                     <FiSearch size="25" color="black" />
                     <input
                        className="w-[300px] py-2.5 text-[16px] text-black border-none"
                        placeholder="What do you want listen to?"
                        id='search'
                        type="text"
                        onInput={(e) => changeSearchText(e.target.value)}
                     />
                  </div>
               </label>
            ) : null}
         </div>
         <div className="flex items-center bg-[#00000080] rounded-3xl p-1 cursor-pointer">
            <div className="w-9 rounded-full overflow-hidden">
               {
                  user?.images?.length ?
                     <img src={user?.images[0]?.url} alt="ava" className="w-full" />
                     :
                     <svg className="w-full text-[#ffffff40] dark:text-[#ffffff50]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
                     </svg>
               }
            </div>
            <span className="mx-3 font-semibold" onClick={onGetOut}>{user?.display_name}</span>
            <MdArrowDropDown size='30px' />
         </div>
      </header>
   );
}

export default Header;