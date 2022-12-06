import { useState } from 'react';

import Aside from "./components/Aside";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import HomePage from "./pages/HomePage";
import PlaylistPage from './pages/PlaylistPage';

const App = () => {
	const [drawerIsShown, setDrawerIsShown] = useState(true);

	return (
		<div>
			<div className="flex relative pl-[290px]">
				<div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
				<Aside />
				<div className="flex-1 h-fit px-10">
					<Header />
					<main>
						<HomePage />
					</main>
				</div>
				<div className='max-w-[345px] w-full h-[100vh] bg-red-700 px-5 py-7'>aasdasdsd</div>
				{drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
			</div>
		</div>
	);
}

export default App;
