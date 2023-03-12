import { useEffect, useRef } from "react";
import { useContext } from "react";
import bgContext from "../contexts/bgContext";
import { getAverageRGB } from "../hooks/getImgColor";

const PlaylistOverview = (props) => {
   const { album, name, img, type, artists } = props
   const { setContextBg } = useContext(bgContext)
   const imgEl = useRef(null)

   useEffect(() => {
      setContextBg(getAverageRGB(imgEl.current))
   }, []);

   return (
      <div className='flex items-end'>
         <img ref={imgEl} className='max-w-[260px] mr-8' src={img} alt="Playlist" />
         <div className='text-white'>
            <p className='text-lg font-medium uppercase'>{type}</p>
            <h1 className='text-largest font-bold mb-8'>{name}</h1>
            {
               type == 'playlist'
                  ?
                  <p className='text-white text-xl my-3 cursor-pointer truncate'>{artists()}</p>
                  :
                  null
            }
            <div className='flex gap-2 text-lg'>
               {
                  type == 'playlist' || type == 'album'
                     ? <span className='text-[#a4a4a4]'>{`${album?.items.length} songs, 2hr 01 min`}</span>
                     : <span className='text-xl text-[#a4a4a4]'>{`${album.followers.total} followers`}</span>
               }
            </div>
         </div>
      </div>
   );
}

export default PlaylistOverview;