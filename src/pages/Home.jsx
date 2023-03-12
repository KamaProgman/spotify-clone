import { useState, useEffect } from 'react';
import useService from '../hooks/service.hook';
import { Helmet } from "react-helmet";

import PlaylistList from '../components/PlaylistList';
import MyPlaylist from '../components/children/MyPlaylist';
import MyPlaylistSkeleton from '../components/children/Skeleton';
import PlaylistCardSkeleton from '../components/children/CardSkeleton';

const Home = () => {
   const [myPlaylists, setMyPlaylists] = useState([]);
   const [playlists, setPlaylists] = useState([])
   const [releases, setReleases] = useState([]);
   const [greeting, setGreeting] = useState('Hello');
   const [errorMsg, setErrorMsg] = useState('');
   const { token, loading, error, getPlaylists} = useService()

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

      // Getting playlists
      getPlaylists('me/playlists?', 6)
         .then(res => setMyPlaylists(res?.items))

      getPlaylists(`browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&`, 5)
         .then(res => setPlaylists(res?.playlists?.items))

      getPlaylists('browse/new-releases?country=UZ&', 10)
         .then(res => setReleases(res?.albums?.items))
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

   if (error) {
      return <p className='text-red-600 text-xl'>ERROR</p>
   }

   const playlistSkeleton = loading ? <MyPlaylistSkeleton /> : null;
   const cardSkeleton = loading ? <PlaylistCardSkeleton /> : null;

   return (
      <>
         <Helmet>
            <title>Spotify ― Web Player</title>
         </Helmet>
         <section>
            <div>
               <h1 className="font-bold text-[39px] text-white mb-[30px]">{greeting}</h1>
               <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4">
                  {
                     myPlaylists?.map((item) => (
                        <MyPlaylist key={item.id} item={item} />
                     ))
                  }
               </div>
               {playlistSkeleton}
            </div>
            <PlaylistList title={'Made for you'} playlists={playlists} errorMsg={errorMsg} />
            {cardSkeleton}
            <PlaylistList title={'New releases'} playlists={releases} errorMsg={errorMsg} />
            {cardSkeleton}
         </section>
      </>
   );
}

export default Home;