import { Project } from '../utils/dtos';
import {
	SiTypescript,
	SiJavascript,
	SiSass,
	SiVite,
	SiNpm,
	SiGit,
	SiGithub,
	SiHtml5,
	SiCss3,
	// SiWebpack,
	SiReact,
} from 'react-icons/si';

import { RiEye2Line, RiGithubLine } from 'react-icons/ri';

export const Projects = () => {
	const ProjectsList: Project[] = [
		{
			name: 'Habit tracker',
			banner:
				'https://raw.githubusercontent.com/DiegoDelgadoMao/habit-tracker/main/src/assets/banner.png',
			description:
				'Una aplicación web para hacer un seguimiento semanal de hábitos 🔎 y luego poder iterar y mejorar tu disciplina',
			technologies: [
				{ name: 'TS', icon: <SiTypescript /> },
				{ name: 'SASS', icon: <SiSass /> },
				{ name: 'VITE', icon: <SiVite /> },
				{ name: 'NPM', icon: <SiNpm /> },
				{ name: 'GIT', icon: <SiGit /> },
				{ name: 'GITHUB', icon: <SiGithub /> },
			],
			urlCode: 'https://github.com/DiegoDelgadoMao/habit-tracker',
			urlDemo: 'https://diegodelgadomao.github.io/habit-tracker/',
		},
		{
			name: 'Mi mercado',
			banner:
				'https://raw.githubusercontent.com/DiegoDelgadoMao/mi-mercado-proyecto/main/src/assets/banner-mi-mercado.png',
			description:
				'aplicación web para llevar un registro de las cuentas a la hora de marcar 🛒.',
			technologies: [
				{ name: 'REACT', icon: <SiReact /> },
				{ name: 'JS', icon: <SiJavascript /> },
				{ name: 'HTML', icon: <SiHtml5 /> },
				{ name: 'CSS', icon: <SiCss3 /> },
			],
			urlCode: 'https://github.com/DiegoDelgadoMao/mi-mercado-proyecto/',
			urlDemo: 'https://diegodelgadomao.github.io/mi-mercado-proyecto/',
		},
		{
			name: 'Ogo',
			banner:
				'https://raw.githubusercontent.com/DiegoDelgadoMao/ogo-finanzas/main/assets/banner-ogo.png',
			description:
				'Single page application para mejorar tus finanzas personales mediante un presupuesto tradicional de ingresos y gastos 💵.',
			technologies: [
				{ name: 'JS', icon: <SiJavascript /> },
				{ name: 'HTML', icon: <SiHtml5 /> },
				{ name: 'CSS', icon: <SiCss3 /> },
			],
			urlCode: 'https://github.com/DiegoDelgadoMao/ogo-finanzas',
			urlDemo: 'https://ogo-finanzas.netlify.app/',
		},
	];
	return (
		<section id='projects'>
			<h2>Proyectos</h2>
			<div className='content'>
				{ProjectsList.map(item => (
					<div key={item.name} className='container-projects'>
						<img src={item.banner} alt='' />
						<p>{item.description}</p>
						<div className='container-projects__technologies'>
							<h3>Tecnologías implementadas:</h3>
							{item.technologies.map((tech, index) => (
								<span key={`${tech.name}+${index}`}>{tech.icon}</span>
							))}
						</div>
						<div className='container-projects-btns'>
							<a href={item.urlDemo} target='_blank'>
								Ver Proyecto
								<RiEye2Line />
							</a>
							<a href={item.urlCode} target='_blank'>
								Código
								<RiGithubLine />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
