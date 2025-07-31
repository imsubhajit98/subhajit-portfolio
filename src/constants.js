// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import php from './assets/tech_logo/php.png'
import codeIgniter from './assets/tech_logo/CodeIgniter.png'
import wordpress from './assets/tech_logo/wordpress.png'
import jquery from './assets/tech_logo/jquery.png'
import adobe from './assets/tech_logo/adobe.png'

// Experience Section Logo's
import agtsLogo from './assets/company_logo/agtsindia_logo.jpeg'
import technosolis from './assets/company_logo/technosolis_informatics_limited_logo.jpeg'


// Education Section Logo's
import vu from './assets/education_logo/Vidyasagar_University_Logo.png'
import debra_clg from './assets/education_logo/debra-clg.jpeg'
import debra_scl from './assets/education_logo/debra_school.jpeg'

// Project Section Logo's
import ecom_vente from './assets/work_logo/ecom-vente.png';
import gme_peru from './assets/work_logo/gme_peru.png'
import credaikolkata from './assets/work_logo/credaikolkata.jpg' 
import venkon from './assets/work_logo/venkon.jpg'
import minibars from './assets/work_logo/minibars.jpg'
import protactt from './assets/work_logo/protactt.jpg'
import qrcode from './assets/work_logo/qrcode.jpg'
import plaudit from './assets/work_logo/plaudit.jpg'
import adir from './assets/work_logo/adir.jpg'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      {name:'JQuery',logo: jquery}
    ],
  },
  {
    title: 'Backend',
    skills: [
       {name:'CodeIgniter 3', logo: codeIgniter},
      {name:'Wordpress', logo:wordpress},
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      {name:'PHP', logo:php}
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Photoshop', logo: adobe },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: agtsLogo,
      role: "Frontend Developer",
      company: "Avant Garde Technologies",
      date: "Sep 2023 - Present",
      desc: "Led the development of interactive, user-centric web interfaces using React.js, Bootstrap, and JavaScript. Worked closely with backend developers using CodeIgniter to integrate data and ensure smooth functionality. ",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "PHP",
        "Wordpress",
        "CodeIgniter 3" 
      ],
    },
    {
      id: 1,
      img: technosolis,
      role: "HTML Developer",
      company: "Technosolis Informatics Limited",
      date: "April 2023 - August 2023",
      desc: "Designed and developed responsive web pages using HTML5, CSS3, Bootstrap, JavaScript, and jQuery. Worked in coordination with Junior developers and designers. Focused on cross-browser compatibility and optimizing page performance for all screen sizes. ",
      skills: [
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: vu,
      school: "Vidyasagar University, Medinipur",
      date: "Aug 2019 - July 2022",
      grade: "81.76%",
      desc: "I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: debra_clg,
      school: "Debra Thana Sahid Kshudiram Mahavidyalaya, Debra",
      date: "July 2016 - Jun 2019",
      grade: "57.38%",
      desc: "Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Computer Application - BCA",
    },
    {
      id: 2,
      img: debra_scl,
      school: "Debra Harimati Saraswat Vidyamandir, Debra",
      date: "Apr 2014 - March 2016",
      grade: "75%",
      desc: "I completed my class 12 education from Debra Harimati Saraswat Vidyamandir School, Debra, under the West Bengal board.",
      degree: "WBBSE (XII) - Art's with Computer Application",
    }
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Digital Transformation for brands",
      description:
        "A powerful and user-friendly Website designed to uncover and showcase detailed most popular and reputed marketplaces online. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: ecom_vente,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Woredpress'],
      github: "#",
      webapp: "https://www.ecomvente.com/",
    },
    {
      id: 1,
      title: "Durable Tools for Every Mining Industry",
      description:
        "We offer a wide range of rock drilling tools, including jackleg drills, top drills, pneumatic hammers, and a variety of drilling accessories such as lubricators, shank adapters, coupling sleeves, moil bits, chisels, and airline accessories. ",
      image: gme_peru,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Wordpress'],
      github: "#",
      webapp: "https://gme.com.pe/",
    },
    {
      id: 2,
      title: "Real Estate Homes Developers Association",
      description:
        " We work closely with the government to address development issues and promote Kolkata and the state as a key destination for real estate investment.",
      image: credaikolkata,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'CodeIgniter 3'],
      github: "#",
      webapp: "https://www.credaikolkata.org/",
    },
    {
      id: 4,
      title: "We specialize in QR code solutions",
      description:
        "Scan the QR code to access exclusive content and offers. Stay connected with us for updates and more. Simply scan to discover what's next!",
      image: qrcode,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'CodeIgniter 3', 'PHP'],
      github: "#",
      webapp: "https://demoprojects.co.in/qrcode/",
    },
    {
      id: 7,
      title: "Venkon Software - Driven by Innovation",
      description:
        "Venkon Software Private Limited is a complete IT and ITES company that specializes in a comprehensive range of services, including software development, network ",
      image: venkon,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Wordpress'],
      github: "#",
      webapp: "https://www.venkonsoftware.com/",
    },
    {
      id: 8,
      title: "Plaudit Techno India",
      description:
        "We started our journey in 2007 with a vision to popularize the use of e-rickshaws throughout India by establishing the advantages of e-rickshaws over traditional rickshaws and autorickshaws. ",
      image: plaudit,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Wordpress'],
      github: "#",
      webapp: "https://www.plauditerickshaw.com/",
    },
    {
      id: 9,
      title: "Where imagination meets reality",
      description:
        "At Adir Bharat, we don't fairly construct homes; we construct prospects where creative energy and reality consistently merge. We bring your vision to life with expertly designed real estate projects. We combine creativity and functionality, crafting spaces that reflect innovation, quality, and a commitment to your future.",
      image: adir,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Wordpress'],
      github: "#",
      webapp: "https://www.adirbharat.com/",
    },
    {
      id: 5,
      title: "Easy Analytics & Reporting Backdown It",
      description:
        "Mini Bar Wine Shop brings the world of wines, spirits, and craft beers right to your fingertips. With an intuitive interface, fast delivery, and personalized recommendations, our app makes it easier than ever to discover and enjoy your favorite drinks anytime, anywhere.",
      image: minibars,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'CodeIgniter 3','PHP'],
      github: "#",
      webapp: "https://www.mini-bars.com/",
    },
    {
      id: 6,
      title: "Seamless Technology for Smarter Infrastructure",
      description:
        "We provide certified integrators for enterprise-grade CCTV, access control, fire safety, and network infrastructure across multiple industries.",
      image: protactt,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", 'Wordpress','PHP'],
      github: "#",
      webapp: "https://demoprojects.co.in/protactt-cms/",
    },
    
  ];  