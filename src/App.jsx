import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Aside from "./components/Aside";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import HomePage from "./pages/HomePage";
import PlaylistPage from './pages/PlaylistPage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage'
import CreatePlaylistPage from './pages/CreatePlaylistPage'
import LikedSongsPage from './pages/LikedSongsPage'

const App = () => {
	const [drawerIsShown, setDrawerIsShown] = useState(false);

	return (
		<div>
			<div className="flex relative pl-[290px]">
				<div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
				<Aside />
				<div className="flex-1 h-fit px-10">
					<Header />
					<main>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='playlist' element={<PlaylistPage />} />
							<Route path='search' element={<SearchPage />} />
							<Route path='library' element={<LibraryPage />} />
							<Route path='create-playlist' element={<CreatePlaylistPage />} />
							<Route path='liked-songs' element={<LikedSongsPage />} />
							<Route path='liked-songs' element={<LikedSongsPage />} />
						</Routes>
					</main>
				</div>
				{drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
			</div>
		</div>
	);
}
export default App;