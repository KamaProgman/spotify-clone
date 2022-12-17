import { useState } from 'react';

import Aside from "../components/Aside";
import Header from "../components/Header";
import Drawer from "../components/Drawer";

const Layout = ({ children }) => {
   const [drawerIsShown, setDrawerIsShown] = useState(true);

   return (
      <>
         <Header isShown={drawerIsShown} />
         <main>
            <Aside />
            <div className="bg-spotify"></div>
            {children}
            {drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
         </main>
      </>
   );
}

export default Layout;