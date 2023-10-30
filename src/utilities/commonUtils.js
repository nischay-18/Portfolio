import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import Education from "../PortfolioContainer/Education/Education";

import WorkExperience from "../PortfolioContainer/workexperience/workexperience";
import skills from "../PortfolioContainer/skills/skills";
import projects from "../PortfolioContainer/projects/projects";
import publications from "../PortfolioContainer/publications/publications";
import Foooter from "../PortfolioContainer/Foooter/Foooter";
import Certifications from "../PortfolioContainer/certifications/certifications";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";


export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Education",
    component: Education,
  },
  {
    screen_name: "WorkExperience",
    component: WorkExperience,

  },
  {
    screen_name: "Skills",
    component: skills,

  },
  {
    screen_name: "Projects",
    component: projects,

  },
  {
    screen_name: "Publications",
    component: publications,

  },
  {
    screen_name: "Certifications",
    component: Certifications,

  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
  {
    screen_name: "Foooter",
    component: Foooter,
  }
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name)

    return i;
  }

  return -1;
};
