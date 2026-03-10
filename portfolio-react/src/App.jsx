import { useEffect } from 'react'
import './index.css'

function App() {
  useEffect(() => {
    // Smooth scroll on internal anchor clicks
    const anchors = document.querySelectorAll('a[href^="#"]')

    const handleClick = (event) => {
      const targetId = event.currentTarget.getAttribute('href')
      if (!targetId || targetId === '#') return
      const target = document.querySelector(targetId)
      if (!target) return
      event.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick))

    // Reveal on scroll animations
    const revealElements = document.querySelectorAll('.reveal')
    let observer

    if ('IntersectionObserver' in window && revealElements.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      revealElements.forEach((el) => observer.observe(el))
    } else {
      revealElements.forEach((el) => el.classList.add('reveal-visible'))
    }

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick))
      if (observer) observer.disconnect()
    }
  }, [])

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top"
        style={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-semibold d-flex align-items-center gap-2" href="#top">
            <span
              className="p-1 rounded-circle bg-primary d-inline-flex align-items-center justify-content-center"
              style={{ width: 28, height: 28 }}
            >
              <i className="fa-solid fa-code text-white" style={{ fontSize: '0.9rem' }} />
            </span>
            <span>Emmanuel Odu</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#origin">
                  <i className="fa-regular fa-compass me-1" />
                  Origin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  <i className="fa-regular fa-window-maximize me-1" />
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tech-stack">
                  <i className="fa-solid fa-layer-group me-1" />
                  Tech Stack
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#hobbies">
                  <i className="fa-regular fa-heart me-1" />
                  Hobbies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <i className="fa-regular fa-paper-plane me-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="top" className="hero d-flex align-items-center justify-content-center text-center">
        <div className="reveal">
          <span className="hero-badge">
            <i className="fa-solid fa-user-graduate text-primary" />
            Final-year Computer Science student &amp; web developer
          </span>
          <img src="/portfolio.png" alt="Portrait of Emmanuel Odu" className="portfolio-photo" />
          <h1>I’m Emmanuel Odu.</h1>
          <p className="lead">
            I’m a final-year Computer Science student and web developer focused on building modern, scalable web
            applications. I use AI-assisted development alongside strong web fundamentals to build efficient, responsive,
            and maintainable full-stack projects.
          </p>
          <div className="hero-tags">
            <span className="hero-tag">Full‑stack web development</span>
            <span className="hero-tag">React &amp; Next.js</span>
            <span className="hero-tag">Node.js &amp; PostgreSQL</span>
            <span className="hero-tag">AI‑assisted workflows</span>
            <span className="hero-tag">Scrum principles</span>
          </div>
          <a href="#origin" className="btn btn-primary mt-3 px-4 py-2 rounded-pill">
            Begin My Story
            <i className="fa-solid fa-arrow-right ms-2" />
          </a>
          <div className="mt-4 d-flex justify-content-center gap-3">
            <a href="#projects" className="btn btn-outline-light btn-sm rounded-pill px-3">
              View projects
            </a>
            <a href="#contact" className="btn btn-outline-light btn-sm rounded-pill px-3">
              Get in touch
            </a>
          </div>
          <div className="mt-5 text-center">
            <small className="text-light text-opacity-75 d-block mb-2">Scroll to explore</small>
            <div
              className="border border-light border-opacity-50 rounded-pill mx-auto"
              style={{ width: 26, height: 42, padding: 4 }}
            >
              <div
                style={{
                  width: 6,
                  height: 10,
                  borderRadius: 999,
                  backgroundColor: '#e5e7eb',
                  margin: '0 auto',
                  animation: 'scrollDot 1.3s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Origin */}
      <section id="origin" className="container py-5 reveal">
        <h2 className="text-center mb-4">
          <i className="fa-regular fa-lightbulb me-2 text-warning" />
          The Journey so far
        </h2>
        <div className="timeline">
          <div className="timeline-item">2019 - Wrote my first &quot;Hello World&quot; in Python.</div>
          <div className="timeline-item">
            2021 - Excelled in the University of Debrecen International foundation year.
          </div>
          <div className="timeline-item">2022 - Enrolled in BSc Computer Science at University of Debrecen.</div>
          <div className="timeline-item">2024 - Completed Python bootcamp with Pierian Training.</div>
          <div className="timeline-item">2025 - Front-end Web Developer Intern with Limelight Renhold.</div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-5 reveal"
        style={{ background: 'radial-gradient(circle at top, rgba(37, 99, 235, 0.16), transparent 60%)' }}
      >
        <div className="container">
          <h2 className="text-center mb-3">
            <i className="fa-regular fa-window-maximize me-2 text-primary" />
            Projects
          </h2>
          <p className="text-center text-muted mb-5" style={{ maxWidth: 620, margin: '0 auto' }}>
            Production-ready projects that combine clean UI, resilient backends, and pragmatic use of modern tooling.
          </p>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5 col-lg-4">
              <div
                className="card h-100 text-center p-3 border-0 shadow-sm"
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,64,175,0.9))',
                  borderRadius: 20,
                }}
              >
                <h5 className="card-title">Veltra stock</h5>
                <a
                  href="https://inventory-management-system-three-tawny.vercel.app/"
                  className="btn btn-outline-primary mt-2 me-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
                <a
                  href="https://github.com/Emmanuell17/Inventory-management-system"
                  className="btn btn-outline-secondary mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4">
              <div
                className="card h-100 text-center p-3 border-0 shadow-sm"
                style={{
                  background: 'linear-gradient(145deg, rgba(15,23,42,0.95), rgba(148,163,184,0.18))',
                  borderRadius: 20,
                }}
              >
                <h5 className="card-title">Gourmet pot</h5>
                <a
                  href="https://gourmet-pot.vercel.app"
                  className="btn btn-outline-primary mt-2 me-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View project
                </a>
                <a
                  href="https://github.com/Emmanuell17/Gourmet-pot"
                  className="btn btn-outline-secondary mt-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="container py-5 reveal">
        <h2 className="text-center mb-3">
          <i className="fa-solid fa-layer-group me-2 text-success" />
          Tech Stack I Work With
        </h2>
        <p className="text-center text-muted mb-4" style={{ maxWidth: 620, margin: '0 auto' }}>
          A modern full‑stack toolkit centred on JavaScript, React, and PostgreSQL, deployed with Vercel and guided by
          Scrum.
        </p>
        <div className="row text-center justify-content-center g-3">
          {[
            { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            {
              label: 'JavaScript',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            },
            { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { label: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            {
              label: 'PostgreSQL',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            },
            { label: 'Vercel', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg' },
            {
              label: 'GitHub',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
            },
          ].map((item) => (
            <div key={item.label} className="col-6 col-md-3 col-lg-2 mb-3 tech-skill">
              <img src={item.icon} width="50" alt={item.label} />
              <p className="mb-0">{item.label}</p>
            </div>
          ))}
          <div className="col-12 mt-2">
            <span className="badge text-bg-dark">Scrum principles</span>
          </div>
        </div>
      </section>

      {/* Hobbies */}
      <section id="hobbies" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">My Hobbies</h2>
          <div className="row justify-content-center text-center">
            <div className="col-md-2 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
                alt="Reading"
                width="60"
                className="mb-2 hobby-icon"
              />
              <h5>Reading</h5>
              <p>Diving into books and tech blogs to expand my mind.</p>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/861/861512.png"
                alt="Football"
                width="60"
                className="mb-2 hobby-icon"
              />
              <h5>Football</h5>
              <p>Enjoy playing and watching football matches.</p>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                alt="Travelling"
                width="60"
                className="mb-2 hobby-icon"
              />
              <h5>Travelling</h5>
              <p>Exploring new places and cultures.</p>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2989/2989988.png"
                alt="Sound Mixing"
                width="60"
                className="mb-2 hobby-icon"
              />
              <h5>Sound Mixing</h5>
              <p>Creating and blending music tracks.</p>
            </div>
            <div className="col-md-2 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                alt="Mastering"
                width="60"
                className="mb-2 hobby-icon"
              />
              <h5>Mastering</h5>
              <p>Perfecting sound quality in final mixes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2>Let&apos;s Connect!</h2>
          <p>Have questions or want to collaborate? Reach out to me:</p>
          <a href="mailto:immanuelodu@gmail.com" className="btn btn-light mt-3">
            Email Me
          </a>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/emmanuel-odu"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-2"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Emmanuell17" target="_blank" rel="noreferrer" className="text-white mx-2">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-3">
        <div className="container">
          <small>© 2025 Emmanuel. All rights reserved.</small>
          <div className="mt-2">
            <a
              href="https://www.linkedin.com/in/emmanuel-odu"
              target="_blank"
              rel="noreferrer"
              className="text-white mx-2"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Emmanuell17" target="_blank" rel="noreferrer" className="text-white mx-2">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
