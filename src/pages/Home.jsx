import { useState, useEffect } from 'react';
import useService from '../hooks/service.hook';

import PlaylistList from '../components/PlaylistList';
import PlaylistSkeleton from '../components/Skeleton';

import MyPLaylist from '../components/children/MyPlaylist';

const Home = () => {
   const [myPlaylists, setMyPlaylists] = useState([]);
   const [greeting, setGreeting] = useState('Hello');

   const { token, loading, error, getPlaylists, getMyPlaylists } = useService()

   // Getting playlists from server
   useEffect(() => {
      getMyPlaylists().then(res => setMyPlaylists(res?.items))
   }, [token]);

   // Setting greeting
   useEffect(() => {
      let time = new Date().getHours()

      if (time > 18) {
         setGreeting("Good evening")
      } else if (time > 12) {
         setGreeting("Good afternoon")
      } else if (time >= 6) {
         setGreeting("Good morning")
      } else if (time >= 0) {
         setGreeting("Good night")
      }
   }, [])

   const skeleton = loading ? <PlaylistSkeleton /> : null;
   const errorMessage = error ? <p className='text-red-600 text-xl'>ERROR</p> : null;

   return (
      <section className="mt-[30px]">
         <div>
            <h1 className="font-bold text-[39px] text-white mb-[30px]">{greeting}</h1>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4">
               {
                  myPlaylists?.map((item) => (
                     <MyPLaylist key={item.id} item={item} />
                  ))
               }
            </div>
            {skeleton}
            {errorMessage}
         </div>
         <PlaylistList />
      </section>
   );
}

export default Home;