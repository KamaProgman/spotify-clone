import Song from './children/Song';

import { BiTime } from 'react-icons/bi';

const SongsList = () => {
   return (
      <table className="w-full mt-11">
         <thead className='block border-b-2 border-[#666666] py-3 mb-7'>
            <tr className="flex gap-5 text-base text-[#B3B3B3]">
               <td className="flex-0">#</td>
               <td className="flex-auto">TITLE</td>
               <td className="flex-auto">ALBUM</td>
               <td className="flex-1">DATE ADDED</td>
               <td className="flex-0"><BiTime size='24px' /></td>
            </tr>
         </thead>

         <tbody className='space-y-4'>
            <Song />
            <Song />
         </tbody>
      </table>
   );
}

export default SongsList;