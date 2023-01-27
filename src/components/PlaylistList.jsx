import PlaylistCard from './children/PlaylistCard';

const PlaylistList = ({ title, playlists, errorMsg = '' }) => {
   return (
      <div className="mt-[50px] w-full">
         <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            <a href="#" className="text-[#ADADAD] text-base font-bold uppercase">See all</a>
         </div>
         <div className="mt-5 grid grid-cols-5 gap-8 max-w-[1400px]">
            {
               errorMsg.length > 0 ? <span className="text-[red] text-[24px]" >{errorMsg}</span> :
                  playlists?.map(item => < PlaylistCard key={item.id} item={item} />)
            }
         </div>
      </div>
   );
}

export default PlaylistList;