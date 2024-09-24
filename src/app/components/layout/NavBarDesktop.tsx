import Link from "next/link";

const NavBarDesktop = () => (
	<div className="hidden sm:flex fixed top-0 left-0 right-0 items-center justify-end h-20 px-11">
		{["home", "about", "cool-projects", "contact"].map((item) => (
			<Link
				key={item}
				href={`/${item}`}
				className="ml-6 px-4 py-2 text-lg font-medium text-slate-300 hover:text-slate-50 transition-colors duration-200 border border-slate-500 rounded-lg shadow-md hover:bg-slate-800 active:scale-95 active:shadow-sm"
			>
				{item.replace("-", " ")}
			</Link>
		))}
	</div>
);

export default NavBarDesktop;
