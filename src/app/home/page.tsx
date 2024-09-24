import { CpuChipIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import CurrentQuote from "../components/phrases";

function HomePage() {
	return (
		<div className="relative flex flex-col h-screen min-h-screen overflow-x-hidden">
			{/* menu lateral direito */}
			<div className="absolute flex flex-row w-screen h-24 px-11 items-center justify-end">
				<Link
					className="p-4 ml-3 rounded-lg shadow-xl border hover:text-slate-50 border-slate-500 hover:bg-slate-800"
					href="/home"
				>
					home
				</Link>
				<Link
					className="p-4 ml-3 rounded-lg shadow-xl border hover:text-slate-50 border-slate-500 hover:bg-slate-800"
					href="/about"
				>
					about
				</Link>
				<Link
					className="p-4 ml-3 rounded-lg shadow-xl border hover:text-slate-50 border-slate-500 hover:bg-slate-800"
					href="/cool-projects"
				>
					cool projects
				</Link>
				<Link
					className="p-4 ml-3 rounded-lg shadow-xl border hover:text-slate-50 border-slate-500 hover:bg-slate-800"
					href="/contact"
				>
					contact
				</Link>
			</div>
			<div className="m-4 rounded-lg bg-slate-600 h-96 bg-[url('/laptop-5673901_1280.jpg')] bg-cover bg-center">
				<div className="flex w-full h-full justify-center items-end">
					<Image
						className="mb-2 z-10"
						width={300}
						height={500}
						src="/Igor-Lage-Signature-white.png"
						alt="logo"
					/>
				</div>
				<div className="z-0 absolute top-48 left-0 w-full h-60 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
			</div>

			<div className="flex flex-row justify-center items-center">
				<h1 className="z-10 text-4xl text-white text-center">Web Developer</h1>
			</div>
			<div className="flex-1 flex flex-col justify-end items-center">
				<div className="flex flex-col justify-center items-center mt-6">
					<Link
						href="/about"
						className="z-10 mb-5 text-lg text-white bg-blue-500 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center space-x-3"
					>
						<CpuChipIcon className="w-6 h-6 text-white animate-slow-bounce" />
						<span>Learn More About Me</span>
					</Link>
				</div>
				<hr className="w-1/2 border-t-2 border-gray-300 mb-4" />
				<h1 className="z-10 text-xl text-gray-500 text-center mb-4">
					<CurrentQuote />
				</h1>
			</div>
		</div>
	);
}
export default HomePage;
