import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout';
import Home from "./pages/Home";
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import Library from './pages/Library'
import CreatePlaylist from './pages/CreatePlaylist'
import LikedSongs from './pages/LikedSongs'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='playlist/:id' element={<Playlist />} />
				<Route path='search' element={<Search />} />
				<Route path='library' element={<Library />} />
				<Route path='create-playlist' element={<CreatePlaylist />} />
				<Route path='liked-songs' element={<LikedSongs />} />
			</Routes>
		</Layout>
	);
}
export default App;