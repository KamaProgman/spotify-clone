import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import searchContext from '../contexts/searchContext';
import bgContext from '../contexts/bgContext';
import currentTrack from '../contexts/currentTrack';

import Aside from "../components/Aside";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Login from '../components/Login';
import Player from '../components/Player';

const Layout = ({ children }) => {
   const [drawerIsShown, setDrawerIsShown] = useState(false);
   const [bgColor, setBgColor] = useState();
   const [searchText, setSearchText] = useState('');
   const [track, setTrack] = useState({
      isPlaying: false,
      track: "",
   });
   const [token, setToken] = useState('')
   const location = useLocation()

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

   const setContextBg = (data) => {
      setBgColor(data)
   }

   const changeSearchText = (text) => {
      setSearchText(text)
   }

   const changeTrack = (data) => {
      setTrack(data);
   }

   if (!token) {
      setTimeout(() => {
         return (
            <Login />
         )
      }, 300);
   }

   return (
      <>
         <bgContext.Provider value={{ bgColor, setContextBg }}>
            <currentTrack.Provider value={{ track, changeTrack }}>
               <searchContext.Provider value={{ searchText, changeSearchText }}>
                  <Header isShown={drawerIsShown} />
                  <main>
                     <Aside />
                     {location.pathname === '/' ? (
                        <div className="bg-spotify" style={{ backgroundColor: bgColor }}></div>
                     ) : null}

                     {children}
                     {drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
                     <Player />
                  </main>
               </searchContext.Provider>
            </currentTrack.Provider>
         </bgContext.Provider>
      </>
   );
}

export default Layout;