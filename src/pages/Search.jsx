import { useState, useEffect, useContext } from 'react';
import searchContext from '../contexts/searchContext';
import useService from '../hooks/service.hook';
import SearchResult from '../components/search/SearchResult';

import RecentSearches from '../components/search/RecentSearches';
import BrowseAll from '../components/search/BrowseAll';

const Search = () => {
   const [tracks, setTracks] = useState([]);
   const { searchText } = useContext(searchContext)
   const { getSearch } = useService()

   useEffect(() => {
      if (searchText.length > 0) {
         getSearch(searchText).then(res => setTracks(res?.tracks.items))
      }
   }, [searchText]);

   return (
      <section>
         {
            searchText ? (
               <SearchResult tracks={tracks} />
            ) : <RecentSearches />
         }
         <BrowseAll />
      </section>
   );
}

export default Search;