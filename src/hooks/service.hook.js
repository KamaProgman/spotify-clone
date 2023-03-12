import { useState, useEffect } from 'react';
import useHttp from './http.hook';

const useService = () => {
   const { loading, error, request } = useHttp();
   const [token, setToken] = useState('')

   const _apiBase = 'https://api.spotify.com/v1/'

   useEffect(() => {
      setToken(window.localStorage.getItem('token'))
   }, []);

   const getPlaylists = async (path, limit) => {
      if (token) {
         const res = await request(`${_apiBase}${path}limit=${limit}&offset=0`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getTracks = async (url) => {
      if (token) {
         const res = await request(url, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getSearch = async (searchText, limit, type = 'track') => {
      if (token) {
         const res = await request(`${_apiBase}search?q=${searchText}&type=${type}&market=UZ&limit=${limit}&offset=0`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getCategories = async () => {
      const res = await request(`${_apiBase}browse/categories?country=UZ&locale=uz&offset=20&limit=5`, { headers: { Authorization: `Bearer ${token}` } })
      return res.data
   }

   const getCategory = async (id) => {
      const res = await request(`${_apiBase}browse/categories/${id}/playlists?country=uz&limit=4&offset=0`, { headers: { Authorization: `Bearer ${token}` } })
      return res.data
   }

   const getUser = async () => {
      if (token) {
         const res = await request(`${_apiBase}me`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   const getArtistDatas = async (id) => {
      if (token) {
         const res = await request(`${_apiBase}artists/${id}/related-artists`, { headers: { Authorization: `Bearer ${token}` } })
         return res.data
      }
   }

   return {
      token, loading, error,
      getPlaylists,
      getTracks,
      getSearch,
      getCategories, getCategory,
      getUser,
      getArtistDatas
   }
}

export default useService