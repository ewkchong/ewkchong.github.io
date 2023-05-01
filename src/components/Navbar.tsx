import './css/Navbar.css'

const NavBar = () => {
	
	return (
		<nav id="navbar" className="flex align-center">
		  <h2 className="name-header flex-start">EC</h2>
		  <div id="links" className="flex-end">
			<a href="./">HOME</a>
			<a href="./">PROJECTS</a>
			<a href="./">BLOG</a>
			<a href="./">ABOUT</a>
		  </div>
		</nav>
	)
}

export default NavBar;
