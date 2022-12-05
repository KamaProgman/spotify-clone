import { useState } from 'react';

import Aside from "./components/Aside";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Drawer from "./components/Drawer";

const App = () => {
	const [drawerIsShown, setDrawerIsShown] = useState(true);

	return (
		<div >
			<div className="flex relative pl-[290px] pr-[345px]">
				<div className="h-[510px] w-full absolute z-[-1] left-0 top-0 bg-gradient-to-b from-[#3333A3] to-[#121212]"></div>
				<Aside />
				{drawerIsShown ? <Drawer isShown={() => setDrawerIsShown(!drawerIsShown)} /> : null}
				<div className=" flex-1 h-fit px-10">
					<Header />
					<main>
						<HomePage />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
