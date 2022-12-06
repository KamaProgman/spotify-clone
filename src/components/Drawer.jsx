
import { CgClose } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";

const Drawer = ({ isShown }) => {
   return (
      <div className='max-w-[345px] h-[100vh] bg-black px-5 py-7 fixed right-0 top-0'>
         <div className='flex items-center justify-between'>
            <h3 className='text-xl text-[#cccccc] font-bold'>Friend Activity</h3>
            <div className='flex items-center justify-between gap-4'>
               <button><RiUserAddLine size='26px' color='#cccccc' /></button>
               <button onClick={isShown}>
                  <CgClose size='35px' color='#cccccc' />
               </button>
            </div>
         </div>
         <p className='text-lg text-[#cccccc] font-medium mt-10'>Let friends and followers on Spotify see what you’re listening to.</p>
         <div className='flex flex-col gap-5 my-5'>
            <div role="status" class="animate-pulse space-y-1">
               <div class="flex items-center space-x-3">
                  <svg class="w-[70px] h-[70px] text-[#ffffff40] dark:text-[#ffffff50]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  <div className="space-y-1.5">
                     <div class="h-2.5 w-[102px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                  </div>
               </div>
               <div class="flex items-center space-x-3">
                  <svg class="w-[70px] h-[70px] text-[#ffffff40] dark:text-[#ffffff50]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  <div className="space-y-1.5">
                     <div class="h-2.5 w-[102px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                  </div>
               </div>
               <div class="flex items-center space-x-3">
                  <svg class="w-[70px] h-[70px] text-[#ffffff40] dark:text-[#ffffff50]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                  <div className="space-y-1.5">
                     <div class="h-2.5 w-[102px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                     <div class="h-2.5 w-[79px] bg-[#ffffff40] rounded-full dark:bg-[#ffffff30]"></div>
                  </div>
               </div>
            </div>

         </div>
         <p className='text-lg text-[#cccccc] font-medium'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
         <button className='block mx-auto py-4 px-16 mt-6 tracking-widest bg-white text-[#171717] font-bold rounded-full'>SETTINGS</button>
      </div >
   );
}

export default Drawer;