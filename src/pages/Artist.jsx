import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import useService from "../hooks/service.hook";

import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";
import PlaylistList from "../components/PlaylistList";
import Loader from '../components/children/Loader'

const ArtistPage = () => {
   const [tracks, setTracks] = useState([]);
   const [albums, setAlbums] = useState();
   const { token, loading, error, getTracks, getPlaylists } = useService()
   const { state } = useLocation()

   useEffect(() => {
      getTracks(`${state.playlist.href}/top-tracks?market=uz`)
         .then(res => setTracks(res?.tracks));

      getPlaylists(`artists/${state.playlist.id}/albums?market=Uz&`, 5)
         .then(res => {
            setAlbums(res?.items)
         })
   }, [token]);

   if (loading) {
      return <Loader />
   }
   if (error) {
      return <p className='text-red-600 text-3xl'>ERROR.</p>
   }

   return (
      <>
         <Helmet>
            <title>Spotify ― {state.name}</title>
         </Helmet>

         <section className="flex-1">
            <PlaylistOverview
               album={state.playlist}
               name={state.name}
               img={state.img}
               type={state.playlist.type} />
            <SongsList tracks={tracks} />
            <PlaylistList title={'Fans also like'} playlists={albums} />
         </section>
      </>
   );
}

export default ArtistPage;