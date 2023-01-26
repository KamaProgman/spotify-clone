const PlaylistCardSkeleton = () => {
   return (
      <div className="mt-[50px] w-full ">
         <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold"></h2>
            <a href="#" className="text-[#ADADAD] text-base font-bold uppercase"></a>
         </div>
         <div className="mt-5 grid grid-cols-5 gap-6 max-w-[1400px]">

            <div className="bg-[#ffffff10] p-5 rounded-lg pulse">
               <div className="p-[50%] w-fit bg-[#313132] rounded-lg"></div>
               <div>
                  <p className="w-10/12 bg-[#313132] mb-2 mt-6 py-[14px] rounded-xl"></p>
                  <span className="w-2/4 bg-[#313132] block py-[14px] rounded-xl"></span>
               </div>
            </div>
            <div className="bg-[#ffffff10] p-5 rounded-lg pulse">
               <div className="p-[50%] w-fit bg-[#313132] rounded-lg"></div>
               <div>
                  <p className="w-10/12 bg-[#313132] mb-2 mt-6 py-[14px] rounded-xl"></p>
                  <span className="w-2/4 bg-[#313132] block py-[14px] rounded-xl"></span>
               </div>
            </div>
            <div className="bg-[#ffffff10] p-5 rounded-lg pulse">
               <div className="p-[50%] w-fit bg-[#313132] rounded-lg"></div>
               <div>
                  <p className="w-10/12 bg-[#313132] mb-2 mt-6 py-[14px] rounded-xl"></p>
                  <span className="w-2/4 bg-[#313132] block py-[14px] rounded-xl"></span>
               </div>
            </div>
            <div className="bg-[#ffffff10] p-5 rounded-lg pulse">
               <div className="p-[50%] w-fit bg-[#313132] rounded-lg"></div>
               <div>
                  <p className="w-10/12 bg-[#313132] mb-2 mt-6 py-[14px] rounded-xl"></p>
                  <span className="w-2/4 bg-[#313132] block py-[14px] rounded-xl"></span>
               </div>
            </div>
            <div className="bg-[#ffffff10] p-5 rounded-lg pulse">
               <div className="p-[50%] w-fit bg-[#313132] rounded-lg"></div>
               <div>
                  <p className="w-10/12 bg-[#313132] mb-2 mt-6 py-[14px] rounded-xl"></p>
                  <span className="w-2/4 bg-[#313132] block py-[14px] rounded-xl"></span>
               </div>
            </div>

         </div>
      </div>
   );
}

export default PlaylistCardSkeleton;