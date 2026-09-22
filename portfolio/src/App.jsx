import { useState } from 'react'
import profileImage from './assets/saugat-sharma-profile.png'
import './App.css'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import ResumeSections from './components/ResumeSections'
import SiteFooter from './components/SiteFooter'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return <div className="site-shell">
    <Navigation isOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((open) => !open)} />
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__portrait"><img src={profileImage} alt="Saugat Sharma" /></div>
        <p className="eyebrow hero__eyebrow">Available for new opportunities</p>
        <h1 id="hero-title">Building thoughtful digital<span> experiences.</span></h1>
        <p className="hero__summary">Hi, I’m Saugat Sharma — a Full Stack Developer creating reliable web experiences from interface to infrastructure.</p>
        <div className="hero__actions"><a className="button button--primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="button button--quiet" href="https://github.com/aiyo-saugat" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
        <div className="hero__meta" aria-label="Profile highlights"><span>Full Stack Developer</span><span>BTech CSE</span><span>India</span></div>
      </section>
      <ResumeSections />
      <Projects />
    </main>
    <SiteFooter />
  </div>
}
export default App
