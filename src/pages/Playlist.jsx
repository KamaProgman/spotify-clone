import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import useService from "../hooks/service.hook";

import Loader from '../components/children/Loader'
import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const PlaylistPage = () => {
   const [tracks, setTracks] = useState([]);
   const [album, setAlbum] = useState(null);
   const { state } = useLocation()
   const { token, error, loading, getTracks } = useService()

   useEffect(() => {
      if (state.track) {
         getTracks(state.track).then(res => {
            setTracks(res?.items)
            setAlbum(res)
         })
      } else {
         getTracks(state.playlist.href + '/tracks').then(res => {
            setTracks(res?.items)
            setAlbum(res)
         })
      }
   }, [token, state]);

   const getArtistsNames = () => {
      let names = tracks?.map(item => item?.track?.artists[0]?.name)
      names = [...new Set(names)]
      let stringifyed = names?.slice(0, 4) + '...'

      return stringifyed
   }

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
               album={album}
               name={state.name}
               img={state.img}
               artists={getArtistsNames}
               type={state.playlist.type}
            />
            <SongsList tracks={tracks} img={state.img} />
         </section>
      </>
   );
}

export default PlaylistPage;