import playlist2 from '../../resources/playlist2.png'

const PlaylistRec = () => {
   return (
      <div className="flex rounded-md overflow-hidden bg-[#ffffff20] w-full max-w-[427px]">
         <img src={playlist2} alt="" />
         <div className="px-[21px] py-{28px} flex items-center justify-center ">
            <p className="font-bold text-xl text-white">Chill Mix</p>
         </div>
      </div>
   );
}

export default PlaylistRec;