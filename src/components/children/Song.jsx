import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Song = ({ track, index }) => {
   const duration = ((track.duration_ms / 1000) / 60).toFixed(2).split('.')

   return (
      <tr className="px-3 py-2 flex gap-5 items-center text-white hover:bg-[#55555550] ease-in-out duration-200 rounded-md">
         <td className="max-h-[52px] flex-1 flex items-center">
            <span className='text-xl text-[#B3B3B3] font-medium w-7'>{index}</span>
            <img src={track.album?.images[0].url} alt="song" className='max-h-[52px] h-[100%] ml-1 mr-5' />
            <div>
               <p className='text-xl'>{track.name}</p>
               <span className='text-lg text-[#B3B3B3]'>
                  {track.artists[0].name}
               </span>
            </div>
         </td>
         {/* <td className="flex-1 max-w-[420px] text-lg text-[#B3B3B3] flex items-center">
            <p>{track.album?.name}</p>
         </td> */}
         {/* <td className="flex-1 max-w-[240px] text-lg text-[#B3B3B3]">
            <p>10 days ago</p>
         </td> */}
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