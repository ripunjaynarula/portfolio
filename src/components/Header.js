const Header = () => {
  return (
    <header>
      <div className="container " id="header">
        <div className="header_desc ">
          <h1 className="hi_name">Hi, I'm <span>Ripunjay</span></h1> 
          <div className="titles">
          <p className="title1">Developer</p>
          <p className="title2">Designer</p>
          <p className="title3">Student</p>
          </div>
          {/* <h2>Software Developer</h2> */}
        </div>
        <br/><br/>
        <div className="resume_button title4">
              <a className="resume_button" href="../assets/Resume.pdf" download>Download Resume</a>
            </div>
      </div>
    </header>
  )
}

export default Header
