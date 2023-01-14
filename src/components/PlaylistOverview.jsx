import PropTypes from 'prop-types'

const PlaylistOverview = ({ playlist }) => {
   const {name, images, owner } = playlist

   return (
      <div className='flex items-end mt-7'>
         <img className='max-w-[260px] mr-8' src={images[0].url} alt="Playlist" />
         <div className='text-white'>
            <p className='text-lg font-medium'>PLAYLIST</p>
            <h1 className='text-largest font-bold mb-8'>{name}</h1>
            <div className='flex gap-2 text-lg'>
               <p className='text-[#a4a4a4]'>Made for
                  <span className='text-white font-medium'> {owner.display_name}</span>
               </p>
               •
               <span className='3
               text-[#a4a4a4]'>{` songs, 2hr 01 min`}</span>
            </div>
         </div>
      </div>
   );
}

PlaylistOverview.propTypes = {
   playlist: PropTypes.object
}

export default PlaylistOverview;