import { useState } from 'react';
import PlaylistRec from '../components/children/PlaylistRec';
import PlaylistList from '../components/PlaylistList';

const HomePage = () => {
   const [data, setData] = useState([])
   const [token, setToken] = useState('')

   return (
      <section className="">
         <div className="mt-[30px]">
            <h1 className="font-bold text-[39px] text-white mb-[30px]">Good afternoon</h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
               <PlaylistRec />
            </div>
         </div>

         <PlaylistList />
      </section>
   );
}

export default HomePage;