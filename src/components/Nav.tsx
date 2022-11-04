import logo from '../assets/logo.png';
import {
	RiEmotionLaughFill,
	RiCodeBoxFill,
	RiPencilRulerFill,
} from 'react-icons/ri';

type StructureNav = [string, JSX.Element, string];

export const Nav = () => {
	const menu: StructureNav[] = [
		['Sobre mí', <RiEmotionLaughFill />, 'about-me'],
		['Tecnologías', <RiCodeBoxFill />, 'technologies'],
		['Proyectos', <RiPencilRulerFill />, 'projects'],
	];
	return (
		<>
			<nav>
				<img src={logo} />
				<ul>
					{menu.map(item => {
						const [text, icon, link] = item;
						return (
							<li key={text}>
								<a href={`#${link}`}>
									{icon}
									{text}
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};
