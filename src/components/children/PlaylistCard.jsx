import { Link } from 'react-router-dom'

const PlaylistCard = ({ item }) => {
   console.log(item);
   const { name, images, description } = item

   return (
      <Link to='/playlist' className="bg-[#ffffff10] p-5 rounded-lg">
         <img src={images[0].url} alt="" className="w-full" />
         <div>
            <p className="text-white text-xl font-bold mb-2 mt-6">{name}</p>
            <span className="text-[#B3B3B3] text-lg leading-6 block">{description}</span>
         </div>
      </Link>
   );
}

export default PlaylistCard;