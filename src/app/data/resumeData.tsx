import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

let resumeData = {
    about: "I’m someone who’s passionate about creating digital experiences that truly resonate. I focus on understanding people’s needs and enjoy building user-friendly websites that help businesses connect with their audiences. \n Whether I’m working alone or with a team, I’m motivated by a love for learning, growing, and making a positive impact through my work. \n When I’m not working, you’ll probably find me reading, exploring creative hobbies, or simply recharging. ",
    experience: [
        {
            company: "Matrix Information Technology",
            position: "Fullstack Developer",
            period: "Oct 2021 - present",
            links: "#",
            details: [
                "Developed web and mobile applications, ensuring the efficiency and support of existing features. Focused on designing intuitive UI/UX interfaces with tools to enhance the user experience, while prioritizing clean, maintainable, and well-documented code for smooth collaboration."
            ],
            tech: ['JavaScript', 'HTML & CSS', 'TypeScript', 'React', 'React Native', 'Flutter', 'Next.js', 'Node.js', 'PHP', 'sqlserver', 'Storybook']
        },
        {
            company: "Bangga Berbangsa Berbudaya",
            position: "Intern Developer",
            period: "Sep 2019 - Apr 2020",
            links: "https://b3.sbs",
            details: [
                "Involved in the development, redesign, security enhancements of various WordPress websites for clients, including government organizations and private businesses. Redesigning client UI and patched security vulnerabilities."
            ],
            tech: ['JavaScript', 'HTML & CSS', 'PHP', 'Wordpress']

        }
    ],
    education: [{
        university: "Satya Wacana Christian University",
        degree: "Information Technology",
        period: "Aug 2017 - Aug 2022"
    }],
    skills: [
        { name: "React", icon: <FaReact></FaReact> },
        { name: "PHP", icon: <FaPhp></FaPhp> },
        { name: "Next", icon: <SiNextdotjs></SiNextdotjs> },
        { name: "Figma", icon: <FaFigma></FaFigma> },
        { name: "Node Js", icon: <FaNodeJs></FaNodeJs> },
        { name: "SQL", icon: <SiMysql></SiMysql> },
        { name: "Flutter", icon: <RiFlutterFill></RiFlutterFill> },
        { name: "AWS", icon: <FaAws></FaAws> },
        { name: "Vue", icon: <FaVuejs></FaVuejs> },
    ],
    projects: [
        {
            name: "Bethany Lampung Church App",
            desc: "Designed and implemented a church app to enhance community engagement and streamline church operations. ",
            tech: ['Flutter', 'Mysql', 'PHP', 'Javascript', 'HTML & CSS'],
            url: "#",
            image: "/reservation.jpeg"
        },
        {
            name: "Mawar Sharon Church Salatiga App",
            desc: "Created a reservation app to manage service bookings and event registrations during COVID-19 pandemic.",
            tech: ['Vue', 'Mysql', 'Node.js', 'Javascript', 'HTML & CSS'],
            url: "#",
            image: "/reservation.jpeg"

        },
        {
            name: "Mendesak.id",
            desc: "Part of the team that developed this platform, which connects users with a range of on-demand services.",
            tech: ['Stakeholder Coordination', 'Product Roadmap', 'Development Roadmap'],
            url: "https://mendesak.id",
            image: "/reservation.jpeg"
        },
        {
            name: "Polisi Salatiga",
            desc: "Built and maintained the official website for Polisi Salatiga, focusing on improving public communication and streamlining access to essential services.",
            tech: ['Wordpress', 'PHP', 'HTML & CSS'],
            url: "https://polisisalatiga.com",
            image: "/polisi.jpeg"
        },
        {
            name: "Davin kurnia v1",
            desc: "Creating this site for portofolio.",
            tech: ['Next JS', 'Typescript'],
            url: "#",
            image: "/reservation.jpeg"
        },
    ],
    contact:[
        {
            type: "linkedin",
            link: "https://linkedin.com/dafloe",
            icon: <FaLinkedin></FaLinkedin>
        },
        {
            type: "Github",
            link: "https://Github.com/kaiciary",
            icon: <FaGithub></FaGithub>
        },
        {
            type: "email",
            link: "mailto:hello@davinkurnia.com",
            icon: <FaEnvelope></FaEnvelope>
        },
        {
            type: "instagram",
            link: "https://instagram.com/hiuredhy",
            icon: <FaInstagram></FaInstagram>
        },
       
    ]
}
export default resumeData
