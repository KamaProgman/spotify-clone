import photo from '../resources/playlist-photo.jpg'

const PlaylistOverview = ({ name }) => {
   return (
      <div className='flex items-end mt-7'>
         <img className='max-w-[300px] mr-8' src={photo} alt="Playlist" />
         <div className='text-white'>
            <p className='text-lg font-medium'>PLAYLIST</p>
            <h1 className='text-largest font-bold mb-8'>{name}</h1>
            <p className='text-xl text-[#a4a4a4] mb-3'>
               <span className='text-white'>Julia Wolf, ayokay, Khalid </span>
               and more
            </p>
            <div className='flex gap-2 text-lg'>
               <p className='text-[#a4a4a4]'>Made for
                  <span className='text-white font-medium'> davedirect3</span>
               </p>
               •
               <span className='3
               text-[#a4a4a4]'>34 songs, 2hr 01 min</span>
            </div>
         </div>
      </div>
   );
}

export default PlaylistOverview;