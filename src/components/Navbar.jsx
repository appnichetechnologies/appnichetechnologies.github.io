export default function Navbar() {
	return (
		<nav className="w-full h-20 flex justify-between items-center bg-transparent backdrop-blur-md">

			<div className="inline-flex justify-center items-center gap-2 text-blue-500 font-extrabold text-xl lg:text-3xl">
				<div className="text-white">&#x7B;</div><div className="text-white">&#x7D;</div> Appniche
			</div>

			<div id="menu_btn">
				<span></span>
				<span></span>
				<span></span>
			</div>

			<div id="menu" className="flex justify-center items-center gap-6 text-base lg:text-xl">
				<span className="hover:border-b-2 p-2 border-blue-500 transition-all font-bold">Home</span>
				<span className="hover:border-b-2 p-2 border-blue-500 transition-all font-bold">Services</span>
				<span className="hover:border-b-2 p-2 border-blue-500 transition-all font-bold">About</span>
				<span className="hover:border-b-2 p-2 border-blue-500 transition-all font-bold">Our Dev's</span>
			</div>

			<div>
				<button className="p-2 bg-blue-500 rounded-md">Contact us</button>
			</div>

		</nav>
	);
}
