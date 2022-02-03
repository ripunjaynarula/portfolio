import SectionTitle from "./SectionTitle";

const Tech = () => {
  return (
    <>
      <section className="tech_section" id="techstack">
        <SectionTitle
          title="My Tech Stack"
          desc="Here is a list of tools I use and Technologies I am proficient with."
        />

       

        <div className="tech_wrapper">
          <div
            className="techstack"
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fab fa-react fa-8x"></i>
            <div className="project_desc"></div>
          </div>
          
          <div
            className="techstack"
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fab fa-css3 fa-8x"></i>
            <div className="project_desc"></div>

          </div>

          
          <div
            className="techstack"
            style={{ background: `linear-gradient(#00000060, #00000060)` }}
          >
            <i style={{ size: 24 }} className="fas fa-code fa-8x"></i>
            <div className="project_desc"></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Tech;
