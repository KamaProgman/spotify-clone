import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import useService from '../hooks/service.hook'

import { MdHomeFilled } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

const Aside = () => {
   const [myPlaylists, setMyPlaylists] = useState([]);
   const navigate = useNavigate()
   const { token, loading, error, getPlaylists } = useService()

   useEffect(() => {
      getPlaylists('me/playlists?', 50)
         .then(res => setMyPlaylists(res?.items))
   }, [token]);

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, {
         state: { track: item?.tracks?.href, playlist: item, name: item.name, img: item?.images[0]?.url }
      })
   }

   return (
      <aside>
         <div className="pb-5">
            <nav>
               <ul className="flex flex-col gap-5 text-[#aaaaaa]">
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

                  <div className='mt-6'>
                     <div className='pb-6 border-b-[1px] bottom-solid border-[#282828]'>
                        <NavLink
                           end
                           style={({ isActive }) => ({ color: isActive ? '#ffffff' : 'inherit' })}
                           to='create-playlist'
                           className='flex items-center w-fit mb-5'>
                           <div className='w-[50px]'>
                              <BsPlusSquareFill size="32px" color='inherit' />
                           </div>
                           <span className=' text-lg font-bold'>Create Playlist</span>
                        </NavLink>
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
                     </div>
                     <ul className="pt-6 flex flex-col gap-[18px]">
                        {
                           myPlaylists?.map((item) => {
                              return <div key={item.id} onClick={() => goToPlaylist(item)}>
                                 <p className='text-lg font-medium text-[#B3B3B3] cursor-default hover:text-white'>{item.name}</p>
                              </div>
                           })
                        }
                     </ul>
                  </div>
               </ul>
            </nav>
         </div>
      </aside>
   );
}

export default Aside;