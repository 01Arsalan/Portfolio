// import every asset here and export them to be imported from other files 
// also have content hers as json
import replay from "/replay.svg";
import play from "/play.svg";
import pause from "/pause.svg";
import project_1 from "/project_1.mp4";
import project_2 from "/project_2.mp4";
import project_3 from "/project_3.mp4";
import project_4 from "/project_4.mp4";


export const navItems = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-4 md:col-span-11 md:col-start-1 col-start-1 md:row-span-8 xs:row-span-12 row-span-9 ",
        imgClassName: "w-full h-full",
        titleParentClassName: "justify-end md:max-w-[26rem] max-w-64 ",
        titleClassName: "",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-3 md:col-span-5 md:row-span-3 lg:h-[10rem] xs:row-span-7 row-span-6 ",
        imgClassName: "absolute -bottom-20 z-20 xs:h-[130%] h-[140%] object-contain top-0  bg-gradient_3 bg-gradient_light",
        titleParentClassName: "justify-start z-30 lg:p-4",
        titleClassName: "lg:text-xl lg:max-w-80 ",
        img: "/Pagination.svg",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-3 md:col-span-6 md:row-span-5 row-span-7 lg:h-[12rem] lg:mt-8 ",
        imgClassName: "",
        titleParentClassName: "justify-center lg:p-5",
        titleClassName: "text-2xl xs:text-3xl mt-2",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-5 md:row-span-3 row-span-5 ",
        imgClassName: "",
        titleParentClassName: "justify-start lg:p-5",
        titleClassName: "lg:text-base xs:text-xl",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a custom shopify theme ",
        description: "THE INSIDE SCOOP",
        className: "lg:col-span-5 lg:row-span-7 md:col-span-6 md:row-span-5 row-span-7",
        imgClassName: "absolute right-0 bottom-0 lg:w-96 w-60",
        titleParentClassName: "justify-center",
        titleClassName: "mt-2 w-[10rem] xs:w-[13rem] lg:w-[16rem]",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-5 md:row-span-4 row-span-6 p-0",
        imgClassName: "",
        titleParentClassName: "flex items-center text-center lg:p-5 ml:p-10",
        titleClassName: "lg:text-xl md:text-xl text-2xl max-w-[17rem]",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "The Grill - A Restraunt App",
        des: "Discover delicious dining with The Grill app—order food, book tables, and plan takeouts effortlessly.",
        img: "/project_img_1.png",
        iconLists: ["/re.svg", "/node.png", "/firebase.png", "/mongo.png", "/razorpay.png"],
        urlTitle: "The Grill",
        link: "https://thegrill.onrender.com",
    },
    {
        id: 2,
        title: "Kash Camp - Camping Site Guide ",
        des: "Your ultimate camping site guide—find, plan, and explore perfect spots with Kash Camp.",
        img: "/project_img_2.png",
        iconLists: ["/node.png", "/mongo.png", "/mapbox.png", "/cloudinary.png", "/expressjs.png"],
        urlTitle: "Kash Camp",
        link: "https://kash-camp.onrender.com",
    },
    {
        id: 3,
        title: "Brainwave - Front End",
        des: "Unlock AI-driven productivity with Brainwave Curve: chat, create, and generate photos and videos seamlessly in one powerful app.",
        img: "/project_img_3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
        urlTitle: "Brainwave",
        link: "/",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/project_img_4.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gsap.svg"],
        urlTitle: "Iphone 15",
        link: "/",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
];

export const companies = [
    {
        id: 1,
        name: "Inweave Studios",
        img: "/inweave.jpeg",
        imgClass:"md:w-20 xs:w-20 w-[3rem]",
        hasName:false,
        nameClass:'xs:leading-5 leading-[9px] my-auto akaya-kanadaka-regular xs:text-[14px] text-[10px]'
    },
    {
        id: 2,
        name: "Hoping Minds",
        img: "/hoping_minds.png",
        imgClass:"md:w-36 xs:w-36 w-[6rem]",
        hasName:true,
        nameClass:''
    },
    {
        id: 3,
        name: "Solitaire Infosys",
        img: "/Solitaire.png",
        imgClass:"md:w-44 xs:w-44 w-[6rem]",
        hasName:true,
        nameClass:''
    },

];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer",
        desc: "Develop and optimize responsive e-commerce sites on Shopify, enhancing functionality and user experience across multiple projects.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "MERN Developer",
        desc: "Design and implement dynamic web applications using the MERN stack, focusing on scalable backend systems and interactive front-end features.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "ML Intern",
        desc: "Develop machine learning models and data-driven solutions, enhancing predictive accuracy and automation.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Loading...",
        desc: "Future is loading...",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        class:"",
        link:"https://github.com/01Arsalan",
    },
    {
        id: 2,
        img: "/whatsapp.svg",
        class:"w-[30px]",
        link:"https://wa.me/7006443736",

    },
    {
        id: 3,
        img: "/link.svg",
        class:"",
        link:"https://www.linkedin.com/in/arsalan-wani",
    },
];


export const techList = {
    leftList: [
        {
            id: 1,
            title: "React.js",
        },
        {
            id: 2,
            title: "Node.js",
        },
        {
            id: 3,
            title: "MongoDB",
        },
    ],
    rightList: [
        {
            id: 1,
            title: "Liquid",
        },
        {
            id: 2,
            title: "Python",
        },
        {
            id: 3,
            title: "java",
        },
    ]
}

export const replayImg = replay;
export const playImg = play;
export const pauseImg = pause;

export const project_Video_1 = project_1;
export const project_Video_2 = project_2;
export const project_Video_3 = project_3;
export const project_Video_4 = project_4;

export const hightlightsSlides = [
    {
      id: 1,
      video: project_Video_1,
      videoDuration: 34,
    },
    {
      id: 2,
      video: project_Video_2,
      videoDuration: 20,
    },
    {
      id: 3,
      video: project_Video_3,
      videoDuration: 24,
    },
    {
      id: 4,
      video: project_Video_4,
      videoDuration: 27,
    },
  ];
