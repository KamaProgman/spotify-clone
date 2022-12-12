
const PlaylistRec = ({ item }) => {
   return (
      <div
         className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full">
         <img src={item.images[0]?.url} alt={item.name} className='max-h-[82px]' />
         <div className="px-[21px] py-{28px} flex items-center justify-center ">
            <p className="font-bold text-xl text-white">{item.name}</p>
         </div>
      </div>
   );
}

export default PlaylistRec;