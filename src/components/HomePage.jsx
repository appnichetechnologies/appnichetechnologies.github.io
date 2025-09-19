import Image from "next/image";

export default function HomePage() {
	const services = [
		{ name: 'Web Development', icon: '🌐' },
		{ name: 'Mobile Apps', icon: '📱' },
		{ name: 'UI/UX Design', icon: '🎨' },
		{ name: 'Digital Marketing', icon: '📈' },
		{ name: 'Cloud Solutions', icon: '☁️' },
		{ name: 'E-commerce', icon: '🛒' }
	];

	const stats = [
		{ number: '50+', label: 'Projects Delivered' },
		{ number: '25+', label: 'Happy Clients' },
		{ number: '3+', label: 'Years Experience' },
		{ number: '24/7', label: 'Support' }
	];

	return (
		<>
			{/* Hero Section */}
			<section id="Hero" className="flex justify-between items-center px-8 relative overflow-hidden">
				<div className="w-1/2 space-y-6">
					<div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
						✨ Welcome to Appniche Technologies
					</div>
					<h1 className="text-5xl font-bold leading-tight">
						Transforming Ideas into
						<span className="text-blue-500"> Digital Reality</span>
					</h1>
					<p className="text-lg text-gray-600 leading-relaxed">
						We craft innovative software solutions that drive business growth. From web applications to mobile apps, we bring your vision to life with cutting-edge technology.
					</p>
					<div className="flex gap-4">
						<button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
							Get Started
						</button>
						<button className="px-6 py-3 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors font-medium">
							View Portfolio
						</button>
					</div>
				</div>
				<div className="w-1/2 flex justify-center">
					<Image
						src="/web_creater.svg"
						alt="Digital Innovation"
						width={600}
						height={400}
						className="drop-shadow-2xl"
					/>
				</div>
				<div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-10"></div>
				<div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500 rounded-full opacity-10"></div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-8">
					<div className="grid grid-cols-4 gap-8">
						{stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl font-bold text-blue-500">{stat.number}</div>
								<div className="text-gray-600 mt-2">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 px-8">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">Our Services</h2>
						<p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
					</div>
					<div className="grid grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
								<div className="text-4xl mb-4">{service.icon}</div>
								<h3 className="text-xl font-semibold mb-2">{service.name}</h3>
								<p className="text-gray-600">Professional {service.name.toLowerCase()} solutions tailored to your business needs.</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 px-8">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-6">About Appniche Technologies</h2>
							<p className="text-lg text-gray-700 mb-6 leading-relaxed">
								Founded by <span className="font-semibold text-blue-600">Sahas Kamble</span>, Appniche Technologies is a forward-thinking software company dedicated to delivering innovative digital solutions.
							</p>
							<p className="text-gray-600 mb-6">
								We specialize in creating custom software applications, modern websites, and mobile solutions that help businesses thrive in the digital age.
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
									SK
								</div>
								<div>
									<div className="font-semibold">Sahas Kamble</div>
									<div className="text-gray-600">Founder & CEO</div>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="bg-white p-8 rounded-2xl shadow-xl">
								<h3 className="text-2xl font-bold mb-4">Our Mission</h3>
								<p className="text-gray-600 mb-6">
									To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
								</p>
								<div className="space-y-3">
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>Quality-driven development</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>Client-focused solutions</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>Innovation at core</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-blue-500 text-white px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
					<p className="text-xl mb-8 opacity-90">
						Let's discuss how we can help you achieve your digital goals with our innovative solutions.
					</p>
					<div className="flex justify-center gap-4">
						<button className="px-8 py-3 bg-white text-blue-500 rounded-lg hover:bg-gray-100 transition-colors font-medium">
							Start Your Project
						</button>
						<button className="px-8 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-500 transition-colors font-medium">
							Schedule Consultation
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
