import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Comments from './components/Comments'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Result from './components/Result'
import Team from './components/Team'

function App() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <About />
      <Projects />
      <Banner />
      <Companies />
      <Team />
      <Comments />
      <Result />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
