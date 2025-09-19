export default function Navbar() {
	return (
		<nav className="w-full h-20 flex justify-between items-center px-8 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
			{/* Logo */}
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
					<span className="text-white font-bold text-lg">A</span>
				</div>
				<div className="font-bold text-xl text-gray-800">
					Appniche <span className="text-blue-500">Technologies</span>
				</div>
			</div>

			{/* Navigation Menu */}
			<div className="hidden md:flex items-center gap-8">
				<a href="#" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">Home</a>
				<a href="#" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">Services</a>
				<a href="#" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">About</a>
				<a href="#" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">Portfolio</a>
				<a href="#" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">Contact</a>
			</div>

			{/* CTA Button */}
			<div className="flex items-center gap-4">
				<button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
					Get Quote
				</button>
				{/* Mobile Menu Button */}
				<button className="md:hidden p-2">
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</nav>
	);
}
