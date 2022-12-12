import { useContext } from "react";
import spotify from "../contexts/spotifyContext";

const Login = () => {
   const { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } = useContext(spotify)
   return (
      <div className="bg-black flex justify-center w-full h-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
         <div className="w-full max-w-[600px] bg-[#3a3a3a] text-white p-5 rounded-lg fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20">
            <div className="font-medium">
               <p className="mb-5 text-[18px]">
                  Далеко-далеко за словесными горами, в стране гласных
                  и согласных живут рыбные тексты. Подзаголовок собрал
                  по всей страна они составитель! Вскоре свое лучше
                  моей переписывается страну, раз свой страна текстами!
                  Несколько строчка обеспечивает буквоград.
               </p>

               <p className="mb-5 text-[18px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quas maiores officiis amet magni dolorem, velit quisquam,
                  impedit ut illum consectetur tempore asperiores sapiente?
                  Harum cum unde excepturi perspiciatis? Corporis, ad?
               </p>
            </div>

            <div className="flex items-center justify-end w-full">
               <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="w-full max-w-[200px]">
                  <button className="bg-[#21c367] py-1 w-full rounded-lg font-bold">Log in</button>
               </a >
            </div>
         </div>
      </div>
   );
}

export default Login;