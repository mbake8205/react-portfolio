import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A beautifully designed weather app that displays the weather for any country in a clean and modern interface.",
    image: "/projects/WeatherApp.PNG",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://weather-app-wheat-ten-84.vercel.app/",
    githubUrl: "https://github.com/mbake8205/Weather-App",
  },

  {
    id: 2,
    title: "Movie App",
    description:
      "A movie app built using the TMDB API, allowing users to explore movies with an attractive and responsive design.",
    image: "/projects/MovieApp.PNG",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://movie-app-pi-black.vercel.app/",
    githubUrl: "https://github.com/mbake8205/Movie-app",
  },

  {
    id: 3,
    title: "Ecommerce",
    description:
      "A user-friendly and visually appealing e-commerce app that provides a smooth shopping experience.",
    image: "/projects/Ecommerce.PNG",
    tags: ["React", "TailwindCSS", "Next.js", "Stripe"],
    demoUrl: "https://ecommerce-pink-psi-13.vercel.app/",
    githubUrl: "https://github.com/mbake8205/Ecommerce",
  },

  {
    id: 4,
    title: "Portfolio",
    description:
      "A professional portfolio website that beautifully showcases my skills, projects, and experience.",
    image: "/projects/Portfolio.PNG",
    tags: ["React", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "https://github.com/mbake8205/react-portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mb-12 mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3 mt-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-color duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href=""
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
