import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "WEB DESIGN",
    title: "Games Website Design",
    description:
      "Crafted an engaging and visually appealing website for a gaming platform, focusing on user experience and interactive design.",
    demo: "https://asmaasmara.github.io/front/",
    code: "https://github.com/AsMaaSmara/front",
  },
  {
    id: 2,
    image: card2,
    category: "WEB DESIGN",
    title: "E-book website Design",
    description:
      "Developed a sleek and user-friendly e-book platform, emphasizing easy navigation and an engaging reading experience.",
    demo: "https://asmaasmara.github.io/E-book-website/",
    code: "https://github.com/AsMaaSmara/E-book-website",
  },
  {
    id: 3,
    image: card3,
    category: "WEB DESIGN",
    title: "E-learning website Design",
    description:
      "Designed an educational platform with a focus on user engagement and accessibility, ensuring a seamless learning experience.",
    demo: "https://asmaasmara.github.io/WOMAC-/",
    code: "https://github.com/AsMaaSmara/WOMAC-",
  },
  {
    id: 4,
    image: card4,
    category: "WEB DESIGN",
    title: "Finder website Design",
    description:
      "Created a user-friendly interface for a search application, focusing on ease of navigation and accessibility.",
    demo: "https://asmaasmara.github.io/Finder/",
    code: "https://github.com/AsMaaSmara/Finder",
  },
  {
    id: 5,
    image: card5,
    category: "WEB DESIGN",
    title: "Exam dashboard Design",
    description:
      "Developed a comprehensive dashboard layout that organizes information effectively, enhancing user productivity.",
    demo: "https://asmaasmara.github.io/JS-Exam/",
    code: "https://github.com/AsMaaSmara/JS-Exam",
  },
  {
    id: 6,
    image: card6,
    category: "WEB DESIGN",
    title: "Fun Memory Game ",
    description:
      "Designed and implemented a visually appealing and interactive memory game, focusing on user experience and engagement.",
    demo: "https://asmaasmara.github.io/Memory-Game/",
    code: "https://github.com/AsMaaSmara/Memory-Game",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/AsMaaSmara?tab=repositories"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          target="_blank"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
