import './css/Navbar.css'

const NavBar = () => {

	/* function goToProjects() {
		const projects = document.getElementById("projects-header");
		if (projects) projects.scrollIntoView(true);
	} */
	
	return (
		<nav id="navbar" className="flex align-center">
		  <h2 className="name-header flex-start">EC</h2>
		  <div id="links" className="flex-end">
			{
				// <a href="./">HOME</a>
				// <a onClick={goToProjects}>PROJECTS</a>
				// <a href="./">BLOG</a>
				// <a href="./">ABOUT</a>
			}
		  </div>
		</nav>
	)
}

export default NavBar;
