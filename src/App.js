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
            <a href="#institutes">Institutes</a>
            <a href="#industry">Industry</a>
            <a href="#team">Leadership</a>
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
              Students • Faculty • Institutes • Industry — Global Collaboration & Innovation
            </p>
            <p className="sub small">
              Admissions • Academic Consulting • SOP/CV • Research Guidance • Visa Support • Skill Development • MoUs with Institutes & Industry
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

        {/* ================== Focus Snapshot ================== */}
        <section className="section alt">
          <div className="container">
            <h2>Our Focus Areas</h2>
            <div className="grid four">
              <div className="card">
                <h3>For Students</h3>
                <ul className="list">
                  <li>Skilled Certification Programs</li>
                  <li>Internships & Placements</li>
                  <li>Research & Higher Study Opportunities</li>
                  <li>Entrepreneurship & Leadership Training</li>
                </ul>
              </div>
              <div className="card">
                <h3>For Faculty</h3>
                <ul className="list">
                  <li>Transition – Academia to Industry</li>
                  <li>Publications Support</li>
                  <li>Research Support</li>
                  <li>Industry Tie-ups for Projects</li>
                  <li>Recruitment (B2B)</li>
                </ul>
              </div>
              <div className="card">
                <h3>For Institutes</h3>
                <ul className="list">
                  <li>Industry MoUs (Consultancy & Research Project MoUs)</li>
                  <li>Foreign University MoUs (B.Tech 2+2, 3+1)</li>
                  <li>Recruitment Partnerships (B2B)</li>
                </ul>
              </div>
              <div className="card">
                <h3>For Industry</h3>
                <ul className="list">
                  <li>Consultancy & Sponsored Projects</li>
                  <li>Custom Upskilling Programs</li>
                  <li>Campus Hiring & Intern Pipelines</li>
                  <li>Academic Partnerships & Hackathons</li>
                </ul>
              </div>
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
                <h3>Transition – Academia to Industry</h3>
                <ul className="list">
                  <li>Career mapping & role readiness</li>
                  <li>Resume/LinkedIn revamp & mock interviews</li>
                  <li>Industry immersion & short projects</li>
                </ul>
              </div>
              <div className="card">
                <h3>Publications Support</h3>
                <ul className="list">
                  <li>Target journal shortlisting</li>
                  <li>Manuscript editing & submission</li>
                  <li>Responding to reviewers</li>
                </ul>
              </div>
              <div className="card">
                <h3>Research Support</h3>
                <ul className="list">
                  <li>Partner discovery & proposals</li>
                  <li>PhD supervision matches</li>
                  <li>Grant budgets & workflows</li>
                </ul>
              </div>
              <div className="card">
                <h3>Industry Tie-ups for Projects</h3>
                <ul className="list">
                  <li>Sponsored research briefs</li>
                  <li>Faculty PI alignment</li>
                  <li>IP & milestone planning</li>
                </ul>
              </div>
              <div className="card">
                <h3>Recruitment (B2B)</h3>
                <ul className="list">
                  <li>Adjunct/visiting roles</li>
                  <li>L&D and corporate trainer pipelines</li>
                  <li>Cross-institution opportunities</li>
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

        {/* ================== For Institutes ================== */}
        <section id="institutes" className="section">
          <div className="container">
            <h2>For Institutes</h2>
            <div className="grid">
              <div className="card">
                <h3>Industry MoUs</h3>
                <ul className="list">
                  <li>Consultancy MoUs</li>
                  <li>Research Project MoUs</li>
                  <li>Advisory Boards & Centers of Excellence</li>
                </ul>
              </div>
              <div className="card">
                <h3>Foreign University MoUs</h3>
                <ul className="list">
                  <li>B.Tech 2+2 pathways</li>
                  <li>B.Tech 3+1 pathways</li>
                  <li>Visiting faculty & joint certifications</li>
                </ul>
              </div>
              <div className="card">
                <h3>Recruitment (B2B)</h3>
                <ul className="list">
                  <li>On-campus drives & virtual hiring</li>
                  <li>Internship→Hire funnels</li>
                  <li>Industry mentors & guest lectures</li>
                </ul>
              </div>
              <div className="card">
                <h3>Programs & Exhibitions</h3>
                <ul className="list">
                  <li>Model exhibitions & revenue programs</li>
                  <li>Outcome-based curriculum support</li>
                  <li>Quality frameworks & rubrics</li>
                </ul>
              </div>
            </div>
            <div className="cta-center">
              <a
                className="btn big"
                href="https://wa.me/919985744913?text=Hi%20TESH%20ACAD%2C%20let%27s%20discuss%20MoUs%20for%20our%20institute"
                target="_blank"
                rel="noreferrer"
              >
                Start an MoU
              </a>
            </div>
          </div>
        </section>

        {/* ================== For Industry ================== */}
        <section id="industry" className="section alt">
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
                  <li>Assessment & Certifications</li>
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

        {/* ================== Leadership / Team ================== */}
        <section id="team" className="section">
          <div className="container">
            <h2>Our Leadership</h2>
            <p className="sub center">Family-led Leadership, Globally Connected</p>
            <div className="grid four">
              <PersonCard
                photo="/images/team/founder.jpg"
                name="Dr. Urmila Bandaru"
                role="Founder & CEO"
                headliner="Global Educator & Industry Connector"
                linkedin="https://www.linkedin.com/in/dr-urmila-bandaru-159a9040/"
                badges={["Education", "Research", "Leadership", "Global Collaboration"]}
              >
                Ph.D. in Power Electronics; 27+ years in Academia & Research. Founder of TeSh Acad, building global placements, MoUs & experiential learning programs.
              </PersonCard>

              <PersonCard
                photo="/images/team/tejaswini.jpg"
                name="Dr. Tejaswini Bathala"
                role="Managing Director"
                headliner="Healthcare Analyst & Vedic Astrologer"
                linkedin="https://www.linkedin.com/in/dr-tejaswini-bathala-66437b154/"
                badges={["Strategy", "Product", "Healthcare IT", "Astrology"]}
              >
                Pharm.D + MBA (Pharma Mgmt). Healthcare Business Analyst. Leads Growth, Partnerships & Product at TeSh Acad; practices Modern Vedic Astrology.
              </PersonCard>

              <PersonCard
                photo="/images/team/shravya.jpg"
                name="Shravya Vani B"
                role="Managing Director"
                headliner="Events Manager & Creative Strategist"
                linkedin="https://www.linkedin.com/in/shravya-vani-b-b38946201/"
                badges={["Community", "Partnerships", "Events", "Technology"]}
              >
                MA International Events Management (University of Greenwich), B.Tech CSE. Event Manager & Community Builder driving Student Programs and Campus Partnerships.
              </PersonCard>

              <PersonCard
                photo="/images/team/chairman.jpg"
                name="Bathala Venkata Chalapathi"
                role="Chairman"
                headliner="Industry Veteran & Strategic Mentor"
                linkedin="https://www.linkedin.com/in/bathala-venkata-chalapathi-196243213/"
                badges={["Governance", "Strategy", "Industry Leadership"]}
              >
                Senior General Manager, Sri Rayalaseema Alkalies & Allied Chemicals Ltd (28+ yrs, Oils & Fats). Guides Governance, Operations & Long-term Strategy.
              </PersonCard>
            </div>
          </div>
        </section>

        {/* ================== Why we exist ================== */}
        <section className="section alt">
          <div className="container narrow">
            <h2>Why we exist</h2>
            <ul className="bullets">
              <li>Designing a strategic approach to ensure <strong>placements</strong> or <strong>entrepreneurial leadership</strong> for every student based on their abilities.</li>
              <li><strong>Real-time project-based trainings</strong> for B.Tech & M.Tech students to pave paths into Masters / Industry / Research roles.</li>
              <li><strong>27+ years</strong> of academic experience bridging education & global industry.</li>
              <li><strong>Skilled certification programs</strong> tailored for industry readiness.</li>
              <li><strong>Research & higher study</strong> opportunities with global exposure.</li>
              <li>Connecting students with <strong>internships & placements</strong> worldwide.</li>
            </ul>
            <p className="center mt-3">
              Explore more at{" "}
              <a href="https://www.teshacad.org" target="_blank" rel="noreferrer" className="link">
                www.teshacad.org
              </a>
            </p>
          </div>
        </section>

        {/* ================== About ================== */}
        <section id="about" className="section">
          <div className="container narrow">
            <h2>About TESH ACAD</h2>
            <p>
              We empower <strong>Students, Faculty, Institutes & Industry</strong> to navigate Admissions, Publications, Research,
              and Collaboration with clear, step-by-step support. Simple timelines. Transparent processes. Guidance you can follow without stress.
            </p>
          </div>
        </section>

        {/* ================== Admissions Timeline ================== */}
        <section id="timeline" className="section alt">
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

/* -------------------------- Helper Components -------------------------- */
function PersonCard({ photo, name, role, headliner, children, linkedin, badges = [] }) {
  return (
    <div className="person">
      <div className="avatar">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={photo} alt={`${name} – ${role}`} />
      </div>
      <div className="person-meta">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        {headliner && <p className="headliner">{headliner}</p>}
      </div>
      <p className="bio">{children}</p>
      <div className="tags">
        {badges.map((b) => (
          <span key={b} className="tag">{b}</span>
        ))}
      </div>
      {linkedin && (
        <p className="link-out">
          <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
        </p>
      )}
    </div>
  );
}
