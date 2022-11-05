import { ReactElement } from 'react';

export interface Technology {
	name: string;
	icon: ReactElement;
}
export interface Project {
	name: string;
	banner: string;
	description: string;
	technologies: Technology[];
	urlCode: string;
	urlDemo: string;
}
