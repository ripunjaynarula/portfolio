import { useRef } from "react"
// import Logo from "../assets/logo.png"

const Nav = () => {
  const burgerMenuRef = useRef()
  const listNavRef = useRef()
  const navRef = useRef()

  function ToggleNav() {
    const burgerMenu = burgerMenuRef.current
    const listNav = listNavRef.current

    listNav.classList.toggle('nav-active')
    burgerMenu.classList.toggle('toggle')
  }

  window.addEventListener("scroll", () => {
    const nav = navRef.current
    nav.classList.toggle("stickyNav", window.scrollY > 0)
  })

  return (
    <nav ref={navRef}>
      <div className="nav_left_content nav_content_container">
        <div className="nav_logo_container nav_container_item">
          {/* <img src={Logo} alt="Main Logo" /> */}
        </div>

        <ul className="nav_links nav_text_links nav_container_item" ref={listNavRef}>
          <li style={{cursor:"pointer"}} onClick={() => window.scrollTo(0, 0)}>Home</li>
          <li><a href="#techstack">Tech Stack</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact_section">Contact</a></li>
        </ul>
      </div>

      <div className="nav_right_content nav_content_container">
        <ul className="social_links nav_container_item nav_links">
          {/* <li><a href="https://www.facebook.com/ripunjay.narula/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a></li> */}
          <li><a href="https://github.com/ripunjaynarula" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a></li>
          <li><a href="https://twitter.com/RipunjayNarula" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a></li>
          <li><a href="https://www.linkedin.com/in/ripunjaynarula/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a></li>
          {/* <li><a href="https://www.instagram.com/ripunjaynarula/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a></li> */}
        </ul>

        
      </div>

      <div className="bars" ref={burgerMenuRef} onClick={ToggleNav}>
        <div className="line1 line"></div>
        <div className="line2 line"></div>
        <div className="line3 line"></div>
      </div>
    </nav>
  )
}

export default Nav
