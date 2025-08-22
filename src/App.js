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
            <h1>TESH ACAD INTERNATIONAL CONSULTANTS</h1>
            <p className="sub">
              Admissions • Academic Consulting • SOP/CV • Research Guidance • Visa Support • Skill Development Courses
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
                  <li>Profile Evaluation & Target Countries</li>
                  <li>Shortlisting (4–8 Univs) with Deadlines</li>
                  <li>Application Plan & Checklist</li>
                </ul>
              </div>
              <div className="card">
                <h3>SOP/CV & LORs</h3>
                <ul className="list">
                  <li>Clear SOP/LOI Structure & Editing</li>
                  <li>Impactful Academic CV</li>
                  <li>LOR Guidance & Templates</li>
                </ul>
              </div>
              <div className="card">
                <h3>Scholarships & Funding</h3>
                <ul className="list">
                  <li>Merit/need options Mapped</li>
                  <li>Application pack Review</li>
                  <li>Fee-waiver Opportunities</li>
                </ul>
              </div>
              <div className="card">
                <h3>Visa & Pre-Departure</h3>
                <ul className="list">
                  <li>Docs & Financial Planning</li>
                  <li>Mock Visa Interview</li>
                  <li>Housing & Travel Checklist</li>
                </ul>
              </div>
              <div className="card">
                <h3>Tests & Interviews</h3>
                <ul className="list">
                  <li>IELTS/TOEFL/GRE Plan</li>
                  <li>Interview Practice</li>
                  <li>Portfolio Tips (where needed)</li>
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
                Get Student Guidance
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
                  <li>Host university Mapping</li>
                  <li>SoP/CV, Dossier Review</li>
                  <li>Timeline & Paperwork</li>
                </ul>
              </div>
              <div className="card">
                <h3>Research Collaboration</h3>
                <ul className="list">
                  <li>Partner Discovery & MoUs</li>
                  <li>PhD Supervision Matches</li>
                  <li>Co-Authorship Planning</li>
                </ul>
              </div>
              <div className="card">
                <h3>Grants & Proposals</h3>
                <ul className="list">
                  <li>Calls Shortlisting</li>
                  <li>Proposal Editing & Budgets</li>
                  <li>Submission Workflows</li>
                </ul>
              </div>
              <div className="card">
                <h3>Workshops & Curriculum</h3>
                <ul className="list">
                  <li>Outcome-based Modules</li>
                  <li>Student Projects Set-up</li>
                  <li>Assessment Rubrics</li>
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
                  <li>Custom Training Tracks</li>
                  <li>Hybrid Delivery</li>
                  <li>Assessment & Certs</li>
                </ul>
              </div>
              <div className="card">
                <h3>Academic Partnerships</h3>
                <ul className="list">
                  <li>MoUs & Advisory Boards</li>
                  <li>Hackathons & Challenges</li>
                  <li>Brand presence on Campus</li>
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
              We help students, faculty, and industry partners navigate Admissions,Paper Publications,Research,  
              and Collaboration with Simple, step-by-step Support. Clear Timelines, Transparent
              Process, and Guidance you can follow without stress.
            </p>
          </div>
        </section>

        {/* ================== Admissions Timeline (optional) ================== */}
        <section id="timeline" className="section">
          <div className="container narrow">
            <h2>Admissions Timeline</h2>
            <ol className="steps">
              <li><strong>Profile & Goals:</strong> Discovery call, Target intake & Countries.</li>
              <li><strong>Shortlist:</strong> 4–8 Universities, Admit chances, Deadlines, Budget.</li>
              <li><strong>Documents:</strong> SOP/LOI, CV, LORs, Transcripts, Test plan.</li>
              <li><strong>Applications:</strong> Portals, Fee waivers (where possible), Submissions.</li>
              <li><strong>Scholarships:</strong> Apply in parallel; Grants & Assistantships.</li>
              <li><strong>Admits & Visa:</strong> Compare offers, Finances, Mock Visa Interview.</li>
              <li><strong>Pre-departure:</strong> Housing, Tickets, Health & Packing Checklist.</li>
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
                <input name="phone" type="tel" placeholder="+91 xxxxx xxxxx" />
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
                  WhatsApp us
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
