import {
	ChatBubbleLeftRightIcon,
	HomeIcon,
	IdentificationIcon,
	RectangleGroupIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

export type NavBarMobileProps = {
	name: string;
	icon: React.ReactNode;
};

const navBarMobile: NavBarMobileProps[] = [
	{
		name: "home",
		icon: <HomeIcon className="h-5" />,
	},
	{
		name: "about",
		icon: <IdentificationIcon className="h-5" />,
	},
	{
		name: "cool-projects",
		icon: <RectangleGroupIcon className="h-5" />,
	},
	{
		name: "contact",
		icon: <ChatBubbleLeftRightIcon className="h-5" />,
	},
];

const NavBarMobile = () => (
	<div className="fixed sm:hidden bottom-0 left-0 right-0 flex justify-around h-15 bg-slate-900 z-20">
		{navBarMobile.map(({ name, icon }: NavBarMobileProps) => (
			<Link
				key={name}
				href={`/${name}`}
				className="flex flex-col justify-center items-center p-1 font-medium text-slate-300 hover:text-slate-50 rounded-lg hover:bg-slate-800 active:scale-95 active:text-slate-500"
			>
				<div>
					<span>{icon}</span>
				</div>
				<div>
					<span className="text-xs">{name.replace("-", " ")}</span>
				</div>
			</Link>
		))}
	</div>
);

export default NavBarMobile;
