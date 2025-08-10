import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="nav">
        <div className="container">
          <div className="brand">TESH ACAD</div>
          <nav>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className="btn" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>TESH ACAD International Consult</h1>
            <p className="sub">
              Admissions • Academic Consulting • SOP/Resume • Research Guidance • Visa Support
            </p>
            <div className="cta">
              <a className="btn big" href="#contact">Book a Consultation</a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container grid">
            <div className="card">
              <h3>University Admissions</h3>
              <p>Country and course shortlisting, timelines, application review, fee waivers.</p>
            </div>
            <div className="card">
              <h3>Documents & SOP</h3>
              <p>SOP/LOI, CV, LOR guidance tailored to your target programs.</p>
            </div>
            <div className="card">
              <h3>Scholarships</h3>
              <p>Identify merit/need-based options and build a winning application pack.</p>
            </div>
            <div className="card">
              <h3>Visa & Pre-Departure</h3>
              <p>Checklists, mock interviews, finances, travel & housing guidance.</p>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container narrow">
            <h2>About TESH ACAD</h2>
            <p>
              We help students and professionals navigate admissions and academic goals with
              clear, step-by-step guidance. Simple language, transparent process, and
              timelines you can follow without stress.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container narrow contact">
            <h2>Contact</h2>
            <p>Reach out to start your plan today.</p>
            <ul>
              <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">+91-XXXXXXXXXX</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} TESH ACAD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

