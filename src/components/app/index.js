import React from 'react';
import axios from 'axios';

// stylesheets
import '../../assets/css/reset.css';
import '../../assets/css/global.css';
import '../../assets/css/fonts.css';
import config from '../resources/config';
// components
import Home from '../home'

import RenderContext from '../contexts/render';

export default function App() {

	React.useEffect(() => {
		if (localStorage.getItem('hasSeen') === null) {
			axios.post(`${config.API}/visit`).then(res => {
				localStorage.setItem('hasSeen', 'true');
			});
		}
	}, []);


	const [render, setRender] = React.useState({ showContact: false, showAbout: false });

	return (
		<RenderContext.Provider value={{ render, setRender }}>
			<Home />;
		</RenderContext.Provider>
	)
}