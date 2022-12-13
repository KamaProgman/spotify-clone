import { useState, useEffect, useContext } from 'react';
import axios from "axios"

import Login from '../components/Login';
import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';

const HomePage = () => {
   const [data, setData] = useState([]);
   const [token, setToken] = useState('')

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

   useEffect(() => {
      setToken(window.localStorage.getItem('token'))

      if (token) {
         fetch('https://api.spotify.com/v1/users/31zeakm22w27huvepwvpspwcux2a/playlists?offset=0&limit=4', {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
            .then(res => res.json())
            .then(data => setData(data.items))
      }
   }, [token]);

   const ItemComponent = () => {
      return data?.map((item, idx) => <PlaylistRec key={idx} item={item} />)
   }

   if (!token) {
      return (
         <Login />
      )
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