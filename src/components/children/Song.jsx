
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Song = () => {
   return (
      <tr className="flex gap-6 text-white font-bold">
         <td className="flex-0">1</td>
         <td className="flex-auto">Play It Safe</td>
         <td className="flex-auto">Play It Safe</td>
         <td className="flex-auto"></td>
         <td className="flex-0"><AiOutlineHeart size='22px' /></td>
         <td className="flex-0">2 : 12</td>
      </tr>
   );
}

export default Song;