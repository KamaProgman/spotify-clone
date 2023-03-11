import { useState, useEffect, useContext } from 'react';
import searchContext from '../contexts/searchContext';
import useService from '../hooks/service.hook';

import SearchResult from '../components/search/SearchResult';
import RecentSearches from '../components/search/RecentSearches';
import BrowseAll from '../components/search/BrowseAll';
import Loader from '../components/children/Loader'
import { useNavigate } from 'react-router-dom';

const Search = () => {
   const [tracks, setTracks] = useState([]);
   const [artist, setArtist] = useState([])
   const { searchText } = useContext(searchContext)
   const { getSearch, getTracks, loading, error } = useService()
   const navigate = useNavigate()

   useEffect(() => {
      if (searchText.length > 0) {
         getSearch(searchText, 1, 'artist').then(res => setArtist(res.artists.items))
         getSearch(searchText, 4).then(res => setTracks(res?.tracks?.items))
      }
   }, [searchText]);
   
   const goToPlaylist = (item) => {
      let img = item?.images[0]?.url
      console.log(item);
      navigate(`../artist/${item.id}`, { state: { track: item?.tracks?.href, playlist: item, name: item.name, img } })
   }

   if (loading) {
      return <Loader />
   }
   if (error) {
      return <p className='text-red-600 text-3xl'>ERROR.</p>
   }

   return (
      <section>
         {
            searchText ? (
               <SearchResult
                  tracks={tracks}
                  artist={artist[0]}
                  goToPlaylist={goToPlaylist} />
            ) : <RecentSearches />
         }
         <BrowseAll />
      </section>
   );
}

export default Search;