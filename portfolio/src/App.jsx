import { useEffect, useState } from 'react'
import profileImage from './assets/saugat-sharma-profile.png'
import './App.css'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import ResumeSections from './components/ResumeSections'
import SiteFooter from './components/SiteFooter'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [portraitTilt, setPortraitTilt] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const root = document.documentElement
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll-progress', `${distance > 0 ? (window.scrollY / distance) * 100 : 0}%`)
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    root.classList.add('motion-ready')
    document.querySelectorAll('[data-reveal]').forEach((section) => observer.observe(section))
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('scroll', updateProgress); root.classList.remove('motion-ready') }
  }, [])
  const handlePortraitMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPortraitTilt({ x: ((event.clientY - bounds.top) / bounds.height - .5) * -8, y: ((event.clientX - bounds.left) / bounds.width - .5) * 8 })
  }
  return <div className="site-shell">
    <div className="scroll-progress" aria-hidden="true" />
    <Navigation isOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((open) => !open)} />
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title" data-reveal>
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__portrait" onPointerMove={handlePortraitMove} onPointerLeave={() => setPortraitTilt({ x: 0, y: 0 })} style={{ '--tilt-x': `${portraitTilt.x}deg`, '--tilt-y': `${portraitTilt.y}deg` }}><img src={profileImage} alt="Saugat Sharma" /><span className="hero__portrait-tag">SAUGAT / 01</span></div>
        <p className="eyebrow hero__eyebrow">Available for new opportunities</p>
        <h1 id="hero-title">Building thoughtful digital<span> experiences.</span></h1>
        <p className="hero__summary">Hi, I’m Saugat Sharma — a Full Stack Developer creating reliable web experiences from interface to infrastructure.</p>
        <div className="hero__actions"><a className="button button--primary" href="#projects">Explore my work <span aria-hidden="true">↘</span></a><a className="button button--quiet" href="https://github.com/aiyo-saugat" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
        <div className="hero__meta" aria-label="Profile highlights"><span>Full Stack Developer</span><span>BTech CSE</span><span>India</span></div>
        <div className="skill-ticker" aria-label="Core technologies"><div className="skill-ticker__track"><span>REACT</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>MYSQL</span><i>✦</i><span>JAVA</span><i>✦</i><span>PYTHON</span><i>✦</i><span>EXPRESS</span><i>✦</i><span>REACT</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>MYSQL</span><i>✦</i><span>JAVA</span><i>✦</i><span>PYTHON</span><i>✦</i><span>EXPRESS</span><i>✦</i></div></div>
      </section>
      <ResumeSections />
      <Projects />
    </main>
    <SiteFooter />
  </div>
}
export default App
