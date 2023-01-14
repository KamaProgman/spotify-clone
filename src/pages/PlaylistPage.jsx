import { useLocation } from "react-router-dom";

import PlaylistOverview from "../components/PlaylistOverview";
import SongsList from "../components/SongsList";

const PlaylistPage = () => {
   const { state } = useLocation()
   const url = state.tracks.href

   return (
      <section className="flex-1">
         <PlaylistOverview playlist={state} />
         <SongsList url={url} />
      </section>
   );
}

export default PlaylistPage;