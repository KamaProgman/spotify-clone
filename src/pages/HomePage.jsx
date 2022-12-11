import { useState, useEffect } from 'react';
import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';

const HomePage = () => {
   const [data, setData] = useState([]);
   const [token, setToken] = useState('');

   useEffect(() => {
      setToken(window.localStorage.getItem('token'))

      if (token) {
         fetch('https://api.spotify.com/v1/users/31zeakm22w27huvepwvpspwcux2a/playlists?offset=0&limit=4', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
            .then(res => res.json())
            .then(data => setData(data?.items))
      }
   }, [token]);

   const ItemComponent = () => {
      return data?.map((item, idx) => <PlaylistRec key={idx} item={item} />)
   }

   return (
      <section>
         <div className="mt-[30px]">
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
               <ItemComponent />
            </div>
         </div>

         <PlaylistList />
      </section>
   );
}

export default HomePage;