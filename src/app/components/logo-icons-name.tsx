export type LogoIconProps = {
	src: string;
	alt: string;
	name: string;
};

const LogoIcon = ({ src, alt, name }: LogoIconProps) => (
	<div className="flex items-center justify-center px-4 py-2 rounded-lg shadow-md bg-slate-800 m-2">
		<div className="text-center">
			<img src={src} alt={alt} className="h-8 mx-auto" role="img" />
			<span className={`block text-sm`}>{name}</span>
		</div>
	</div>
);

export default LogoIcon;
