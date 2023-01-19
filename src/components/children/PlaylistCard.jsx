import { useNavigate } from 'react-router-dom';

const PlaylistCard = ({ item }) => {
   const { name, images, description } = item
   const navigate = useNavigate()

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, { state: item })
   }

   return (
      <div className="bg-[#ffffff10] p-5 ease-in-out duration-200 hover:bg-[#ffffff25] rounded-lg" onClick={() => goToPlaylist(item)}>
         <img src={images[0].url} alt="" className="w-full" />
         <div>
            <p className="text-white text-xl font-bold mb-2 mt-6">{name}</p>
            <span className="text-[#B3B3B3] text-lg leading-6 block">{description}</span>
         </div>
      </div>
   );
}

export default PlaylistCard;