import SectionTitle from "./SectionTitle"
import ProjectData from "../data/ProjectData"

const Projects = () => {
  return (
    <section className="projects_section" id="project">
      <SectionTitle
        title="My Latest Projects"
        desc="Here is a list of some of my projects. You can find the rest of them in my GitHub."
      />

      <div className="projects_wrapper">
        {ProjectData.map((project) => {
          return (
            <div className="single_project" key={project.id}
              style={{ background: `linear-gradient(#00000060, #00000060), url(${project.img})` }}>
              <div className="project_desc">
                <p>{project.category}</p>
                <h2>{project.title}</h2>
                <div className="linked_button">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">Repository Link</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
