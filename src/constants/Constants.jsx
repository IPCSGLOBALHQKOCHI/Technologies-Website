//our process
export const technologyProcess = [
  {
    id: 1,
    title: "Evaluation",
    description:
      "Analyzing client needs to define project scope, goals, and requirements.",
    dropdown:
      "We understand client needs, gather requirements, analyze feasibility, define scope, set goals, and ensure alignment with stakeholders for successful execution.",
    side: "left",
  },
  {
    id: 2,
    title: "Planning ",
    description: "Creating a roadmap with strategies and defined milestones.",
    dropdown:
      "Creating a detailed roadmap with strategic plans and milestones to guide project execution, ensuring timely delivery and success.",
    side: "right",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing intuitive, visually engaging interfaces for seamless user experiences.",
    dropdown:
      "Designing user-friendly, visually appealing interfaces that ensure smooth navigation and enhance overall user experience across various devices and platforms.",
    side: "left",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Building robust, scalable solutions to meet project requirements.",
    dropdown:
      "Developing robust, scalable applications with clean code and optimized performance, ensuring they meet all project requirements and business goals.",
    side: "right",
  },
  {
    id: 5,
    title: "Testing & QA",
    description:
      "Ensuring functionality, performance, and quality through thorough testing.",
    dropdown:
      "Conducting comprehensive testing to ensure the application’s functionality, performance, and quality meet industry standards and client expectations.",
    side: "left",
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "Deploying applications to ensure a smooth launch and user accessibility.",
    dropdown:
      "Deploying applications to production environments, ensuring smooth launch, optimal performance, and seamless user access with minimal downtime.",
    side: "right",
  },
  {
    id: 7,
    title: "Support",
    description:
      "Offering continuous support to resolve issues and ensure stability.",
    dropdown:
      "Providing continuous support to address technical issues, ensure system stability, and implement updates for optimal performance post-launch.",
    side: "left",
  },
];

//case study
import makVideo from "../assets/videos/Bento/Experience design/Makayiram Web.mp4";
import bhanooVideo from "../assets/videos/Bento/Technology/Bhanoo Web.mp4";
import sisuVideo from "../assets/videos/Bento/Branding/SISU Logo.mp4";
import bhanoothumb from "../assets/images/bhanoothumb.png";
import sisuthumb from "../assets/images/sisuthumb.png";
import makthumb from "../assets/images/makayriamthumb.png";
import bsidesthumb from "../assets/images/besides.jpg";
import triplepleithumb from "../assets/images/3plei.jpg";
import bmgthumb from "../assets/images/bmg.jpg";
import frenwoodsthumb from "../assets/images/fernwoods.jpg";
import skypowethumb from "../assets/images/skypower.jpg";
import thoughtlightthumb from "../assets/images/thoughtlight.jpg";

//casestudy
export const cardData = [
  {
    id: 1,
    videoSrc: makVideo,
    title1: "Makayiram Retreat",
    title2: "Hospitality",
    thumbnail: makthumb,
    sector: "Website Development",
    description:
      "We revamped the resort's website based on a wild and luxury concept. The design reflects the environment, enhances the customer experience on the property, and captures the essence of luxury and adventure.",
  },

  {
    id: 4,
    title1: "Sky Power Energy",
    title2: "Energy",
    thumbnail: skypowethumb,
    sector: "SEO",
    description:
      "We rebranded and optimized Sky Power Energy’s website to improve SEO, making it more functional, user-friendly, and search-friendly—helping users connect faster while boosting organic visibility and lead conversions in Australia.",
  },

  {
    id: 5,
    title1: "Bsides",
    title2: "Education",
    thumbnail: bsidesthumb,
    sector: "Event Branding",
    description:
      "We made the BSides event experience with impactful visuals and cohesive branding—making it more engaging, recognizable, and consistent across all touchpoints, while enhancing attendee interaction and strengthening the event’s overall identity.",
  },
  {
    id: 6,
    title1: "Best Money Gold",
    title2: "Jewellery",
    thumbnail: bmgthumb,
    sector: "Google Ads",
    description:
      "We crafted and optimized Google Ads campaigns for Best Money Gold Jewellery, driving high-intent traffic, increasing store visits, and boosting conversions—resulting in improved online visibility and stronger customer engagement.",
  },
  {
    id: 2,
    videoSrc: bhanooVideo,
    title1: "Bhanoo Hospital & Eye Care",
    title2: "Health Care",
    thumbnail: bhanoothumb,
    sector: "Rebranding",
    description:
      "We have completed the rebranding process for the entire website, making it more meaningful, functional, and user-friendly. It now enables users to act faster and connect more easily with departments and doctors.",
  },
  {
    id: 7,
    title1: "FernWoods",
    title2: "Hospitality / Resort",
    thumbnail: frenwoodsthumb,
    sector: "Logo Development",
    description:
      "We developed a distinctive logo for Fernwoods, capturing the essence of their resort and hotel brand—blending elegance with nature to create a strong, memorable identity that resonates with their target audience.",
  },
  {
    id: 8,
    title1: "Triplei",
    title2: "Education",
    thumbnail: triplepleithumb,
    sector: "Meta Ads",
    description:
      "We managed Meta Ads for Triplei Commerce Academy, targeting students with engaging educational content—boosting inquiries, increasing enrollments, and enhancing the academy’s online presence in the competitive education space.",
  },
  {
    id: 3,
    videoSrc: sisuVideo,
    title1: "Sisu Eclipse",
    title2: "Art Dealer",
    thumbnail: sisuthumb,
    sector: "Logo Development",
    description:
      "Sisu Eclipse is an art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform. The logo reflects the themes of an eclipse and paintings.",
  },
  {
    id: 9,
    title1: "Thoughtlight",
    title2: "Digital Encyclopedia",
    thumbnail: thoughtlightthumb,
    sector: "Content Marketing",
    description:
      "We delivered strategic content marketing and compelling video production for Thoughtlight, boosting brand awareness, driving engagement, and effectively communicating their message across digital platforms to reach and resonate with their target audience.",
  },
];

//faq technologies
export const technologyfaq = [
  {
    title: "How long does it take to develop a custom software solution?",
    details:
      "The development time depends on the complexity of the project, features required, and the technologies used. Typically, it can take anywhere from a few weeks to several months.",
  },
  {
    title: "How much does it cost to develop a website or web application?",
    details:
      "The cost varies based on the complexity, design, features, and technologies used. Simple websites may cost less, while complex web apps or e-commerce solutions with advanced functionalities can require a larger budget. It’s best to get a detailed estimate after discussing the requirements.",
  },
  {
    title:
      "What is the difference between WordPress websites and custom React websites?",
    details:
      "Template-based WordPress websites are built using pre-designed themes, which can be customized but are limited in flexibility and scalability. They are quicker and more affordable to develop. In contrast, custom React websites are built from scratch with React.js, offering a higher degree of customization, faster performance, and scalability, but requiring more time and expertise to develop.",
  },
  {
    title:
      "What is the advantage of using a template design v/s a custom design for my website?",
    details:
      "Template designs are cost-effective, quicker to implement, and require less design effort, but they lack uniqueness and customization. Custom designs are tailored to your brand’s identity, provide a unique user experience, and can be built to meet specific functionality and design needs, offering greater flexibility and long-term scalability.",
  },
  {
    title:
      "What is the difference between a conventional app and a hybrid app?",
    details:
      "Conventional language-based apps are developed using native programming languages like Swift (for iOS) or Kotlin (for Android), ensuring optimal performance and full access to device features. Hybrid apps, on the other hand, are built using web technologies like HTML, CSS, and JavaScript, allowing them to work across multiple platforms (iOS, Android) with a single codebase, but often with slightly reduced performance and access to device features compared to native apps.",
  },
  {
    title: "What is the difference between Shared Hosting and VPS Hosting?",
    details:
      "Shared Hosting is budget-friendly and ideal for small websites, offering limited resources and control. VPS Hosting provides dedicated resources, better performance, and more control, making it perfect for growing websites, but comes at a higher cost and requires more management.",
  },
];

//services technology page
export const servicesTechno = [
  [
    {
      title: "Web Development",
      description: "Building dynamic, high-performance websites.",
      details:
        "We specialize in creating responsive, high-performance websites using modern technologies. Our services cover front-end and back-end development, ensuring seamless user experiences, fast load times, and scalable solutions tailored to meet your business’s unique needs.",
    },
    {
      title: "Mobile App Development",
      description: "Designing scalable and user-friendly apps.",
      details:
        "We design and develop user-friendly, scalable mobile applications for both iOS and Android platforms. Our solutions prioritize seamless user experience, intuitive interfaces, and high performance, helping your business engage users effectively while providing innovative and reliable mobile solutions.",
    },
    {
      title: "WebApp Development",
      description: "End-to-end delivery of high-end web applications.",
      details:
        "We build robust, scalable, and feature-rich web applications tailored to your business needs. Our web apps are designed for seamless performance across devices, providing users with a smooth experience while ensuring security, flexibility, and long-term scalability.",
    },
  ],
  [
    {
      title: "E-Commerce",
      description: "Delivering complete e-commerce solutions for businesses.",
      details:
        "We create customized e-commerce solutions that drive business growth. Our services include building secure, user-friendly online stores with seamless payment integration, product management, and inventory control. We focus on enhancing the shopping experience to increase conversions and customer loyalty.",
    },
    {
      title: "Custom Software Development",
      description: "Build required custom software like CRM, HRMS, ERP.",
      details:
        "We design and develop tailored software solutions to meet your business's unique requirements. From CRM systems to enterprise applications, our custom software enhances efficiency, automates processes, and provides scalability to help your business grow and adapt seamlessly.",
    },
  ],
];

//client reviews
import besides from "../assets/images/besides-logo.png";
import bmg from "../assets/images/bmg.png";
import sisiulogo from "../assets/images/sisiulogo.png";
import skylogo from "../assets/images/skypower.png";
import bmgreview from "../assets/images/bmgreview.jpg";
import sisiuReview from "../assets/images/sisiureviw.jpg";
import besidesReview from "../assets/images/besidesreview.jpg";
import skyReview from "../assets/images/skyreview.jpg";

export const cardDataReviews = [
  {
    imgSrc: besides,
    bgImg: besidesReview,
    title: "Bsides",
    category: "Event Branding",
    description:
      "We worked closely with the BSides team to develop a visual identity for the event, ensuring that branding board, brochures, and standees not only aligned with the conference theme but also effectively engaged attendees by reflecting the dynamic and innovative spirit of the cybersecurity hackathon community.",
  },
  {
    imgSrc: bmg,
    bgImg: bmgreview,
    title: "Best Money Gold",
    category: "Finance",
    description:
      "Best Money is a gold seller in the finance industry. We managed their Google campaigns for a long term, driving significant sales growth and multiplying their revenue compared to the previous financial year.Through strategic ad placements and data-driven optimization, we helped them reach the right audience.",
  },
  {
    imgSrc: sisiulogo,
    bgImg: sisiuReview,
    title: "Sisu Eclipse",
    category: "ART Dealer",
    description:
      "Sisu Eclipse is a distinguished art dealer from Ireland. We designed their logo and developed the user experience for their eCommerce platform, ensuring a seamless and visually engaging interface. The logo creatively reflects the themes of an eclipse and paintings, capturing the essence of their artistic vision and brand identity.",
  },
  {
    imgSrc: skylogo,
    bgImg: skyReview,
    title: "Sky Power Energy",
    category: "Energy ",
    description:
      " We improved SEO through keyword research, on-page optimization, site speed enhancement, and backlink building. These strategies boosted search rankings, organic traffic, and lead generation for their renewable energy services",
  },
];

//services home
export const servicesSections = [
  {
    id: "01",
    title: "Branding",
    desc: "From defining identity and values to creating premium logos, cohesive materials, immersive visuals, and functional product designs that captivate and leave a lasting impression.",
    href: "/branding",
  },
  {
    id: "02",
    title: "Technology",
    desc: "Building dynamic, high-performance websites, designing scalable mobile apps, and delivering complete e-commerce solutions to drive business growth and enhance user experiences.",
    href: "/technology",
  },
  {
    id: "03",
    title: "Digital Marketing",
    desc: "Creating powerful social strategies, executing data-driven campaigns, and enhancing SEO to boost visibility and drive measurable growth across all platforms.",
    href: "/digital-marketing",
  },
  {
    id: "04",
    title: "Social Branding",
    desc: "Creating valuable, audience-focused content, producing innovative visuals, and building communities that engage and foster brand loyalty for lasting connections and impact.",
    href: "/social-branding",
  },
  {
    id: "05",
    title: "Experience Design",
    desc: "Designing intuitive UI/UX, crafting visually appealing websites, and ensuring seamless mobile experiences for engaging, user-friendly interactions across all platforms.",
    href: "/experience-design",
  },
];

//services branding page
export const servicesBranding = [
  [
    {
      title: "Brand Consulting",
      description: "Helping businesses define their identity and values.",
      details:
        "Brand consulting helps businesses establish a strong identity by defining their values, mission, and visual aesthetics. We craft strategies to enhance brand positioning, ensuring consistency, recognition, and long-term success in the market.",
    },
    {
      title: "Brand Identity",
      description: "Crafting a narrative that reflects the brand's essence.",
      details:
        "Brand identity involves creating a cohesive narrative that captures the essence of your brand. From logos to messaging, we design visuals and storytelling elements that establish a strong, memorable presence across all platforms.",
    },
    {
      title: "Logo Design",
      description: "Designing globally adaptable and premium-quality logos.",
      details:
        "Logo design focuses on creating globally adaptable, high-quality logos that resonate with your brand’s identity. We craft distinctive, versatile, and timeless designs that ensure strong recognition across diverse markets and platforms.",
    },
  ],
  [
    {
      title: " Product Design",
      description: "Designing products that are both functional and stylish.",
      details:
        "Product design combines functionality and aesthetics to create innovative, user-friendly solutions. We craft visually appealing, high-performance products that enhance user experience while aligning with your brand’s identity and market demands.",
    },
    {
      title: "2D/3D Visualization",
      description: "Creating visuals that enhance brand impact.",
      details:
        "2D/3D visualization transforms concepts into realistic, eye-catching visuals that elevate brand impact. We create detailed, dynamic representations of products or ideas, helping clients showcase their vision with clarity and appeal.",
    },
    {
      title: "Brand Collateral",
      description: "Delivering cohesive marketing materials.",
      details:
        "Brand collateral involves creating cohesive marketing materials such as brochures, business cards, and banners that reflect your brand’s identity. We ensure all assets align with your brand’s message and aesthetic for consistency and impact.",
    },
  ],
];

//services DM page
export const servicesDM = [
  [
    {
      title: "Social Media Management",
      description: "Strategizing and Executing Social Media Campaigns.",
      details:
        "We specialize in strategizing and executing social media campaigns to boost engagement, strengthen brand presence, and drive audience growth, ensuring impactful digital marketing that maximizes reach, fosters connections, and enhances overall online visibility.",
    },
    {
      title: "Performance Marketing",
      description: "Data-driven ad Campaigns to achieve measurable results.",
      details:
        "Drive growth with performance marketing, using data-driven ad campaigns on Google Ads, Meta Ads, and LinkedIn to achieve measurable results and maximize ROI",
    },
    {
      title: "Meta Ads",
      description: "Reach Targeted Audiences through Facebook and Insta Ads.",
      details:
        "Leverage Meta Ads to effectively reach targeted audiences through Facebook and Instagram ads. Drive engagement, increase conversions, and boost brand visibility with tailored campaigns for maximum impact.",
    },
  ],
  [
    {
      title: " Linkedin Campaigns",
      description: "Generate high-quality Leads for your B2B needs.",
      details:
        "Maximize your B2B growth with LinkedIn campaigns. Generate high-quality leads through targeted ads and content strategies, helping you connect with decision-makers and drive business growth.",
    },
    {
      title: "Google Ads",
      description: "Drive Traffic, Reach Targets and Achieve Flexible Results.",
      details:
        "Harness the power of Google Ads to drive targeted traffic, reach your audience effectively, and achieve flexible, measurable results that align with your business goals and boost conversions.",
    },
    {
      title: "SEO Strategy",
      description:
        "Enhancing Online Visibility through Search Engine Optimization.",
      details:
        "Boost your online visibility with a tailored SEO strategy. Optimize your website’s content and structure to rank higher on search engines, drive organic traffic, and improve your brand’s digital presence.",
    },
  ],
];

//services social branding page
export const servicesSocialBranding = [
  [
    {
      title: "Content Marketing",
      description: "Creating Valuable, Audience-focused content.",
      details:
        "Elevate your social branding with content marketing. Create valuable, audience-focused content that resonates with your target market, drives engagement, and strengthens your brand's presence across digital platforms.",
    },
    {
      title: "Organic Creatives",
      description: "Producing Innovative and Impactful visuals.",
      details:
        "Enhance your social branding with organic creatives. Produce innovative and impactful visuals that captivate your audience, foster engagement, and elevate your brand’s presence across social media platforms.",
    },
  ],
  [
    {
      title: "Social Media Management",
      description: "Strategizing and executing social media campaigns.",
      details:
        "Boost your social branding with expert social media management. Strategize and execute impactful campaigns that increase brand visibility, engage your audience, and build a strong, authentic online presence.",
    },
    {
      title: "Community Building",
      description: "Engaging audiences to foster brand loyalty.",
      details:
        "Strengthen your social branding through community building. Engage your audience by creating meaningful interactions, fostering brand loyalty, and cultivating a dedicated community that supports and advocates for your brand.",
    },
  ],
];

//services ExpeDesign page
export const servicesExpeDesign = [
  [
    {
      title: "Website Design",
      description: "Tailored Strategies to Boost Conversions and Maximize ROI.",
      details:
        "Enhance user experience with website design tailored to your goals. Create intuitive, visually appealing websites that boost conversions, maximize ROI, and deliver seamless, engaging experiences for your audience.",
    },
    {
      title: "Web App Design",
      description:
        "Functional, intuitive interfaces to optimize user engagement.",
      details:
        "Craft seamless web app design with functional, intuitive interfaces that optimize user engagement. Enhance user experience through thoughtful design, ensuring easy navigation and improved interaction with your digital platform.",
    },
  ],
  [
    {
      title: " Mobile App Design",
      description: "Smart, efficient solutions to enhance operational flow.",
      details:
        " Create impactful mobile app design with smart, efficient solutions that enhance operational flow. Optimize user experience through intuitive interfaces, ensuring smooth interactions and increased functionality for better user engagement.",
    },
    {
      title: "Software Design",
      description:
        "Industry-specific workflows designed for operational efficiency.",
      details:
        "Develop software design with industry-specific workflows to enhance operational efficiency. Create tailored solutions that streamline processes, improve user experience, and drive productivity through intuitive, effective design.",
    },
  ],
];

import xavi from "../assets/images/teams/xaviTeam.png";
import sachu from "../assets/images/teams/sachu.png";
import nashi from "../assets/images/teams/nashi.png";
import afijith from "../assets/images/teams/abhijith.png";
import ajithannan from "../assets/images/teams/ajithTeam.png";
import ansil from "../assets/images/teams/ansilTeam.png";
import devan from "../assets/images/teams/devan.png";
import abhiram from "../assets/images/teams/abhiram.png";
import chandini from "../assets/images/teams/chandTeam.png";
import akshaySir from "../assets/images/teams/akshay.png"
import shalet from "../assets/images/teams/shalet.png"
import Anitta from "../assets/images/teams/anitta.png"
import Sheron from "../assets/images/teams/sherun.png"


export const teamMembers = [
  {
    id: 0,
    name: "Akshay R S",
    role: "Client Relations Manager",
    image: akshaySir ,
    link:"https://www.linkedin.com/in/akshay-rs-5bb145126/"
  },
  {
    id: 1,
    name: "Nashid Ul Ameen",
    role: "Creative Lead",
    image: nashi,
    link:"https://www.linkedin.com/in/nashidul-ameen-294b27240/"
  },
  {
    id: 2,
    name: "Shalet Bernard",
    role: "DM Manager",
    image: shalet,
    link:"https://www.linkedin.com/in/shalet-bernard/"
  },
  {
    id: 3,
    name: "Sachu Sathyan",
    role: "Content Strategist",
    image: sachu,
    link:"https://www.linkedin.com/in/sachu-sathyan-3520111ab/"
  },
  {
    id: 4,
    name: "Chandini Mohan",
    role: "Google Ad Expert",
    image: chandini,
    link:"https://www.linkedin.com/in/chandini-mohan-digital-marketer/"
  },
  {
    id: 5,
    name: "Saviyola Shajan",
    role: "Software Engineer",
    image: xavi,
    link:"https://www.linkedin.com/in/saviyola-shajan"
  },
  {
    id: 6,
    name: "Anitta K C",
    role: "Wordpress Developer",
    image: Anitta,
    link:"https://www.linkedin.com/in/anitta-kc/"
  },
  {
    id: 7,
    name: "Abhiram P",
    role: "Motion Graphic Designer",
    image: abhiram,
    link:"https://www.linkedin.com/in/a8hiram/"
  },
  {
    id: 8,
    name: "Abhijith V Prasad",
    role: "SEO Analyst",
    image: afijith,
    link:"https://www.linkedin.com/in/abhijith-v-prasad/"
  },
  {
    id: 9,
    name: "Sherun Thomas",
    role: "Content Writer",
    image: Sheron,
    link:"https://www.linkedin.com/in/sherunthomas/"
  },
  {
    id: 10,
    name: "Ajith Kumar",
    role: "UI/UX Designer",
    image: ajithannan,
    link:"https://www.linkedin.com/in/ajith-kumar-83a36518a/"
  },
  {
    id: 11,
    name: "Ansil M B",
    role: "Digital Marketer",
    image: ansil,
    link:"https://www.linkedin.com/in/ansil-m-b-25a0a124a/"
  },
  {
    id: 12,
    name: "Devadathan T s",
    role: "Visual Designer",
    image: devan,
    link:"https://www.linkedin.com/in/devadathan-ts-80535432a/"
  },
];

//services page
import dmservice from "../assets/images/dmservice.jpg";
import brandingservice from "../assets/images/brandingservice.jpg";
import techservice from "../assets/images/technologyservice.jpg";
import socialservice from "../assets/images/socialservice.jpg";
import expedesignservice from "../assets/images/expedesignservice.jpg";

export const ServicesDatas = [
  {
    title: "Branding",
    description:
      "From defining identity and values to creating premium logos, cohesive materials, immersive visuals, and functional product designs that captivate and leave a lasting impression.",
    imageUrl: brandingservice,
    services: [
      "Brand Consulting",
      "Brand Identity",
      "Logo Design",
      "Brand Collateral",
      "2D/3D Visualization",
      "Product Design",
    ],
    link: "/branding",
  },
  {
    title: "Technology",
    description:
      "Building dynamic, high-performance websites, designing scalable mobile apps, and delivering complete e-commerce solutions to drive business growth and enhance user experiences.",
    imageUrl: techservice,
    services: [
      "Web Development",
      "Mobile App Development",
      "WebApp Developmet",
      " E-Commerce",
      "Coustom Software Development",
    ],
    link: "/technology",
  },
  {
    title: "Digital Marketing",
    description:
      "Creating powerful social strategies, executing data-driven campaigns, and enhancing SEO to boost visibility and drive measurable growth across all platforms.",
    imageUrl: dmservice,
    services: [
      "Social Media Marketing",
      "Performance Marketing",
      "Meta Ads",
      "SEO Strategy",
      "Linkedin Campaigns",
      "Google Ads",
    ],
    link: "/digital-marketing",
  },
  {
    title: "Social Branding",
    description:
      "Creating valuable, audience-focused content, producing innovative visuals, and building communities that engage and foster brand loyalty for lasting connections and impact.",
    imageUrl: socialservice,
    services: [
      "Content Marketing",
      "Organic Creatives",
      "Community Building",
      "Social Media Management",
    ],
    link: "/social-branding",
  },
  {
    title: "Experience Design",
    description:
      "Designing intuitive UI/UX, crafting visually appealing websites, and ensuring seamless mobile experiences for engaging, user-friendly interactions across all platforms.",
    imageUrl: expedesignservice,
    services: [
      "Website Design",
      "Mobile App Design",
      "Web App Design",
      "Software Design",
    ],
    link: "/experience-design",
  },
];

//DM process
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.png";
import image6 from "../assets/images/img6.png";
import image7 from "../assets/images/img7.png";

export const DmProcess = [
  {
    title: "Research & Strategy",
    description:
      "Understanding your business, audience, and market is the first step to digital success. We begin by gathering valuable insights through careful research—studying your competitors, industry trends, and customer needs. With this knowledge, we create a clear, goal-driven strategy that guides every part of your digital marketing journey.",
    image: image1,
  },
  {
    title: "Website & SEO Optimization",
    description:
      "Your website is the heart of your online presence. We focus on making it fast, user-friendly, and built to convert. At the same time, we optimize it for search engines—improving structure, content, and keywords—so your business ranks higher and reaches the right audience organically.",
    image: image2,
  },
  {
    title: "Content Marketing",
    description:
      "Great content builds trust and keeps your audience engaged. We create valuable and relevant content—blogs, videos, graphics, and more—that speaks to your audience’s needs. By sharing the right message at the right time, we help your brand stay connected, build authority, and drive meaningful results.",
    image: image3,
  },
  {
    title: "Social Media Marketing",
    description:
      "Social media is where conversations happen and connections grow. We help your brand stand out with engaging content, consistent posting, and smart strategies tailored to each platform. From building community to driving traffic, we make sure your social presence supports your goals and speaks to your audience.",
    image: image4,
  },
  {
    title: "Paid Advertising",
    description:
      "Paid ads help you reach the right people at the right time. We design targeted campaigns across platforms like Google, Facebook, and Instagram to drive traffic, leads, and sales. With smart budgeting, precise targeting, and ongoing optimization, we make sure every ad delivers real results for your business.",
    image: image5,
  },
  {
    title: "Email Marketing",
    description:
      "Email is a powerful way to stay connected with your audience. We craft personalized and engaging emails—from welcome messages to newsletters and offers—that keep your brand top of mind. With the right timing and strategy, we turn subscribers into loyal customers.",
    image: image6,
  },
  {
    title: "Performance Tracking",
    description:
      "We believe in results you can see. Through detailed tracking and analytics, we monitor every campaign’s performance—what’s working, what’s not, and where to improve. This data-driven approach helps us fine-tune strategies, maximize ROI, and keep your digital marketing on the path to success.",
    image: image7,
  },
];

//DM FAQ
export const DMfaq = [
  {
    title: "What is digital marketing and how can it help my business?",
    details:
      "Digital marketing uses online channels like social media, search engines, and email to promote your brand, reach more customers, and increase sales. It helps businesses build visibility, generate leads, and grow revenue with measurable strategies.",
  },
  {
    title:
      " How do I know which digital marketing service is right for my business?",
    details:
      "It depends on your goals. For brand awareness, social media works best. For immediate traffic and leads, Google Ads and Meta Ads are effective. If you want long-term organic growth, SEO is the way to go. We’ll guide you in choosing the right mix based on your needs.",
  },
  {
    title: "What’s the difference between SEO and Google Ads?",
    details:
      "SEO improves your organic search rankings over time without paying for clicks. Google Ads are paid advertisements that appear at the top of search results instantly. Both work well together for a balanced strategy.",
  },
  {
    title: " How long does it take to see results from digital marketing?",
    details:
      "Paid campaigns like Google Ads or Meta Ads can show results within days. SEO and organic strategies may take 3–6 months for significant improvements. We'll provide a timeline and clear KPIs for each service.",
  },
  {
    title: "Do you offer customized digital marketing packages?",
    details:
      "Yes! We tailor each digital marketing package based on your industry, goals, and budget to ensure maximum return on investment.",
  },
  {
    title: "Can you handle ads on both Meta and Google platforms?",
    details:
      "Absolutely. Our team is experienced in running high-performing ad campaigns on both Meta (Facebook & Instagram) and Google platforms for various business goals.",
  },
  {
    title: "Is LinkedIn marketing effective for B2B businesses?",
    details:
      "Yes, LinkedIn is one of the most powerful platforms for B2B lead generation. Our LinkedIn campaigns are designed to reach decision-makers and generate qualified leads.",
  },
];

//Expedesign FAQ
export const ExpedesignFaq = [
  {
    title: "What is UI/UX Design?",
    details:
      "UI (User Interface) design focuses on the visual and interactive aspects of a digital product, while UX (User Experience) design ensures the product is easy to use, efficient, and enjoyable for the user. Together, they shape how users interact with your product.",
  },
  {
    title:
      " What does UED (User Experience Design) cover?",
    details:
      "UED involves researching user behavior, creating user journeys, wireframes, prototypes, usability testing, and designing a seamless experience that aligns with user needs and business goals.",
  },
  {
    title: " What tools do you use for design?",
    details:
      "We use industry-standard tools like Figma, Adobe XD, Sketch, InVision, and tools like Hotjar and Maze for user testing and research",
  },
  {
    title: " How long does a UI/UX design project take?",
    details:
      "The timeline depends on the project’s complexity. A simple app or landing page may take 2–3 weeks, while a full product design could take 4–10 weeks or more.",
  },
  {
    title: " Do you provide responsive design for mobile and desktop?",
    details:
      "Yes. We design fully responsive interfaces that work seamlessly across devices—desktop, tablet, and mobile.",
  },
  {
    title: "Can you redesign an existing website or app?",
    details:
      "Absolutely! We offer UX audits, identify usability issues, and create a modern, optimized redesign that improves both aesthetics and performance.",
  },
  {
    title: " Do you also handle development after design?",
    details:
      "While our primary focus is design, we collaborate closely with development teams and can also refer trusted developers if needed.",
  },
];

//branding FAQ
export const BrandingFaq = [
  {
    title: " Why is branding important for my business?",
    details:
      "Branding helps differentiate your business, builds trust with your audience, increases recognition, and creates a strong emotional connection that influences buying decisions.",
  },
  {
    title:
      " How long does it take to build a brand?",
    details:
      "Depending on your needs, branding can take anywhere from 2 to 8 weeks. A full branding project with strategy, design, and rollout may take longer for large businesses.",
  },
  {
    title: " Do you offer rebranding services?",
    details:
      "Yes. Whether you're updating an outdated look or shifting your business focus, we offer complete rebranding—including strategy, visuals, and brand communication refresh.",
  },
  {
    title: " Will I get a brand guideline document?",
    details:
      "Yes, all our full-branding packages come with a comprehensive brand guideline PDF covering logo usage, color codes, fonts, tone of voice, and more for consistent application.",
  },
  {
    title: " Can I use my own logo and still get other branding assets?",
    details:
      "Absolutely. If you already have a logo, we can work around it to create a complete brand kit including typography, colors, templates, and marketing materials.",
  },
  {
    title: "What industries do you specialize in?",
    details:
      "We work with a wide range of industries including technology, education, retail, fashion, healthcare, hospitality, and more.",
  }
];

//socialbransing FAQ
export const socialBrandingFaq = [
  {
    title: " What is social branding?",
    details:
      "Social branding is the process of building and maintaining your brand’s identity across social media platforms. It includes creating a consistent tone, visual style, and strategy that reflects your brand’s values and connects with your target audience.",
  },
  {
    title:
      "Why is social branding important for my business?",
    details:
      "A strong social brand helps build trust, increase brand recognition, attract and retain customers, and boost engagement across platforms. It's essential for long-term digital growth.",
  },
  {
    title: " What platforms do you work with for social branding?",
    details:
      "We work with Instagram, Facebook, YouTube, LinkedIn, TikTok, Pinterest, X (Twitter), Snapchat, WhatsApp Business, and even e-commerce platforms like Amazon, Etsy, and Shopify to ensure brand consistency everywhere.",
  },
  {
    title: " Can I customize the branding services based on my platform preferences?",
    details:
      "Absolutely! We offer tailored plans depending on the platforms you prioritize and the goals you want to achieve.",
  },
  {
    title: "How long does it take to see results?",
    details:
      "While brand recognition is a long-term goal, most clients start seeing improved engagement and follower growth within 4 to 8 weeks of consistent strategy and content.",
  },
  {
    title: "What industries do you specialize in?",
    details:
      "We work with a wide range of industries including technology, education, retail, fashion, healthcare, hospitality, and more.",
  }
];

//Branding process
import im1 from "../assets/images/brnd8.png";
import im2 from "../assets/images/brnd1.png";
import im3 from "../assets/images/brnd2.png";
import im4 from "../assets/images/brnd3.png";
import im5 from "../assets/images/brnd4.png";
import im6 from "../assets/images/brnd5.png";
import im7 from "../assets/images/brnd6.png";
import im8 from "../assets/images/brnd7.png";

export const brandingProcess = [
  {
    title: "Brand Discovery ",
    description:
      "Gain clarity on your business by analyzing strengths, weaknesses, opportunities, and threats (SWOT), conducting market research, studying competitors, and creating detailed customer personas aligned with your goals to guide effective marketing and strategy.",
    image: im1,
    reverse: false,
  },
  {
    title: "Brand Strategy",
    description:
      "Establish your brand’s foundation by defining its purpose, vision, and mission. Identify core values, craft a compelling Unique Value Proposition (UVP), and position your brand clearly in the market to resonate with your target audience and differentiate from competitors.",
    image: im2,
    reverse: true,
  },
  {
    title: "Brand Identity",
    description:
      "Convey your brand identity through a consistent visual and verbal style—design a meaningful logo, choose typography and color palette, define imagery style, establish brand voice and tone, and create a memorable tagline or slogan to enhance recognition.",
    image: im3,
    reverse: false,
  },
  {
    title: "Brand Messaging",
    description:
      "Ensure consistent brand communication with a clear elevator pitch, defined key messages, a compelling storytelling framework, and content guidelines that align with your brand’s tone, values, and audience across all platforms and touchpoints.",
    image: im5,
    reverse: true,
  },
  {
    title: "Brand Touchpoint",
    description:
      "Maintain brand consistency by applying your identity across all platforms—design a cohesive website, align social media visuals, brand your packaging, create on-brand email templates, and ensure print materials reflect your visual and verbal style.",
    image: im6,
    reverse: false,
  },
  {
    title: "Brand Guidelines",
    description:
      "Create a comprehensive style guide that documents your brand’s visual and verbal identity, including usage rules and guidelines to ensure consistency across all touchpoints for both internal teams and external partners.",
    image: im7,
    reverse: true,
  },
  {
    title: "Brand Launch Rollout",
    description:
      "Launch your brand effectively with an internal rollout to engage staff, followed by external campaigns, social media promotions, and press announcements to build awareness, generate excitement, and ensure a strong market introduction.",
    image: im8,
    reverse: false,
  },
  {
    title: "Brand Management",
    description:
      "Continuously track brand performance, conduct regular audits to assess consistency and impact, and refresh brand elements when necessary to stay relevant, aligned with market trends, and connected to your audience’s evolving needs.",
    image: im4,
    reverse: true,
  },
];

import imge1 from "../assets/vectors/socialmedia.png";
import imge2 from "../assets/vectors/brandvoice.png";
import imge3 from "../assets/vectors/collab.png";
import imge4 from "../assets/vectors/content.png";
import imge5 from "../assets/vectors/engment.png";
import imge6 from "../assets/vectors/performance.png";
import { link } from "framer-motion/client";
export const socialBrandingprocess = [
  {
    imgeUrl: imge1,
    title: "Social Media Identity Design",
    description:
      "We create visually consistent and audience-aligned profiles with compelling bios, branded covers, and optimized CTAs.",
  },
  {
    imgeUrl: imge2,
    title: "Brand Voice & Messaging",
    description:
      "From key themes to tone, we define and maintain a consistent voice across all touchpoints to strengthen identity and audience perception.",
  },
  {
    imgeUrl: imge3,
    title: "Content Strategy & Planning",
    description:
      "We build a robust content calendar driven by goals, audience interests, and seasonality to build audience loyalty.",
  },
  {
    imgeUrl: imge4,
    title: "Engagement & Community Building",
    description:
      "We enhance conversations by interacting with your audience, addressing DMs, replying to mentions, and managing followers through workflows.",
  },
  {
    imgeUrl: imge5,
    title: "Collaborations & Influence",
    description:
      "Boost reach with creator collaborations, influencer campaigns, and engagement content that grows reach authentically in your target market.",
  },
  {
    imgeUrl: imge6,
    title: "Performance Tracking & Optimization",
    description:
      "We continuously measure your performance using platform tools & refine new strategies for consistent growth and efficiency.",
  },
];

export const processExpeDesign = [
  {
    title: "User Research",
    description:
      "User research is the process of understanding users’ needs, behaviors, and main points to be focused towards the goals.",
    dropDown:
      "User research involves understanding users’ needs, behaviors, and pain points to align product development with their goals, ensuring a user-centered approach that enhances usability, satisfaction, and overall experience.",
  },
  {
    title: "Information Architecture",
    description:
      "Information Architecture (IA) is the process of organizing and structuring content in a clear and logical way.",
    dropDown:
      "Information Architecture (IA) is about organizing and structuring content clearly and logically, helping users find information easily and navigate products or websites efficiently.",
  },
  {
    title: "Interaction Design",
    description:
      "Interaction Design (IxD) focuses on creating meaningful and effective interactions between users and products.",
    dropDown:
      "Interaction Design (IxD) is the process of designing meaningful and effective interactions between users and products, aiming to enhance usability, responsiveness, and overall user satisfaction through intuitive and engaging interfaces.",
  },
  {
    title: "Visual & UI Design",
    description:
      "UI Design involves designing the interactive elements of a product, such as buttons, menus, and icons, for seamless user experience",
    dropDown:
      "UI Design focuses on crafting interactive elements like buttons, menus, and icons to create a visually appealing and intuitive interface, ensuring a seamless and engaging user experience across digital products.",
  },
  {
    title: "Content Strategy",
    description:
      "Content Strategy is the planning, creation, delivery, and management of content to meet user needs and business goals.",
    dropDown:
      "Content Strategy involves planning, creating, delivering, and managing content to effectively meet user needs while supporting business goals, ensuring clarity, consistency, and relevance across all platforms.",
  },
  {
    title: "Service Design",
    description:
      "Service Design is the process of planning and organizing a service's components, such as people, processes, and technology",
      dropDown:"Service Design is the process of planning and organizing a service's components—people, processes, and technology—to deliver a seamless, efficient, and user-friendly experience across all touchpoints."

  },
  {
    title: "Testing & Feedback",
    description:
      "Testing & Feedback involves evaluating a product or service by observing how users interact with it and gathering their opinions.",
    dropDown:
      "Testing & Feedback involves evaluating a product or service by observing user interactions and collecting their input, helping identify issues, improve usability, and ensure the final solution meets user needs and expectations.",
  },
];
