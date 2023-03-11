import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout';
import Home from "./pages/Home";
import PlaylistPage from './pages/Playlist';
import ArtistPage from './pages/Artist';
import Search from './pages/Search';
import Library from './pages/Library'
import CreatePlaylist from './pages/CreatePlaylist'
import LikedSongs from './pages/LikedSongs'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='playlist/:id' element={<PlaylistPage />} />
				<Route path='artist/:id' element={<ArtistPage />} />
				<Route path='search' element={<Search />} />
				<Route path='library' element={<Library />} />
				<Route path='create-playlist' element={<CreatePlaylist />} />
				<Route path='liked-songs' element={<LikedSongs />} />
			</Routes>
		</Layout>
	);
}
export default App;