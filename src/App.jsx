import { Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout';
import HomePage from "./pages/HomePage";
import PlaylistPage from './pages/PlaylistPage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import LikedSongsPage from './pages/LikedSongsPage'

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='playlist' element={<PlaylistPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='library' element={<LibraryPage />} />
				<Route path='create-playlist' element={<CreatePlaylistPage />} />
				<Route path='liked-songs' element={<LikedSongsPage />} />
			</Routes>
		</Layout>
	);
}
export default App;