type destructirungChild = { children: JSX.Element };

export const Header = ({ children }: destructirungChild) => {
	return (
		<>
			<header>{children}</header>
		</>
	);
};
