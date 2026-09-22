const skillGroups = [
  ['Languages', 'Java, JavaScript, SQL, Python, HTML/CSS'],
  ['Frontend', 'React.js, Tailwind CSS, Vite, Axios, Zustand, React Router'],
  ['Backend & data', 'Node.js, Express.js, REST APIs, MySQL, MongoDB'],
  ['Auth & security', 'JWT, Google OAuth 2.0, bcrypt, API rate limiting'],
  ['Tools & delivery', 'Git, GitHub, GitHub Actions, XAMPP, Render, Cloudflare Pages'],
]
function Heading({ number, label, title, id }) { return <><div className="section-frame__top"><span className="section-frame__number">({number})</span><p className="section-frame__label">{label}</p></div><h2 id={id}>{title}</h2></> }
function ResumeSections() { return <>
  <section className="resume-section resume-section--about" id="about" aria-labelledby="about-title"><Heading number="01" label="A quick introduction" title="Developer with a product mindset." id="about-title" /><div className="about-copy"><p>I’m Saugat Sharma, a B.Tech Computer Science & Engineering student and Full Stack Developer based in Vadodara, India.</p><p>I enjoy translating real requirements into reliable, user-focused web products—from responsive interfaces and REST APIs to secure authentication and deployment.</p><div className="problem-stat"><strong>150+</strong><span>LeetCode problems solved across core data structures and algorithms.</span></div></div></section>
  <section className="resume-section resume-section--skills" id="skills" aria-labelledby="skills-title"><Heading number="03" label="Tools I use to build" title="Technical toolkit" id="skills-title" /><dl className="skills-list">{skillGroups.map(([name, skills]) => <div key={name}><dt>{name}</dt><dd>{skills}</dd></div>)}</dl></section>
  <section className="resume-section resume-section--education" id="education" aria-labelledby="education-title"><Heading number="04" label="Learning foundation" title="Education" id="education-title" /><div className="education-card"><div><p className="education-card__degree">B.Tech · Computer Science & Engineering</p><p>2023 — Present</p></div><div className="education-card__score"><strong>8.55</strong><span>CGPA / 10.0<br />Through 6th semester</span></div></div></section>
  <section className="resume-section resume-section--contact" id="contact" aria-labelledby="contact-title"><Heading number="05" label="Get in touch" title="Let’s build something." id="contact-title" /><div className="contact-links"><a href="mailto:sharmasaugat3886@gmail.com">sharmasaugat3886@gmail.com <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/saugat-sharma24" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://github.com/aiyo-saugat" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></section>
</> }
export default ResumeSections
