import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Song = ({ track, index }) => {
   const { name, artists, album, duration_ms } = track
   const duration = ((duration_ms / 1000) / 60).toFixed(2).split('.')

   return (
      <tr className="flex gap-5 text-white">
         <td className="max-h-[52px] flex-1 flex items-center">
            <p className='text-xl text-[#B3B3B3] font-medium w-7'>{index}</p>
            <img src={album.images[0].url} alt="song" className='h-[100%] ml-1 mr-5' />
            <div>
               <p className='text-xl'>{name}</p>
               <span className='text-lg text-[#B3B3B3]'>
                  {artists[0].name}
               </span>
            </div>
         </td>
         <td className="flex-1 text-lg text-[#B3B3B3] flex items-center">
            <p>{album.name}</p>
         </td>
         <td className="flex-1"></td>
         <td className="flex-0 text-lg flex items-center gap-7">
            <button>
               <AiOutlineHeart color='#b3b3b3' size='24px' />
            </button>
            <p>{`${duration[0]} : ${duration[1]}`}</p>
         </td>
      </tr>
   );
}

export default Song;