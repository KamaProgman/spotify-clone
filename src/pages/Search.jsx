import { MdClose } from 'react-icons/md';

const Search = () => {
   return (
      <section>
         <div>
            <h2 className="text-[32px] font-bold">Recent searches</h2>

            <div className="max-w-[1400px] mt-7 grid grid-cols-5 gap-6">
               <div className="p-[10%] bg-[#ffffff10] ease-in duration-200 hover:bg-[#d4d4d420] rounded-lg relative">
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
               <div className="p-[10%] bg-[#ffffff10] ease-in duration-200 hover:bg-[#d4d4d420] rounded-lg relative">
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
               <div className="p-[10%] bg-[#ffffff10] ease-in duration-200 hover:bg-[#d4d4d420] rounded-lg relative">
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
               <div className="p-[10%] bg-[#ffffff10] ease-in duration-200 hover:bg-[#d4d4d420] rounded-lg relative">
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
               <div className="p-[10%] bg-[#ffffff10] ease-in duration-200 hover:bg-[#d4d4d420] rounded-lg relative">
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

            </div>
         </div>

         <div className='mt-8'>
            <h2 className="text-[32px] font-bold">Browse all</h2>

            <div className='max-w-[1400px] mt-7 grid grid-cols-5 grid-rows-240px gap-6'>
               <div className='bg-[#27856A] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'>
                  <span className='text-[27px] font-bold capitalize absolute left-5 top-5'>made for you</span>
                  <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
               </div>
               <div className='bg-[#1E3264] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'>
                  <span className='text-[27px] font-bold capitalize absolute left-5 top-5'>made for you</span>
                  <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
               </div>
               <div className='bg-[#8D67AB] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'>
                  <span className='text-[27px] font-bold capitalize absolute left-5 top-5'>made for you</span>
                  <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
               </div>
               <div className='bg-[#E8115B] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'>
                  <span className='text-[27px] font-bold capitalize absolute left-5 top-5'>made for you</span>
                  <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
               </div>
               <div className='bg-[#777777] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'>
                  <span className='text-[27px] font-bold capitalize absolute left-5 top-5'>made for you</span>
                  <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Search;