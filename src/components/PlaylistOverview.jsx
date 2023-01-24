const PlaylistOverview = ({ album, name, img, artists }) => {
   return (
      <div className='flex items-end mt-7'>
         <img className='max-w-[260px] mr-8' src={img} alt="Playlist" />
         <div className='text-white'>
            <p className='text-lg font-medium'>PLAYLIST</p>
            <h1 className='text-largest font-bold mb-8'>{name}</h1>
            <p className='text-white text-xl my-3 cursor-pointer truncate'>{artists()}</p>
            <div className='flex gap-2 text-lg'>
               <p className='text-[#a4a4a4]'>Made for
                  <span className='text-white font-medium'></span>
               </p>
               •
               <span className='3
               text-[#a4a4a4]'>{`${album?.items.length} songs, 2hr 01 min`}</span>
            </div>
         </div>
      </div>
   );
}

export default PlaylistOverview;