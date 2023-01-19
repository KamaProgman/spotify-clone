import { useNavigate } from "react-router-dom";
import { IoPlaySharp } from "react-icons/io5"

const MyPLaylist = ({item}) => {
   const navigate = useNavigate()

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, { state: item })
   }

   return (
      <div className="playlist" onClick={() => goToPlaylist(item)}>
         <img src={item.images[0]?.url} alt={item.name} className='max-w-[82px] h-full drop-shadow-md' />
         <div className="ml-[21px] flex items-center flex-auto">
            <p className="font-bold text-xl text-white">{item.name}</p>
         </div>

         <button className="playBtn">
            <IoPlaySharp size="25px" />
         </button>
      </div>
   );
}

export default MyPLaylist;