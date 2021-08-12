import './App.css'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from './views/Home.js'
import About from './views/About.js'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div id="app">
      <Router>
        <Navbar />
        <main role="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
