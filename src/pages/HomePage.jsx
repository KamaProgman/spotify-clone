import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../hooks/service.hook';

import PlaylistList from '../components/PlaylistList';
import PlaylistSkeleton from '../components/Skeleton';

import { IoPlaySharp } from "react-icons/io5"

const HomePage = () => {
   const [data, setData] = useState([]);
   const navigate = useNavigate()

   const { token, loading, error, getMyPlaylists } = useService()

   // Getting playlists from server
   useEffect(() => {
      getMyPlaylists().then(res => setData(res?.items))
   }, [token]);


   // go to playlist page after clicking
   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, { state: item })
   }

   // This items is not used in other components.
   function renderItems(arr) {
      const items = arr?.map((item, idx) => {
         return (
            <div key={idx} className="playlist" onClick={() => goToPlaylist(item)}>
               <img src={item.images[0]?.url} alt={item.name} className='max-w-[82px] h-full drop-shadow-md' />
               <div className="ml-[21px] flex items-center flex-auto">
                  <p className="font-bold text-xl text-white">{item.name}</p>
               </div>

               <button className="playBtn">
                  <IoPlaySharp size="25px" />
               </button>
            </div>

         )
      })

      return (
         <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4">
            {items}
         </div>
      )
   }

   const items = renderItems(data)
   const loader = loading ? <PlaylistSkeleton /> : null;
   const errorMessage = error ? <p className='text-red-600 text-xl'>ERROR</p> : null;

   return (
      <section className="mt-[30px]">
         <div>
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            {items}
            {loader}
            {errorMessage}
         </div>
         <PlaylistList />
      </section>
   );
}

export default HomePage;