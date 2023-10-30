import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import databases from '../../../src/images/database1.jpeg';
import sorting from '../../../src/images/sorting.png';
import search from '../../../src/images/search.jpg';
import "./publications.css";
const projectsData =[
 {
    title: `A Detailed Examination of MySQL and MongoDB`,
    description: "Conducted a comprehensive analysis of MongoDB vs. MySQL performance, highlighting MongoDB's efficiency for larger data sets and offering developers guidance on database selection based on scalability and design considerations.",
    image: databases, // Path to the project's image
    githubLink: "http://thedesignengineering.com/index.php/DE/article/view/7099", // Replace with actual GitHub link
},
{
    title: `A Comprehensive Study of Various Sorting Algorithms`,
    description: "Explored nine sorting algorithms, assessing efficiency and applicability. Conducted tests revealing non-comparison algorithms excel with large datasets, aiding developers in optimizing data-driven applications.",
    image: sorting, // Path to the project's image
    githubLink: "https://www.ijsr.net/getabstract.php?paperid=SR211114140358t", // Replace with actual GitHub link
},
{
    title: `A Brief Survey and Examination of Various Searching Techniques`,
    description: "Researched searching algorithms like linear, binary, and hash search, providing insights on efficiencies across datasets. Emphasized hash search's excellence for larger sets and binary for medium datasets.",
    image: search, // Path to the project's image
    githubLink: "https://www.ijsr.net/getabstract.php?paperid=SR211014183539", // Replace with actual GitHub link
}
];

const ProjectCard = ({ title, description, technologies, image, githubLink }) => (
    <div className="project-card-container">
        <img className="project-image" src={image} alt={title} />
        <div className="project-details">
            <div className="project-title">{title}</div>
            <p className="project-description">{description}</p>
            <div className="github-link-container">
            <a href={githubLink} className="github-link">Link</a>
        </div>
        </div>
    </div>
);

const publications = () => (
    <div id="Publications">
    <div className="main-container-proj">
    <div className="projects-main-container">    
    <ScreenHeading subHeading={""} title={"Publications"} />
    <div className="projects-central-form23 container">
        {projectsData.map((data, index) => (
            <ProjectCard key={index} {...data} />
        ))}
    </div>
    </div>
    </div>
    </div>
);

export default publications;