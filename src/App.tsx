import './App.css'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import ProjectList from './components/ProjectList'

function App() {

  return (
    <>
		<NavBar />
		<Hero />
		<h1 id="projects-header">PROJECTS</h1>
		<ProjectList />
    </>
  )
}

export default App

