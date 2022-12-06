import PlaylistCard from './children/PlaylistCard';


const PlaylistList = () => {
   return (
      <div className="mt-[50px] w-full">
         <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold">Your top mixes</h2>
            <a href="#" className="text-[#ADADAD] text-base font-bold uppercase">See all</a>
         </div>
         <div className="mt-6 grid grid-cols-4 gap-6">
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
         </div>
      </div>
   );
}

export default PlaylistList;