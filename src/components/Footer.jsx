export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="max-w-6xl mx-auto px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-lg">A</span>
							</div>
							<div className="font-bold text-xl">
								Appniche <span className="text-blue-400">Technologies</span>
							</div>
						</div>
						<p className="text-gray-400 mb-4 leading-relaxed">
							Transforming ideas into digital reality. We create innovative software solutions that drive business growth and success.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
								<span className="text-sm">📧</span>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
								<span className="text-sm">💼</span>
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
								<span className="text-sm">🐙</span>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-gray-400">
							<li><a href="#" className="hover:text-white transition-colors">Home</a></li>
							<li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Services</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
							<li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-semibold mb-4">Contact Info</h4>
						<div className="space-y-3 text-gray-400">
							<div className="flex items-center gap-2">
								<span>📧</span>
								<span>info@appniche.tech</span>
							</div>
							<div className="flex items-center gap-2">
								<span>📞</span>
								<span>+91 XXX XXX XXXX</span>
							</div>
							<div className="flex items-center gap-2">
								<span>📍</span>
								<span>India</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						© 2024 Appniche Technologies. All rights reserved.
					</p>
					<p className="text-gray-400 text-sm mt-2 md:mt-0">
						Founded by <span className="text-blue-400 font-medium">Sahas Kamble</span>
					</p>
				</div>
			</div>
		</footer>
	);
}
