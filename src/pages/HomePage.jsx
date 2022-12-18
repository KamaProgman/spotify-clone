import axios from 'axios'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Login from '../components/Login';
import PlaylistList from '../components/PlaylistList';

const HomePage = () => {
   const [data, setData] = useState([]);
   const [token, setToken] = useState('')

   const navigate = useNavigate()

   // Setting token to localStorage
   useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token");

      if (!token && hash) {
         token = hash
            .substring(1)
            .split("&")
            .find((elem) => elem.startsWith("access_token"))
            .split("=")[1];

         window.location.href = "";
         window.localStorage.setItem("token", token);
      }
      setToken(token)
   }, [token]);

   // Getting playlists from server
   useEffect(() => {
      setToken(window.localStorage.getItem('token'))

      if (token) {
         axios
            .get('https://api.spotify.com/v1/me/playlists?limit=10&offset=0', {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            .then(res => setData(res.data.items))
      }
   }, [token]);

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, { state: item })
   }

   // This items is not used in other components.
   function renderItems(arr) {
      const items = arr.map((item, idx) => {
         return (
            <div key={idx} className="playlist" onClick={() => goToPlaylist(item)}>
               <img src={item.images[0]?.url} alt={item.name} className='max-h-[82px]' />
               <div className="px-[21px] py-{28px} flex items-center justify-center ">
                  <p className="font-bold text-xl text-white">{item.name}</p>
               </div>
            </div>
         )
      })

      return (
         <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-4">
            {items}
         </div>
      )
   }

   if (!token) {
      return (
         <Login />
      )
   }

   const items = renderItems(data)

   return (
      <section className="mt-[30px]">
         <div>
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            {items}
         </div>
         <PlaylistList />
      </section>
   );
}

export default HomePage;