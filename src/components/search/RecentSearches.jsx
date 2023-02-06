import { MdClose } from 'react-icons/md';

function RecentSearches_child() {
   return (
      <div className="p-[10%] bg-[#ffffff10] ease-in  duration-150 hover:bg-[#d4d4d420] rounded-lg relative">
         <div className="w-fit p-[50%] mx-auto bg-white custom-shadow">
            <img src="" alt="" />
         </div>
         <h3 className="text-xl font-bold mt-[18px]">Eminem</h3>
         <p className="text-lg text-[#B3B3B3] mt-2">Artist</p>
         <button className='w-8 h-8 flex justify-center items-center rounded-full absolute right-3 top-3
                                   bg-[#00000060] hover:bg-[#00000095] duration-100 ease-in'>
            <MdClose size={'25px'} />
         </button>
      </div>
   )
}

function RecentSearches() {
   return (
      <div className='max-w-[1400px]'>
         <h2 className="text-[26px] font-bold">Recent searches</h2>
         <div className=" mt-7 grid grid-cols-5 gap-6">
            <RecentSearches_child />
            <RecentSearches_child />
         </div>
      </div>
   )
}

export default RecentSearches;