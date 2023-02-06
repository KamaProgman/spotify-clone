// Temporary arr
const arr = [
   {
      id: 1,
      title: "Podcasts",
      bg: `#27856A
     `,
   },
   {
      id: 2,
      title: "Made For You",
      bg: `#1E3264`,
   },
   {
      id: 3,
      title: "Charts",
      bg: `#8D67AB`,
   },
   {
      id: 4,
      title: "Made For You",
      bg: `#E8115B`,
   },
   {
      id: 5,
      title: "Charts",
      bg: `#8D67AB `,
   },
   {
      id: 6,
      title: "Podcasts",
      bg: `#1E3264`,
   },
   {
      id: 7,
      title: "Made For You",
      bg: `#CA3489`,
   },
   {
      id: 8,
      title: "Charts",
      bg: `#B09DC5`,
   },
   {
      id: 9,
      title: "Chill",
      bg: `#509BF5`,
   },
   {
      id: 10,
      title: "Workout",
      bg: `blue`,
   }
];

function BrowseAll_child({ item }) {
   return (
      <div
         style={{ background: item.bg }}
         className='bg-[#27856A] rounded-lg p-[50%] max-w-[242px] overflow-hidden cursor-pointer relative'
      >
         <span className='text-[26px] font-bold capitalize absolute left-5 top-5'>{item.title}</span>
         <div className='w-[55%] h-[55%] bg-blue-500 absolute right-[-18px] bottom-[-12px] rotate-[25deg]' />
      </div>
   )
}

const BrowseAll = () => {
   return (
      <div className='max-w-[1400px] mt-8'>
         <h2 className="text-[26px] font-bold">Browse all</h2>
         <div className='mt-7 grid grid-cols-5 grid-rows-240px gap-6'>
            {
               arr.map((item, idx) => {
                  return <BrowseAll_child key={idx} item={item} />
               })
            }
         </div>
      </div>
   );
}

export default BrowseAll;