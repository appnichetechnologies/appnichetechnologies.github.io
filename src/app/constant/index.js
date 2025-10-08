import {
  Sparkles,
  Zap,
  Star,
  Code,
  Rocket,
  Globe,
  Cpu,
  Layers,
  Wifi,
} from "lucide-react";

export const navItems = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const animateBGData = [
  {
    style:
      "absolute top-32 left-10 animate-float delay-1000 z-10 ",
    icon: Sparkles,
    iconStyle: "w-8 h-8 text-purple-400 opacity-30 md:opacity-60",
  },
  {
    style: "absolute top-32 right-20 animate-pulse-slow delay-2000 z-10 ",
    icon: Star,
    iconStyle: "w-10 h-10 text-indigo-400 opacity-30 md:opacity-50",
  },
  {
    style:
      "absolute bottom-40 left-20 animate-bounce-slow delay-500 z-10 hidden sm:block",
    icon: Zap,
    iconStyle: "w-6 h-6 text-purple-300 opacity-50 md:opacity-70",
  },
  {
    style: "absolute top-1/2 right-10 animate-spin-slow z-10 hidden sm:block",
    icon: Code,
    iconStyle: "w-7 h-7 text-indigo-300 md:opacity-40",
  },
  {
    style:
      "absolute bottom-20 right-1/3 animate-float delay-3000 z-10 hidden sm:block",
    icon: Rocket,
    iconStyle: "w-8 h-8 text-purple-500 md:opacity-50",
  },
  {
    style:
      "absolute top-1/4 left-1/4 animate-pulse-slow delay-1500 z-10 hidden sm:block",
    icon: Globe,
    iconStyle: "w-9 h-9 text-indigo-400  md:opacity-45",
  },
  {
    style:
      "absolute top-1/4 right-1/4 animate-float delay-2500 z-10 hidden sm:block",
    icon: Cpu,
    iconStyle: "w-7 h-7 text-purple-400 opacity-30 md:opacity-55",
  },
  {
    style:
      "absolute bottom-1/3 left-1/3 animate-spin-slow delay-4000 z-10 hidden sm:block",
    icon: Layers,
    iconStyle: "w-8 h-8 text-indigo-500 md:opacity-45",
  },
  {
    style:
      "absolute top-1/2 left-20 animate-pulse-slow delay-3500 z-10 hidden sm:block",
    icon: Wifi,
    iconStyle: "w-8 h-8 text-purple-300 md:opacity-50",
  },
];

export const featuresData = [
  {
    title: "Expert Development",
    description:
      "Team of passionate developers, designers and project managers ready for challenges",
    icon: "💻",
  },
  {
    title: "Quality First",
    description:
      "Delivering high quality products and services with attention to detail",
    icon: "⭐",
  },
  {
    title: "Client Partnership",
    description:
      "Transparent communication and honest collaboration with clients",
    icon: "🤝",
  },
  {
    title: "24/7 Support",
    description: "Always available to answer questions and address concerns",
    icon: "📞",
  },
];

export const servicesData = [
  {
    id: 1,
    imgSrc: "/landing.png",
    alt: "Landing Page Development",
    title: "Landing Page Development",
    description:
      "We create stunning, conversion-focused landing pages that capture attention and drive results. Our pages are optimized for both desktop and mobile devices.",
    icon: "🚀",
  },
  {
    id: 2,
    imgSrc: "/web-app.png",
    alt: "Web App Development",
    title: "Web App Development",
    description:
      "From simple websites to complex web applications, we build scalable solutions using cutting-edge technologies and best practices.",
    icon: "💻",
  },
  {
    id: 3,
    imgSrc: "/app-design.png",
    alt: "App Development",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.",
    icon: "📱",
  },
  {
    id: 4,
    imgSrc: "/pos.png",
    alt: "POS Software",
    title: "Custom POS",
    description:
      "Tailored point-of-sale solutions that streamline your business operations and enhance customer service efficiency.",
    icon: "🏪",
  },
  {
    id: 5,
    imgSrc: "/software.png",
    alt: "UI/UX Design",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that combine aesthetics with functionality to create engaging and intuitive digital experiences.",
    icon: "🎨",
  },
  {
    id: 6,
    imgSrc: "/marketing.png",
    alt: "Digital Marketing",
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that boost your online presence and drive meaningful engagement with your target audience.",
    icon: "📈",
  },
];

export const projectsData = [
  {
    id: 1,
    imgSrc: "/watch-website.png",
    title: "Watches",
    description:
      "Get the best watches for men and women at affordable prices. Our watches are stylish, durable, and come with a variety of features such as chronograph, date display, and water resistance. We have a wide range of watches to choose from, including leather strap, metal strap, and NATO strap. Our watches are suitable for all occasions, whether you're looking for a casual watch or a formal watch.",
    site: "https://sahaskamble.github.io/Watches/",
  },
  {
    id: 2,
    imgSrc: "/Furniture-website.png",
    title: "Wooden Furniture",
    description:
      "Get the best wooden furniture for your home at affordable prices. Our furniture is made of high-quality wood and is durable. We have a wide range of furniture to choose from, including beds, sofas, dining tables, chairs, and more. Our furniture is suitable for all types of homes, whether you're looking for modern, traditional, or rustic furniture.",
    site: "https://sahaskamble.github.io/Furnitures/",
  },
  {
    id: 3,
    imgSrc: "/Ecommerce-website.png",
    title: "eCommerce Website",
    description:
      "Get the best shopping experience with our eCommerce website. Our website is user-friendly and offers a wide range of products, including clothing, electronics, home appliances, and more. We have a variety of payment options, including credit card, PayPal, and bank transfer. Our website is also mobile-friendly, so you can shop on the go.",
    site: " https://sahaskamble.github.io/Daily_wear/",
  },
  {
    id: 4,
    imgSrc: "/Gym-website.png",
    title: "Gym Nation",
    description:
      "Get fit with our gym. Our gym is fully equipped with all the latest equipment, including treadmills, elliptical machines, free weights, and more. We have a variety of exercise classes, including yoga, Pilates, spinning, and more. Our trainers are experienced and can help you achieve your fitness goals. We also have a nutrition plan to help you stay healthy and fit.",
    site: "https://sahaskamble.github.io/Gym-Nation/",
  },
  {
    id: 5,
    imgSrc: "/Beauty-website.png",
    title: "Reveal The Beauty Of Skin",
    description:
      "Get the best beauty products for your skin at affordable prices. Our products are made of natural ingredients and are suitable for all skin types. We have a wide range of products, including skincare, haircare, makeup, and more. Our products are free of harsh chemicals and are cruelty-free. We also have a blog section where we share tips and tricks on how to take care of your skin.",
    site: "https://sahaskamble.github.io/Cosmetics/",
  },
];

export const contactsData = [
  {
    id: 1,
    username: "Sagar Shah",
    number: "+91 9820938124",
    spaciality: "Frontend Developer",
    instagram:
      "https://www.instagram.com/_sagar__1108/profilecard/?igsh=MXAwOXpzaHR3ZW44dg==",
    whatsapp: "https://wa.me/+919820938124",
    github: "https://github.com/saga-r-code",
  },
  {
    id: 2,
    username: "Devanshu Umbre",
    number: "+91 7030761682",
    spaciality: "UI / UX Designer",
    instagram:
      "https://www.instagram.com/devanshu_trek/profilecard/?igsh=cnR3bjgwZGlpaHMw",
    whatsapp: "https://wa.me/+917030761682",
  },
  {
    id: 3,
    username: "Sahas Kamble",
    number: "+91 9987299482",
    spaciality: "Full Stack Developer",
    instagram:
      "https://www.instagram.com/bash_writer/profilecard/?igsh=MTlwZzhpODVwdG9pZg==",
    whatsapp: "https://wa.me/+919987299482",
    github: "https://github.com/sahaskamble",
  },
  {
    id: 4,
    username: "Shashank Sangawar",
    number: "+91 7977528656",
    spaciality: "Full Stack Developer",
    instagram:
      "https://www.instagram.com/appnichetechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    whatsapp: "https://wa.me/+917977528656",
    github: "https://github.com/shashankssangawar",
  },
];
