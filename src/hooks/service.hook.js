import { useState, useEffect } from 'react';
import useHttp from './http.hook';

const useService = () => {
   const { loading, error, request } = useHttp();
   const [token, setToken] = useState('')

   const _apiBase = 'https://api.spotify.com/v1/'

   useEffect(() => {
      setToken(window.localStorage.getItem('token'))
   }, []);

   const getMyPlaylists = async () => {
      if (token) {
         const res = await request(`${_apiBase}me/playlists?limit=6&offset=0`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getPlaylists = async (timestamp) => {
      if (token) {
         const res = await request(`${_apiBase}browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=20&offset=5`, { headers: { Authorization: `Bearer ${token}` } })
         return res.playlists
      }
   }

   const getTracks = async (url) => {
      if (token) {
         const res = await request(url, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   return { token, loading, error, getPlaylists, getMyPlaylists, getTracks }
}

export default useService