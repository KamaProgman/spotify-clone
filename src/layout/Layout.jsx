import { useEffect, useState } from 'react';

import Aside from "../components/Aside";
import Header from "../components/Header";
import Drawer from "../components/Drawer";
import Login from '../components/Login';

import bgContext from '../contexts/bgContext';

const Layout = ({ children }) => {
   const [drawerIsShown, setDrawerIsShown] = useState(false);
   const [token, setToken] = useState('')
   const [bgColor, setBgColor] = useState();

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

   if (!token) {
      return (
         <Login />
      )
   }

   // console.log(bgColor);

   return (
      <>
         <bgContext.Provider value={{ bgColor, setContextBg }}>
            <Header isShown={drawerIsShown} />
            <main>
               <Aside />
               <div className="bg-spotify" style={{backgroundColor: bgColor}}></div>
               {children}
               {drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
            </main>
         </bgContext.Provider>
      </>
   );
}

export default Layout;