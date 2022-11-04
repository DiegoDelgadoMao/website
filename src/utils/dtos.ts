import React, { ReactElement } from 'react';

export interface Technology {
	name: string;
	icon: ReactElement;
}

type TechnologyIcon = ReactElement;

export interface Project {
	name: string;
	banner: string;
	description: string;
	technologies: Technology[];
	urlCode: string;
	urlDemo: string;
}
