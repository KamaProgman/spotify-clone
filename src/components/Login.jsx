import { useContext } from "react";

import spotify from "../contexts/spotifyContext";

import { BsSpotify } from 'react-icons/bs';

const Login = () => {
   const { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } = useContext(spotify)
   return (
      <div className="bg-black flex justify-center w-full h-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
         <div className="w-full max-w-[500px] flex flex-col items-center bg-[#ffffff] py-4 px-6 rounded-lg fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20">
            <div className="flex items-center justify-center gap-2 mb-4 pb-3 text-3xl text-black w-full border-b-2">
               <BsSpotify size='50px' color='black' />
               <h2>Spotify</h2>
            </div>
            <p className="text-2xl text-[#444444]">Authorize</p>
            <p className="mt-4 mb-7 text-xl text-[#444444]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quas maiores officiis amet magni dolorem, velit quisquam,
               impedit ut illum consectetur tempore asperiores sapiente?
               Harum cum unde excepturi perspiciatis? Corporis, ad?
            </p>
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="w-full">
               <button className="bg-[#19b45c] py-4 w-full rounded-lg text-xl uppercase text-white font-bold">Log in</button>
            </a >
         </div>
      </div>
   );
}

export default Login;