import { useNavigate } from 'react-router-dom';

const PlaylistCard = ({ item }) => {
   const { name, images, description } = item
   const img = item?.images[0]?.url
   const navigate = useNavigate()

   const goToPlaylist = (item) => {
      navigate(`playlist/${item.id}`, {state: {track: item?.tracks?.href, playlist: item, name: item.name, img}})
   }

   return (
      <div className="bg-[#ffffff10] p-5 ease-in duration-200 hover:bg-[#d4d4d420] cursor-pointer rounded-lg" onClick={() => goToPlaylist(item)}>
         <img src={images[0].url} alt="" className="w-full custom-shadow rounded-md" />
         <div>
            <p className="text-white text-xl font-bold mb-2 mt-6">{name}</p>
            <span className="text-[#B3B3B3] text-lg leading-6 block">{description}</span>
         </div>
      </div>
   );
}

export default PlaylistCard;