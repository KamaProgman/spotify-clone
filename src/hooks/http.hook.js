import axios from 'axios';
import { useState, useCallback } from 'react';

const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url, headers, method = 'GET') => {
      setLoading(true);

      try {
         const response = await axios(url, headers, method);

         if (!response.statusText == 'OK') {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`)
         }
         setLoading(false);
         return response

      } catch (e) {
         setLoading(false);
         setError(e.message);
         throw e;
      }
   }, [])

   const clearError = useCallback(() => setError(null), [])

   return { loading, error, request, clearError }
}

export default useHttp;

// import { useState, useCallback } from "react";

// export const useHttp = () => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);


//         setLoading(true);

//         try {
//             const response = await fetch(url, {method, body, headers});

//             if (!response.ok) {
//                 throw new Error(`Could not fetch ${url}, status: ${response.status}`);
//             }

//             const data = await response.json();

//             setLoading(false);
//             return data;
//         } catch(e) {
//             setLoading(false);
//             setError(e.message);
//             throw e;
//         }
//     }, []);

//     const clearError = useCallback(() => setError(null), []);

//     return {loading, request, error, clearError}
// }