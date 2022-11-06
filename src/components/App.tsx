import { Nav } from './Nav';
import { Header } from './Header';
import { SocialNetworks } from './SocialNetworks';
import { AboutMe } from './AboutMe';
import { Technologies } from './Technologies';
import { Projects } from './Projects';

import ilustration from '../assets/img-header.png';

function App(): JSX.Element {
	return (
		<>
			<Nav />
			<Header>
				<>
					<div className='content-header'>
						<h1>
							Hola 👋🏼, soy Diego Mauricio Delgado Espinosa, Front-end developer.
						</h1>
						<img src={ilustration} alt='' />
					</div>
					<SocialNetworks />
				</>
			</Header>
			<AboutMe />
			<Technologies />
			<Projects />
		</>
	);
}

export default App;
