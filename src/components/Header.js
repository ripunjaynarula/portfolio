import Resume from "../assets/Resume.pdf";

const Header = () => {
  return (
    <>
    <div id="home">

    </div>
    <header>
      <div className="container " id="header">
        <div className="header_desc ">
          <h1 className="hi_name"><b>Hi, I'm <span>Ripunjay</span></b></h1> 
         
          <div className="titles" >
          <p className="title1" ><span className="firstletter">D</span>eveloper</p>
          <p className="title2"><span className="firstletter">D</span>esigner</p>
          <p className="title3"><span className="firstletter">S</span>tudent</p>
          </div>
          {/* <h2>Software Developer</h2> */}
        </div>
        <br/>
        <p className="quote" ><i>"You miss 100% of the shots you don't take."</i> <br/><span className="byline">-Wayne Gretzky</span></p>
         <br/>
        <div className="resume_button title4" >
              <a target="_blank" download="Resume.pdf" rel="noopener noreferrer" href={Resume}>Download Resume</a>
            </div>
      </div>
    </header>
    </>
  )
}

export default Header
