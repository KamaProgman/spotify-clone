
import { CgClose } from "react-icons/cg";
import { RiUserAddLine } from "react-icons/ri";

const Drawer = ({isShown}) => {
   return (
      <div className='max-w-[345px] h-full bg-black fixed right-0 top-0 px-5 py-7'>
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
            <div className='h-[62px] bg-[#96969650]'>skeleton</div>
            <div className='h-[62px] bg-[#96969650]'>skeleton</div>
            <div className='h-[62px] bg-[#96969650]'>skeleton</div>
         </div>
         <p className='text-lg text-[#cccccc] font-medium'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
         <button className='block mx-auto py-4 px-16 mt-6 tracking-widest bg-white text-[#171717] font-bold rounded-full'>SETTINGS</button>
      </div >
   );
}

export default Drawer;