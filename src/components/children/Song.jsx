
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import img from '../../resources/song.svg'

const Song = () => {
   return (
      <tr className="flex gap-5 text-white">
         <td className="max-h-[52px] flex-1 flex items-center">
            <p className='text-xl text-[#B3B3B3] font-medium'>1</p>
            <img src={img} alt="song" className='h-[100%] ml-6 mr-5' />
            <div>
               <p className='text-xl'>Wrong Kind Of People</p>
               <span className='text-lg text-[#B3B3B3]'>Baker Grace</span>
            </div>
         </td>
         <td className="flex-1 text-lg text-[#B3B3B3] flex items-center">
            <p>Play It Safe</p>
         </td>
         <td className="flex-1"></td>
         <td className="flex-0 text-lg flex items-center gap-7">
            <button>
               <AiOutlineHeart color='#b3b3b3' size='24px' />
            </button>
            <p>2 : 12</p>
         </td>
      </tr>
   );
}

export default Song;