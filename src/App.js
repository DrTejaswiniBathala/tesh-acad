import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="nav">
        <div className="container">
          <div className="brand">TESH ACAD</div>
          <nav>
            <a href="#students">Students</a>
            <a href="#faculty">Faculty</a>
            <a href="#industry">Industry</a>
            <a href="#about">About</a>
            <a className="btn" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="container">
            <h1>TESH ACAD International Consult</h1>
            <p className="sub">
              Admissions • Academic Consulting • SOP/CV • Research Guidance • Visa Support
            </p>
            <div className="cta">
              <a
                className="btn big"
                href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20I%27d%20like%20a%20consultation"
                target="_blank"
                rel="noreferrer"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================== For Students ================== */}
        <section id="students" className="section">
          <div className="container">
            <h2>For Students</h2>
            <div className="grid">
              <div className="card">
                <h3>Admissions Roadmap</h3>
                <ul className="list">
                  <li>Profile evaluation & target countries</li>
                  <li>Shortlisting (4–8 univs) with deadlines</li>
                  <li>Application plan & checklist</li>
                </ul>
              </div>
              <div className="card">
                <h3>SOP/CV & LORs</h3>
                <ul className="list">
                  <li>Clear SOP/LOI structure & editing</li>
                  <li>Impactful academic CV</li>
                  <li>LOR guidance & templates</li>
                </ul>
              </div>
              <div className="card">
                <h3>Scholarships & Funding</h3>
                <ul className="list">
                  <li>Merit/need options mapped</li>
                  <li>Application pack review</li>
                  <li>Fee-waiver opportunities</li>
                </ul>
              </div>
              <div className="card">
                <h3>Visa & Pre-Departure</h3>
                <ul className="list">
                  <li>Docs & financial planning</li>
                  <li>Mock visa interview</li>
                  <li>Housing & travel checklist</li>
                </ul>
              </div>
              <div className="card">
                <h3>Tests & Interviews</h3>
                <ul className="list">
                  <li>IELTS/TOEFL/GRE plan</li>
                  <li>Interview practice</li>
                  <li>Portfolio tips (where needed)</li>
                </ul>
              </div>
            </div>
            <div className="cta-center">
              <a
                className="btn big"
                href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20I%27m%20a%20student%20seeking%20guidance"
                target="_blank"
                rel="noreferrer"
              >
                Get student guidance
              </a>
            </div>
          </div>
        </section>

        {/* ================== For Faculty ================== */}
        <section id="faculty" className="section alt">
          <div className="container">
            <h2>For Faculty</h2>
            <div className="grid">
              <div className="card">
                <h3>Visiting & Sabbatical</h3>
                <ul className="list">
                  <li>Host university mapping</li>
                  <li>SoP/CV, dossier review</li>
                  <li>Timeline & paperwork</li>
                </ul>
              </div>
              <div className="card">
                <h3>Research Collaboration</h3>
                <ul className="list">
                  <li>Partner discovery & MoUs</li>
                  <li>PhD supervision matches</li>
                  <li>Co-authorship planning</li>
                </ul>
              </div>
              <div className="card">
                <h3>Grants & Proposals</h3>
                <ul className="list">
                  <li>Calls shortlisting</li>
                  <li>Proposal editing & budgets</li>
                  <li>Submission workflows</li>
                </ul>
              </div>
              <div className="card">
                <h3>Workshops & Curriculum</h3>
                <ul className="list">
                  <li>Outcome-based modules</li>
                  <li>Student projects set-up</li>
                  <li>Assessment rubrics</li>
                </ul>
              </div>
            </div>
            <div className="cta-center">
              <a
                className="btn big"
                href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20I%27m%20faculty%20and%20want%20to%20discuss%20a%20plan"
                target="_blank"
                rel="noreferrer"
              >
                Discuss a faculty plan
              </a>
            </div>
          </div>
        </section>

        {/* ================== For Industry ================== */}
        <section id="industry" className="section">
          <div className="container">
            <h2>For Industry</h2>
            <div className="grid">
              <div className="card">
                <h3>Campus Hiring & Interns</h3>
                <ul className="list">
                  <li>Curated candidate pool</li>
                  <li>Internship→Hire funnels</li>
                  <li>Interview coordination</li>
                </ul>
              </div>
              <div className="card">
                <h3>Sponsored Projects</h3>
                <ul className="list">
                  <li>Capstone & research briefs</li>
                  <li>Faculty PI alignment</li>
                  <li>IP & timeline planning</li>
                </ul>
              </div>
              <div className="card">
                <h3>Upskilling Programs</h3>
                <ul className="list">
                  <li>Custom training tracks</li>
                  <li>Hybrid delivery</li>
                  <li>Assessment & certs</li>
                </ul>
              </div>
              <div className="card">
                <h3>Academic Partnerships</h3>
                <ul className="list">
                  <li>MoUs & advisory boards</li>
                  <li>Hackathons & challenges</li>
                  <li>Brand presence on campus</li>
                </ul>
              </div>
            </div>
            <div className="cta-center">
              <a
                className="btn big"
                href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20we%20want%20to%20partner%20for%20industry%20programs"
                target="_blank"
                rel="noreferrer"
              >
                Partner with us
              </a>
            </div>
          </div>
        </section>

        {/* ================== About ================== */}
        <section id="about" className="section alt">
          <div className="container narrow">
            <h2>About TESH ACAD</h2>
            <p>
              We help students, faculty, and industry partners navigate admissions, research,
              and collaboration with simple, step-by-step support. Clear timelines, transparent
              process, and guidance you can follow without stress.
            </p>
          </div>
        </section>

        {/* ================== Admissions Timeline (optional) ================== */}
        <section id="timeline" className="section">
          <div className="container narrow">
            <h2>Admissions Timeline</h2>
            <ol className="steps">
              <li><strong>Profile & Goals:</strong> discovery call, target intake & countries.</li>
              <li><strong>Shortlist:</strong> 4–8 universities, admit chances, deadlines, budget.</li>
              <li><strong>Documents:</strong> SOP/LOI, CV, LORs, transcripts, test plan.</li>
              <li><strong>Applications:</strong> portals, fee waivers (where possible), submissions.</li>
              <li><strong>Scholarships:</strong> apply in parallel; grants & assistantships.</li>
              <li><strong>Admits & Visa:</strong> compare offers, finances, mock visa interview.</li>
              <li><strong>Pre-departure:</strong> housing, tickets, health & packing checklist.</li>
            </ol>
          </div>
        </section>

        {/* ================== Contact ================== */}
        <section id="contact" className="section">
          <div className="container narrow contact">
            <h2>Contact</h2>
            <p>Tell us your goal. We’ll reply within 24 hours.</p>

            {/* Replace YOUR_FORMSPREE_ENDPOINT after you create a Formspree form */}
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT"
              method="POST"
              className="form"
            >
              <input type="hidden" name="_subject" value="New enquiry from TESH ACAD website" />
              <div className="form-row">
                <label>Full name</label>
                <input name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-row">
                <label>Email</label>
                <input name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-row">
                <label>Phone / WhatsApp</label>
                <input name="phone" type="tel" placeholder="+91 99857 44913" />
              </div>
              <div className="form-row">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Course/Country, target intake, questions…"
                  required
                />
              </div>
              <button className="btn big" type="submit">Send enquiry</button>
              <p className="alt-contact">
                Prefer chat?{" "}
                <a
                  href="https://wa.me/919985744913"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp us (+91 99857 44913)
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} TESH ACAD. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        aria-label="Chat on WhatsApp"
        className="whats-float"
        href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20I%27d%20like%20a%20consultation"
        target="_blank"
        rel="noreferrer"
      >
        WA
      </a>
    </div>
  );
}
