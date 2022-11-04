import {
	RiGithubFill,
	RiInstagramFill,
	RiTwitterFill,
	RiLinkedinBoxFill,
} from 'react-icons/ri';

export const SocialNetworks = () => {
	const socialNetworksUrl = {
		instagram: {
			url: 'https://www.instagram.com/diegodelgadomao.dev/',
			icon: <RiInstagramFill />,
		},
		github: {
			url: 'https://github.com/DiegoDelgadoMao',
			icon: <RiGithubFill />,
		},
		twitter: {
			url: 'https://twitter.com/diegoDelgado_01',
			icon: <RiTwitterFill />,
		},
		linkedin: {
			url: 'https://www.linkedin.com/in/diegodelgadomao/',
			icon: <RiLinkedinBoxFill />,
		},
	};
	return (
		<div className='social-networks'>
			{Object.entries(socialNetworksUrl).map(item => (
				<a
					key={item[0]}
					href={item[1].url}
					target='_blank'
					className='social-network-container'
				>
					<div className='social-network-container__circle'></div>
					<div className='social-network-container__line'></div>
					{item[1].icon}
				</a>
			))}
		</div>
	);
};
