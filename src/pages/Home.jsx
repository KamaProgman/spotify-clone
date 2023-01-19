import { useState, useEffect } from 'react';
import useService from '../hooks/service.hook';
import { Helmet } from "react-helmet";

import PlaylistList from '../components/PlaylistList';
import PlaylistSkeleton from '../components/Skeleton';
import MyPLaylist from '../components/children/MyPlaylist';

const Home = () => {
   const [myPlaylists, setMyPlaylists] = useState([]);
   const [playlists, setPlaylists] = useState([])
   const [releases, setReleases] = useState([]);
   const [greeting, setGreeting] = useState('Hello');
   const [errorMsg, setErrorMsg] = useState('');

   const { token, loading, error, getPlaylists, getMyPlaylists, getNewReleases } = useService()

   // Getting playlists from server
   useEffect(() => {
      let date = new Date()
      let month = date.getMonth() + 1
      let timestamp = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + " UTC"
      timestamp = timestamp.replace(/-/g, "/")

      function dateIsValid(date) {
         return !Number.isNaN(new Date(date).getTime());
      }
      timestamp = dateIsValid(timestamp) ? new Date(timestamp).toISOString() : setErrorMsg('Not a valid date. Please try again')

      // Getting all kind of playlists
      getMyPlaylists().then(res => setMyPlaylists(res?.items))
      getPlaylists(timestamp).then(res => {
         setPlaylists(res?.playlists?.items);
      })
      getNewReleases().then(res => setReleases(res?.albums?.items))
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
      <>
         <Helmet>
            <title>Spotify - Home</title>
         </Helmet>
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
            <PlaylistList title={'Made for you'} playlists={playlists} />
            <PlaylistList title={'New releases'} playlists={releases} />
         </section>
      </>
   );
}

export default Home;