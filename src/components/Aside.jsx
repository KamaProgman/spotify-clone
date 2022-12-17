
import { Link, NavLink } from 'react-router-dom'

import { MdHomeFilled } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

const Aside = () => {
   return (
      <aside>
         <div className="border-b-[1px] bottom-solid border-[#282828] pb-5">
            <nav>
               <ul className="flex flex-col gap-6 text-[#aaaaaa]">
                  <li>
                     <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                        to='/'
                        className='flex items-center w-fit'>
                        <div className='w-[50px]'>
                           <MdHomeFilled size='37px' color='inherit' />
                        </div>
                        <span className='text-lg font-bold'>Home</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                        to='search'
                        className='flex items-center w-fit'>
                        <div className='w-[50px]'>
                           <FiSearch size="35px" color='inherit' />
                        </div>
                        <span className='text-lg font-bold'>Search</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                        to='library'
                        className='flex items-center w-fit'>
                        <div className='w-[50px]'>
                           <VscLibrary size="32px" color='inherit' />
                        </div>
                        <span className='text-lg font-bold'>Your Library</span>
                     </NavLink>
                  </li>
                  <li className='mt-8'>
                     <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                        to='create-playlist'
                        className='flex items-center w-fit'>
                        <div className='w-[50px]'>
                           <BsPlusSquareFill size="32px" color='inherit' />
                        </div>
                        <span className=' text-lg font-bold'>Create Playlist</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                        to='liked-songs'
                        className='flex items-center w-fit'>
                        <div className='w-[50px]'>
                           <div className="p-[7px] w-fit bg-gradient-to-r from-[#3333A3] to-[#eeeeee] rounded-[4px]">
                              <FaHeart size="18px" color='white' />
                           </div>
                        </div>
                        <span className='text-lg font-bold'>Liked Songs</span>
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="pt-[22px] flex flex-col gap-[18px]">
            <Link to='playlist'>
               <p className='text-[#B3B3B3] text-lg truncate '>Chill Mix</p>
            </Link>
            <Link to='playlist'>
               <p className='text-[#B3B3B3] text-lg truncate '>Happy Hits!</p>
            </Link>
            <Link to='playlist'>
               <p className='text-[#B3B3B3] text-lg truncate '>Chillhop Music</p>
            </Link>
         </div>
      </aside>
   );
}

export default Aside;