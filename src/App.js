import chalapathiImg from './leadership/chalapathi.jpg';
import urmilaImg from './leadership/urmila.jpg';
import tejaswiniImg from './leadership/tejaswini.jpg';
import shravyaImg from './leadership/shravya.jpg';

import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Top Navigation */}
      <header className="nav">
        <div className="container">
          <nav>
            <a href="#students">Students</a>
            <a href="#Professionls">Professionals</a>
            <a href="#institutes">Institutes</a>
            <a href="#industry">Industry</a>
            <a href="#team">Leadership</a>
            <a href="#about">About</a>
            <a className="btn" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================== MAIN CONTENT ================== */}
      <main>
        {/* Hero */}
        <main>
          <section className="hero">
            <div className="container hero-content">
              {/* Left: Logo */}
              <div className="hero-left">
                <img src="/logo-circle.png" alt="TESH ACAD Logo" className="hero-logo" />
              </div>

              {/* Right: Heading + tagline + button */}
              <div className="hero-right">
                <h1>TESH ACAD INTERNATIONAL CONSULTANTS</h1>
                <p className="sub">
                  Admissions • Research • Visa • Skills • Jobs • MoUs — Connecting Talent with the World
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
            </div>
          </section>
        </main>

        <div className="reg-info">
          <p>GSTIN - 37AQZPB1669H1ZC</p>
          <p>UDYAM-AP-07-0096832</p>
        </div>

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
                <h3>For Professionals</h3>
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

        {/* ================== For Professionals ================== */}
        <section id="Professionls" className="section alt">
          <div className="container">
            <h2>For Professionals</h2>
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
                Discuss a Professional plan
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
                  <li>Faculty/Professional PI alignment</li>
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

        {/* =============== Leadership Section =============== */}
        <section id="team" className="section">
          <div className="container center">
            <h2>Leadership</h2>
            <p className="sub">Meet our leaders driving TeSh Acad International Consultants</p>

            <div className="grid four">
              {/* Urmila */}
              <div className="leadership-card">
                <img src={urmilaImg} alt="Urmila" className="profile-img" />
                <h3>Dr. Urmila Bandaru</h3>
                <p><strong>Founder & CEO</strong></p>
                <p>PhD in Electrical Engineering | Professor & Research Collaborator</p>
                <p>Guiding TeSh Acad in academics, MOUs, and global education pathways.</p>
                <a 
                  href="https://www.linkedin.com/in/dr-urmila-bandaru-159a9040/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="linkedin-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              {/* Chalapathi */}
              <div className="leadership-card">
                <img src={chalapathiImg} alt="Chalapathi" className="profile-img" />
                <h3>B Venkata Chalapathi</h3>
                <p><strong>Executive Advisor </strong></p>
                <p>Industry Professional | Mechanical Engineer </p>
                <p>Advising with global strategy and collaborations.</p>
                <a 
                  href="https://www.linkedin.com/in/bathala-venkata-chalapathi-196243213/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="linkedin-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              {/* Tejaswini */}
              <div className="leadership-card">
                <img src={tejaswiniImg} alt="Tejaswini" className="profile-img" />
                <h3>Dr. Tejaswini Bathala</h3>
                <p><strong>CTO</strong></p>
                <p>MBA | Doctor of Pharmacy | Modern Vedic Astrologist</p>
                <p>Leading strategy, innovation, and global partnerships at TeSh Acad.</p>
                <a 
                  href="https://www.linkedin.com/in/dr-tejaswini-bathala-66437b154/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="linkedin-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>

              {/* Shravya */}
              <div className="leadership-card">
                <img src={shravyaImg} alt="Shravya Vani" className="profile-img" />
                <h3>Miss Gorgeous Shravya Vani </h3>
                <p><strong>Managing Director</strong></p>
                <p>MA International Events Management | Computer Science Engineer </p>
                <p>Driving organizational growth, creativity, and partnerships globally.</p>
                <a 
                  href="https://www.linkedin.com/in/shravya-vani-b-b38946201/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="linkedin-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================== About Us ================== */}
        <section id="about" className="section alt beige">
          <div className="container narrow center">
            <h2>About Us</h2>
            <p className="sub">Life by Design, not by Default.</p>
          </div>
          <div className="about-tesh">
            <p>
              At TESH ACAD, we believe learning and growth should feel simple, clear, 
              and supportive—not confusing or stressful. Education is more than just 
              books or exams; it is about building confidence, finding the right 
              direction, and moving forward with purpose.
            </p>
            <p>
              We guide every step of the journey—whether it is higher studies, finding 
              the right job, exploring research, or connecting with global opportunities—
              making the process transparent and stress-free.
            </p>
            <p>
              We stand beside you with clarity, care, and trust, so that every 
              dream of your's has the chance to grow into a real achievement.
            </p>
          </div>
          <h2 className="brand-tagline">
            From Learning to Success, From Success to Earning.
          </h2>
        </section>

        {/* ================== Contact ================== */}
        <section id="contact" className="section">
          <div className="container narrow contact">
            <h2>Contact</h2>
            <p>Tell us your goal. We’ll reply within 24 hours.</p>

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

        {/* ================== Terms & Conditions ================== */}
        <section id="terms" className="section alt">
          <div className="container narrow">
            <h2>Terms & Conditions</h2>
            <p>
              These Terms & Conditions govern your use of TeSh Acad International Consultants’
              website and services. By using our services, you agree to comply with them.
            </p>
            <p>
              Services include consultancy for students, professionals, institutions, and
              industry. We provide mentoring, admissions support, research collaboration, and
              placements — but final outcomes rest with third-party institutions.
            </p>
            <p>
              Fees once paid are non-refundable unless stated in writing. Payments should only
              be made through official TeSh Acad channels.
            </p>
            <p>
              These Terms are governed by Indian law, under the jurisdiction of courts in
              Andhra Pradesh.
            </p>
          </div>
        </section>

        {/* ================== Privacy Policy ================== */}
        <section id="privacy" className="section">
          <div className="container narrow">
            <h2>Privacy Policy</h2>
            <p>
              TeSh Acad International Consultants (“TeSh Acad”, “we”, “our”) values your
              privacy. This Privacy Policy explains how we collect, use, and safeguard your
              information.
            </p>
            <ul>
              <li>We may collect your name, email, phone number, education/professional details.</li>
              <li>We use your information to deliver consultancy services, respond to inquiries,
                  confirm registrations, and send updates.</li>
              <li>Your information is never sold or traded to third parties.</li>
              <li>You can opt out of marketing by emailing connect@teshacad.org.</li>
            </ul>
            <p>
              📧 connect@teshacad.org <br />
              📞 +91 99857 44913
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} TESH ACAD. All rights reserved. | 
          <a href="#privacy" className="ml-2">Privacy Policy</a> | 
          <a href="#terms" className="ml-2">Terms & Conditions</a>
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
