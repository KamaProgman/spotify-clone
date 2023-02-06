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

   const getPlaylists = async (timestamp = '2023-01-19T11%3A35%3A40') => {
      if (token) {
         const res = await request(`${_apiBase}browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=5&offset=2`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getNewReleases = async () => {
      if (token) {
         const res = await request(`${_apiBase}browse/new-releases?country=UZ&limit=10&offset=1`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getTracks = async (url) => {
      if (token) {
         const res = await request(url, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getSearch = async (searchText) => {
      if (token) {
         const res = await request(`${_apiBase}search?q=${searchText}&type=track&market=UZ&limit=4&offset=0`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   return { token, loading, error, getPlaylists, getNewReleases, getMyPlaylists, getTracks, getSearch }
}

export default useService