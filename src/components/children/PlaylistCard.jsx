import { Link} from 'react-router-dom'

import playlist from '../../resources/playlist.png'

const PlaylistCard = () => {
   return (
      <Link to='/playlist' className="bg-[#ffffff10] p-5 rounded-lg">
         <img src={playlist} alt="" className="w-full" />
         <div>
            <p className="text-white text-xl font-bold mb-2 mt-6">Chill Mix</p>
            <span className="text-[#B3B3B3] text-lg block max-w-[180px]">Julia Wolf, Khalid, ayokay and more</span>
         </div>
      </Link>
   );
}

export default PlaylistCard;