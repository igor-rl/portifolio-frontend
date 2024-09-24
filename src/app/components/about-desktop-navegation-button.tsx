import { ArrowRightIcon } from "@heroicons/react/16/solid";

type AboutDesktopNavegationButtonProps = {
	name: string;
	icon?: React.ReactNode;
	href: string;
};

const AboutDesktopNavegationButton = ({
	name,
	icon,
	href,
}: AboutDesktopNavegationButtonProps) => (
	<div className="flex mb-2">
		<a
			href={href}
			className={`flex w-full rounded-xl justify-between shadow-sm shadow-slate-950 mx-3 p-3 bg-slate-900 hover:bg-slate-950 hover:mx-1 hover:shadow-lg active:scale-95 active:bg-slate-800`}
		>
			<div className="flex items-center">
				{" "}
				{icon && <span className="mr-2">{icon}</span>} <span>{name}</span>
			</div>
			<ArrowRightIcon className="h-6" />
		</a>
	</div>
);
export default AboutDesktopNavegationButton;
