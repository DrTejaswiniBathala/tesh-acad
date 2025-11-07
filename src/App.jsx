import React, { useRef, useState } from "react";
import chalapathiImg from './leadership/chalapathi.jpg';
import urmilaImg from './leadership/urmila.jpg';
import tejaswiniImg from './leadership/tejaswini.jpg';
import shravyaImg from './leadership/shravya.jpg';


import utem from "./assets/UTEM.jpeg";
import utm from "./assets/UTM.jpeg";
import cybercrime from "./assets/CYBER CRIME.jpeg";
import raman from "./assets/RAMAN CHARPAK FELLOWSHIP.jpeg";
import book from "./assets/CALL FOR BOOK CHAPTERS.jpeg";
import teshadv from "./assets/TESH ADV.jpeg";

import "./App.css";

export default function App() {
  // Scroll and Modal Logic
  const scrollRef = useRef(null);
  const [modalImg, setModalImg] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

 return (
  <div className="app">
    {/* ---------- Top Navigation ---------- */}
    <header className="nav">
      <div className="container">
        {/* ---------- Left Navigation Links ---------- */}
        <nav className="nav-left">
          <a href="#students">Students</a>
          <a href="#professionals">Professionals</a>
          <a href="#institutes">Institutes</a>
          <a href="#industry">Industry</a>
          <a href="#team">Leadership</a>
          <a href="#about">About</a>
          <a className="btn" href="#contact">Contact</a>
        </nav>

        {/* ---------- Right Side Emails + Social Icons ---------- */}
<div className="nav-icons">

  {/* Email Row */}
  <div className="email-row">
    <a
      href="mailto:connect@teshacad.org?subject=Enquiry from TESH ACAD Website&body=Hello TESH ACAD Team,"
      className="email-link"
      aria-label="Email connect@teshacad.org"
    >
      <i className="fa-solid fa-envelope"></i>
      <span>connect@teshacad.org</span>
    </a>

    {/* Divider for neat look */}
    <span className="email-divider">|</span>

    <a
      href="mailto:urmila.ceo@teshacad.org?subject=Message for Dr. Urmila&body=Dear Dr. Urmila,"
      className="email-link"
      aria-label="Email urmila.ceo@teshacad.org"
    >
      <i className="fa-solid fa-envelope"></i>
      <span>urmila.ceo@teshacad.org</span>
    </a>
  </div>

  {/* Social Icons Row */}
  <div className="social-row">
    <a
      href="https://www.instagram.com/tesh_acad/?hl=en"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>

    <a
      href="https://www.linkedin.com/company/tesh-acad-international-consultants"
      target="_blank"
      rel="noreferrer"
      className="icon-link"
      aria-label="LinkedIn"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</div>
      </div>
    </header>




      {/* ================== MAIN CONTENT ================== */}
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-content">
            {/* Left: Logo */}
            <div className="hero-left">
              <img
  src={process.env.PUBLIC_URL + "/teshlogo.png"}
  alt="TESH ACAD Logo"
  className="hero-logo"
/>
            </div>

            {/* Right: Heading + tagline + button */}
            <div className="hero-right">
              <h1>TESH ACAD INTERNATIONAL CONSULTANTS</h1>
              <p className="sub">
                  Connecting Talent with the World - Admissions • Research • Visa • Skills • Jobs • MoUs 
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

        <div className="reg-info">
          <p>GSTIN - 37AQZPB1669H1ZC</p>
          <p>UDYAM-AP-07-0096832</p>
        </div>





{/* ================== Wings of TeSh Acad ================== */}
<section className="section wings">
  <div className="container center">
    <h2>Wings of TeSh Acad</h2>
    <p className="sub">Specialized Academies under the Visionary Leadership of <strong>Dr. Urmila Bandaru</strong></p>

    <div className="grid four">
      <div className="wing-card">
        <h3>Dr. Urmila Bandaru Academy of International Relations</h3>
        <p>
          Fostering Global Academic Alliances, MoUs, and Exchange Programs between Universities and Industries across Continents.
        </p>
      </div>

      <div className="wing-card flagship">
  <h3>Dr. Urmila Bandaru Academy of International Publications</h3>
  <p>
    The <strong>Flagship Academy</strong> of TeSh Acad, dedicated to empowering
    Researchers, Scholars, and Faculty Members across disciplines through end-to-end support in Research Publications 
    across Globally recognized Journals (Q1–Q4, Scopus, Web of Science). We stand as a global platform
    promoting Academic Excellence, Research Visibility, and Institutional
    Reputation Worldwide.
  </p>
  <div className="flagship-badge">✨CORE WING✨</div>
</div>



      <div className="wing-card">
        <h3>Dr. Urmila Bandaru Academy of International Collaborations</h3>
        <p>
          Building Strategic Indo-Foreign Partnerships for Funded projects, Industrial Research, and Interdisciplinary Innovation Networks.
        </p>
      </div>

      <div className="wing-card">
        <h3>Dr. Urmila Bandaru Academy of Industry–Institute Interaction</h3>
        <p>
          Bridging Academia and Industry through Live Consultancy Projects, MoUs, Research Commercialization, and Skill-oriented Collaborations.
        </p>
      </div>
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
                <h3>Research, Conference Participation</h3>
                <ul className="list">
                  <li>Partner discovery & proposals</li>
                  <li>PhD supervision matches</li>
                  <li>Grant budgets & workflows</li>
                  <li>Join as co-author in papers for IEEE and International Conferences</li>
                  <li>Gain hands on skills in - Programming (Python, C++, Java) ; MATLAB/Simulink Simulations; Research Tools (LaTeX, Mendeley, Endnote); Technical Writing and Documentation</li>
                  <li>One author from each group to present a paper on International Platform</li>
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
                <h3>Live Projects</h3>
                <ul className="list">
                  <li>Software and App Development</li>
                  <li>AI/ML & Data Analytics</li>
                  <li>Power Electronics and Smart Grids</li>
                  <li>Healthcare Tech and Simulations</li>
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
                Join our Exclusive Professional Network
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
                <p>Leading TeSh Acad’s global vision and multi-domain consultancy across Education, Research & Management building Strategic Alliances, MOUs, and Global Academic Pathways.</p>
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
                <p>Advising with Global Strategy and Collaborations.</p>
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
                <p>Leading Strategic Innovation, Global Branding, Digital Transformation, Revenue Intelligence, Recruitment, and Technology-led Excellence at TeSh Acad.</p>
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
                <p>Driving Events, Career Fests, MoUs, Student Engagement Programs, Global Meets, Partnerships, Branding & Communications globally.</p>
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


{/* ========== CAREERS SECTION (Auto-scroll + Zoom Modal) ========== */}
<section id="careers" className="updates">
  <div className="container">
    <h2 className="section-title">Careers</h2>

    <div className="carousel-wrapper">
      <div className="carousel-container auto-scroll">

        {/* 1️⃣ UTM Internship */}
        <div className="utm-card" onClick={() => openModal(utm)}>
          <img src={utm} alt="UTM Research Assistant" />
          <p className="caption">
            Come with <strong>B.Tech CSE/IT</strong>, and learn:
            <ul className="caption-list">
              <li>Mobile app development using Java, Flutter, and Firebase.</li>
              <li>Experience in web systems using PHP and MySQL.</li>
              <li>Strong analytical and problem-solving skills.</li>
            </ul>
            <span>From <strong>TeSh Acad Research Group</strong> — earn your certificate and fly to <strong>Kuala Lumpur, Malaysia</strong>.</span>
          </p>
        </div>

        {/* 2️⃣ Cybercrime Internship */}
        <div className="card" onClick={() => openModal(cybercrime)}>
          <img src={cybercrime} alt="Cyber Crime Internship" />
          <p className="caption">
            Internship at the <strong>Indian Cyber Crime Coordination Centre (I4C)</strong>, MHA.
            <ul className="caption-list">
              <li>Gain experience in Cyber Security & Forensics.</li>
              <li>Work alongside experts to enhance your knowledge.</li>
            </ul>
            <span>Last Date to Apply: <strong>17 Oct 2025</strong></span>
          </p>
        </div>

        {/* 3️⃣ Raman Charpak Fellowship */}
        <div className="card" onClick={() => openModal(raman)}>
          <img src={raman} alt="Raman Charpak Fellowship" />
          <p className="caption">
            Opportunity for <strong>PhD & Master’s students</strong> for Indo–French collaborative research.
            <ul className="caption-list">
              <li>Funding support & accommodation for 2–5 months.</li>
            </ul>
          </p>
        </div>

        {/* 4️⃣ Book Chapter */}
        <div className="book-card" onClick={() => openModal(book)}>
          <img src={book} alt="Book Chapter Call" />
          <p className="caption">
            Opportunity for Electrical Engineering Academicians — from manuscript prep to international publication.
          </p>
        </div>

        {/* 5️⃣ UTeM Vacancy */}
        <div className="utem-card" onClick={() => openModal(utem)}>
          <img src={utem} alt="UTeM Faculty Vacancy" />
          <p className="caption">
            Apply for <strong>UTeM Faculty Positions</strong> — through <strong>TeSh Academic Advancement Plans</strong>.
          </p>
        </div>

        {/* Duplicates for infinite loop */}
        <div className="utm-card" onClick={() => openModal(utm)}>
          <img src={utm} alt="UTM Research Assistant" />
        </div>
        <div className="card" onClick={() => openModal(cybercrime)}>
          <img src={cybercrime} alt="Cyber Crime Internship" />
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImg} alt="Enlarged" className="modal-img" />
        </div>
      )}
    </div>
  </div>
</section>




        {/* ================== Contact ================== */}
        <section id="contact" className="section">
          <div className="container narrow contact">
            <h2>Let our Team reach out to You</h2>
            <p>Tell us your Goal. We’ll reply within 24 hours.</p>

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
                  placeholder="Course/Country, Target intake, Questions…"
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
                  WhatsApp Us
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
  <div className="container footer-content">
    <div className="footer-left">
      <p>
        © {new Date().getFullYear()} <strong>TESH ACAD</strong>. All rights reserved. |
        Developed and hosted by <strong>TeSh Acad Chief Technical Team</strong>. |
        Last updated: <strong>Nov 07, 2025</strong>
      </p>
      <p>
        📍 <strong>Office Address:</strong> 87-482-1, Srinagar Colony, Kurnool, Andhra Pradesh, India – 518002
      </p>
      <a href="/policies.html" className="footer-link">Terms & Privacy</a>
    </div>

    <div className="footer-right">
      <img
        src={process.env.PUBLIC_URL + "/office.jpeg"}
        alt="TeSh Acad Office"
        className="footer-office-img"
      />
    </div>
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
