import axios from 'axios';
import { useState, useCallback } from 'react';

const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url, headers, method = 'GET', body = null) => {
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