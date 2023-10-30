import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import sudokuImage from '../../../src/images/sudoku.jpg';
import skimlit from '../../../src/images/skimlit.jpg';
import pneumonia from '../../../src/images/pneumonia.jpeg';
import walmart from '../../../src/images/walmart.jpeg';
import news from '../../../src/images/news.jpg';
import disaster from '../../../src/images/disaster.jpg';
import bitcoin from '../../../src/images/bitcoin.jpeg';
import smarthealth from '../../../src/images/smarthealth.jpg';
import ecommerce from '../../../src/images/e-commerece.jpeg';
import winequality from '../../../src/images/winequality.jpg';
import "./projects.css";
const projectsData =[

 {
    title: `SudoSolve`,
    description: "Developed a real-time Sudoku solver that identifies empty grids and fills them accurately with solutions, overlaying results on live video feeds for an interactive experience.",
    technologies: ['OpenCV', 'Python', 'TensorFlow'],
    image: sudokuImage, // Path to the project's image
    githubLink: "https://github.com/nischay-18/SudoSlove", // Replace with actual GitHub link
},
{
    title: `Skimlit`,
    description: "Achieved 80% accuracy in segmenting PubMed 200k RCT dataset abstracts and led the development of advanced models for precise categorization of biomedical abstracts.",
    technologies: ['NLP', 'Pandas', 'Deep Learning'],
    image: skimlit, // Path to the project's image
    githubLink: "https://github.com/nischay-18/skimlit", // Replace with actual GitHub link
},
{
    title: `Pneumonia Detection`,
    description: "Developed a deep learning model for pneumonia detection from chest X-ray images, achieving 91% accuracy with EfficientNet, highlighting the potential for clinical applications in diagnostics.",
    technologies: ['Numpy', 'Pandas', 'TensorFlow'],
    image: pneumonia, // Path to the project's image
    githubLink: "https://github.com/nischay-18/pneumoniadetection", // Replace with actual GitHub link
},
{
    title: `Walmart Sales Forecasting`,
    description: "Conducted comprehensive time series analysis for Walmart sales forecasting, refining models to account for seasonal patterns and improve prediction accuracy based on performance metrics and statistical tests.",
    technologies: ['Time Series Forecasting', 'Data Analysis', 'Python'],
    image: walmart, // Path to the project's image
    githubLink: "https://github.com/nischay-18/WalmartSalesForecasting", // Replace with actual GitHub link
},
{
    title: `News Popularity Prediction`,
    description: "Predicted online news article popularity from Mashable, using various machine learning models. Achieved 65% accuracy with RandomForest, aiding in content strategy optimization and user engagement.",
    technologies: ['Python','Pandas', 'NumPy', 'Machine Learning'],
    image: news, // Path to the project's image
    githubLink: "https://github.com/nischay-18/newspopularityprediction", // Replace with actual GitHub link
},
{
    title: `Disaster Tweets Classification`,
    description: "Explored the potential of natural language processing for classifying disaster-related tweets to improve real-time responses. Utilized various models, achieving the highest accuracy of 83% with BERT.",
    technologies: ['Natural Language Processing','Pandas','Python'],
    image: disaster, // Path to the project's image
    githubLink: "https://github.com/nischay-18/DisasterTweetsClassification", // Replace with actual GitHub link
},
{
    title: `Bitcoin Price Forecasting`,
    description: "Developed BitPredict for time series analysis of Bitcoin prices, revealing challenges in stock market forecasting. Evaluated various models, with ensemble and naive models showing notable results.",
    technologies: ['Pandas','Time Series Forecasting','Deep Learning'],
    image: bitcoin, // Path to the project's image
    githubLink: "https://github.com/nischay-18/Bitcoin_Price_Prediction", // Replace with actual GitHub link
},
{
    title: `Smart Health Prediction Using Machine Learning`,
    description: "Predicted the occurrence of major health conditions including cancer, diabetes, and heart ailments with a 90% accuracy rate, revolutionizing the approach to healthcare diagnostics.",
    technologies: ['Data Analysis','Python','Machine Learning'],
    image: smarthealth, // Path to the project's image
    githubLink: "https://github.com/nischay-18/Bitcoin_Price_Prediction", // Replace with actual GitHub link
}
,
{
    title: `Brazilian E-Commerce Analysis`,
    description: "Analyzed Olist dataset to reveal consumer behavior patterns, product popularity, and review scores, helping businesses adjust inventory and marketing strategies to align with seasonal sales trends.",
    technologies: ['Data Analysis','Tableau','Data Cleaning'],
    image: ecommerce, // Path to the project's image
    githubLink: "https://public.tableau.com/app/profile/nischay.sai.cherukuri/viz/BrazilianE-CommerceAnalysis_16977216137210/Dashboard1", // Replace with actual GitHub link
},
{
    title: `Wine Quality Prediction Using R`,
    description: "Predicted wine quality with 74.90% accuracy using a decision tree model. Demonstrated alcohol positively affects wine quality, while density negatively impacts it. Explored differences between red and white wines..",
    technologies: ['Data Analysis','R','Data Cleaning'],
    image: winequality, // Path to the project's image
    githubLink: "https://github.com/nischay-18/wine_quality_prediction", // Replace with actual GitHub link
}
];
const technologyColors = {
    'OpenCV': 'red',
    'Python': 'indigo',
    'TensorFlow': 'pink',
    'NLP': 'orange',
    'Pandas': 'blue',
    'Deep Learning': 'green',
    'Numpy': 'purple',
    'Time Series Forecasting': 'brown',
    'Data Analysis': 'teal',
    'Machine Learning': 'gray',
    'Tableau': 'red',
    'Data Cleaning': 'indigo',
    'R': 'pink'
};

const ProjectCard = ({ title, description, technologies, image, githubLink }) => (
    <div className="project-card-container">
        <img className="project-image" src={image} alt={title} />
        <div className="project-details">
            <div className="project-title">{title}</div>
            <ul className="technology-list">
                {technologies.map((tech, index) => (
                    <li key={index} style={{ backgroundColor: technologyColors[tech] || 'gray' }} className="technology-item">{tech}</li>
                ))}
            </ul>
            <p className="project-description">{description}</p>
            <div className="github-link-container">
            <a href={githubLink} className="github-link">GitHub</a>
        </div>
        </div>
    </div>
);

const projects = () => (
    <div id="Projects">
    <div className="main-container-pr projects-main-container container">    
    <ScreenHeading subHeading={""} title={"Projects"} />
    <div className="projects-central-form1">
        {projectsData.map((data, index) => (
            <ProjectCard key={index} {...data} />
        ))}
    </div>
    </div>
    </div>
);

export default projects;