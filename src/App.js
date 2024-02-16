import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Project from './components/project/Project';
import Exp from './components/exp/Exp';
import About from './components/about/About';
import NotFound from './components/NotFound';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';


function App() {
	return (
		<div className="App">
          <Nav />
		  <Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/projects' element={<Project />}></Route>
			<Route path='/experience' element={<Exp />}></Route>
			<Route path='/about' element={<About />}></Route>
			<Route path='*' element={<NotFound />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
		  </Routes>
		  
		</div>
	);
}

export default App;
