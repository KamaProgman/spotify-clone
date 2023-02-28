import { useEffect, useState } from "react";
import useService from "../../hooks/service.hook";

function BrowseAll_child({ item }) {
   const { token, getCategory } = useService()

   useEffect(() => {
      // getCategory(item.id).then(res => console.log(res?.playlists?.items))
   }, [token]);

   return (
      <div
         className='category'
      >
         <span className='text-[26px] font-bold capitalize absolute left-5 top-5'>{item.name}</span>
         <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]'>
            <img src={item?.icons[0]?.url} alt="" />
         </div>
      </div>
   )
}

const BrowseAll = () => {
   const [categories, setCategories] = useState([]);
   const { getCategories, token } = useService()

   useEffect(() => {
      getCategories().then(res => setCategories(res?.categories?.items))
   }, [token]);

   return (
      <div className='max-w-[1400px] mt-8'>
         <h2 className="text-[26px] font-bold">Browse all</h2>
         <div className='mt-7 grid grid-cols-5 grid-rows-240px gap-6'>
            {
               categories?.map((item) => {
                  return <BrowseAll_child key={item.id} item={item} />
               })
            }
         </div>
      </div>
   );
}

export default BrowseAll;