import Image from "next/image";

export default function HomePage() {

	const companys = [
		{
			image: '/img1.svg',
			alt: 'first image',
			company: 'Appniche',
		},
		{
			image: '/img1.svg',
			alt: 'first image',
			company: 'Appniche',
		},
		{
			image: '/img1.svg',
			alt: 'first image',
			company: 'Appniche',
		},
		{
			image: '/img1.svg',
			alt: 'first image',
			company: 'Appniche',
		},
	]

	const services = [
		{
			name: 'Web Development',
		},
		{
			name: 'AOT Projects',
		},
		{
			name: 'Graphic Design',
		},
		{
			name: 'Web Design',
		},
		{
			name: 'Digital Marketing',
		},
		{
			name: 'Branding',
		},
		{
			name: 'Android Development',
		},
		{
			name: 'Ios Development',
		},
		{
			name: 'Product Design',
		},
		{
			name: 'Design System',
		},
	]

	let isIndex = false;

	if (services[0] === true){
	  isIndex = true
	}

	return (
		<>
			<section id="Hero" className="flex justify-evenly items-center">
				<div className="w-[50%] h-full flex justify-center items-start flex-col gap-8 ">
					<p className="font-bold text-lg">Make a lasting impresion with a modern website.</p>
					<h1 className="text-6xl font-extrabold">
						Crafting Digital Brilliance
					</h1>
					<p className="lg:text-base font-light w-[80%]">
						Our team of experts will create a stunning, responsive website that is built to convert visitors into customers, Your website will be designed with your target audience in mind, and it will be optimized for search engines.
					</p>
					<button className="p-2 bg-blue-500 rounded-md">
						Read more
					</button>
				</div>
				<div className="w-[50%] h-full flex justify-center ">
					<Image
						src="/web_creater.svg"
						alt="Hero Image"
						width={800}
						height={500}
					/>
				</div>
				<div className="absolute top-[150px] md:left-[-150px] rounded-full bg-blue-500 w-[230px] h-[230px]"></div>
			</section>

			<section className="w-full h-auto mb-4">
				<div className="text-center text-xl font-bold">Trusted by over 20+ companies including</div>
				<div>
					<div className="flex flex-row justify-between items-center h-[300px]">
						{
							companys.map((items) => (
								<div className="border border-blue-500 shadow-lg shadow-blue-500 rounded-xl">
									<div className="w-[200px] h-[100px] rounded-lg" style={{ backgroundImage: `url(${items.image})`, backgroundSize: 'cover' }}>
									<span className="block text-center text-transparent hover:text-white font-bold hover:bg-slate-800 hover:bg-opacity-50 h-full">{items.company}</span>
									</div>
								</div>
							))
						}

					</div>
				</div>
			</section>

			<section>
				<div className="text-blue-500">Fraction of A Cost</div>
				<h1 className="font-bold text-3xl mt-4">We Provide Awesome Services</h1>
				<div className="flex gap-4 flex-wrap my-16">
					{
						services.map((items) =>(
							<div className="p-3 bg-blue-500 text-xl rounded-md">{items.name}</div>
						))
					}	
				</div>

				<p className="font-bold text-xl my-6">
					Successfully delivered digital products and platforms for a diverse range of use cases across key industries.
				</p>

				<div className="flex flex-col gap-3 my-5">
					<p>Our highly experienced designs and programmers comprehend you vision and business objectives in order to create the designs.</p>
					<p>Our agency specilizes in assisting clients, particularly startups, in creating strong design and website that unify their brand both internally and externally.</p>
					<p>We thoroughtly enjoy collaborating with product-led companies, empowering their teams and customers with enhanced UI/UX and well-coordinated design kits,</p>
				</div>
			</section>

		</>
	);
}
