import { Technology } from '../utils/dtos';
import {
	SiTypescript,
	SiJavascript,
	SiReact,
	SiSass,
	SiVite,
	SiNpm,
	SiGit,
	SiGithub,
	SiHtml5,
	SiCss3,
	SiWebpack,
} from 'react-icons/si';

export const Technologies = () => {
	const technologies: Technology[] = [
		{
			name: 'TypeScript',
			icon: <SiTypescript />,
		},
		{
			name: 'JavaScript',
			icon: <SiJavascript />,
		},
		{
			name: 'React',
			icon: <SiReact />,
		},
		{
			name: 'Sass',
			icon: <SiSass />,
		},
		{
			name: 'Vite',
			icon: <SiVite />,
		},
		{
			name: 'Webpack',
			icon: <SiWebpack />,
		},
		{
			name: 'Npm',
			icon: <SiNpm />,
		},
		{
			name: 'Git',
			icon: <SiGit />,
		},
		{
			name: 'GitHub',
			icon: <SiGithub />,
		},
		{
			name: 'HTML',
			icon: <SiHtml5 />,
		},
		{
			name: 'Css',
			icon: <SiCss3 />,
		},
	];
	return (
		<section id='technologies'>
			<h2>Tecnologías</h2>
			<div className='container'>
				{technologies.map(item => (
					<div key={item.name} className='technology-container'>
						{item.icon}
						<p>{item.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};
