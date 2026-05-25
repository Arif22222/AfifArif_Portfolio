import Smartkindy from "./assets/Smartkindy.png";
import Freshmart from "./assets/Freshmart.png";
import Enroll from "./assets/Enroll.png";
import Hostelhub from "./assets/Hostelhub.png";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";


function App() {
  const skills = [
  "Web Development",
  "Software Testing",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "ASP.NET WebForms",
  "Java",
  "C",
  "JSP / Servlet",
  "Cisco CCNAv7",
  "Jira",
  "JMeter",
  "Automation",
  "Attention to Detail",
  "Problem Solving",
  "Analytical Thinking",
  "Communication"
];

  const projects = [
{
  title: "SmartKindy / KMMS",
  desc: "Kindergarten management system for admin, teachers and parents with attendance, payment, announcement and student management modules.",
  tech: "PHP • MySQL • Web System",
  image: Smartkindy,
  link: "https://www.smartkindy.my/"
},
    {
      title: "FreshMart Grocery System",
      desc: "Online grocery ordering system with admin and customer roles, product management, cart and order tracking.",
      tech: "ASP.NET WebForms • SQL",
      image: Freshmart
    },
    {
      title: "JSP Course Enrollment",
      desc: "Course enrollment system using JSP, Servlet and database integration for managing users, courses and enrollments.",
      tech: "Java • JSP • Servlet • MySQL",
      image: Enroll
    },
        {
      title: "Hostelhub Hostel Management System",
      desc: "Hostel management system for admin and students with room allocation, maintenance, and payment modules.",
      tech: "PHP • MySQL • Web System",
      image: Hostelhub,
      link: "https://hostelhub-project-alifdanialnasri.infinityfree.me/?i=1"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">My Portfolio</h1>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-blue-400">About</a>
<a href="#experience" className="hover:text-blue-400">Experience</a>
<a href="#education" className="hover:text-blue-400">Education</a>
<a href="#skills" className="hover:text-blue-400">Skills</a>
<a href="#projects" className="hover:text-blue-400">Projects</a>
<a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-24 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold mb-4">Software Engineering Student</p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Hi, I'm <span className="text-blue-400">Afif Arif</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl">
              I build clean, user-friendly web applications with strong interest in web development,
              database systems and software engineering.
            </p>

            <div className="flex gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                View Projects
              </a>
              <a href="#contact" className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl font-semibold">
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="bg-slate-900 rounded-2xl p-6">
              <p className="text-slate-400 mb-2">Portfolio Owner</p>
              <h3 className="text-3xl font-bold mb-2">Afif Arif Ahmad Suhaimi</h3>
              <p className="text-blue-400">
                Bachelor of Information Technology (Hons.) in Software Engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">
          <p className="text-slate-300 leading-8">
            Motivated and detail-oriented Software Engineering student with experience in
software testing, web development, and application support. Skilled in Java,
HTML/PHP, manual testing, and problem-solving, with hands-on experience using
Jira and collaborating in team environments. Seeking an internship opportunity in
Software Development or Quality Assurance from August 2026 to December 2026.

          </p>
        </div>
            </section>

      <section id="experience" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Past Experience</h2>

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Software Testing / Application Support Experience
            </h3>

            <p className="text-blue-400 font-semibold mb-3">
              Web Development • Manual Testing • Jira • Team Collaboration
            </p>

            <p className="text-slate-300 leading-8 mb-4">
              Gained hands-on experience in software testing, web development, and application support.
              Involved in manual testing, identifying issues, documenting bugs, and collaborating with
              team members using Jira.
            </p>

            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Performed manual testing for web-based applications.</li>
              <li>Reported and tracked issues using Jira.</li>
              <li>Supported application troubleshooting and problem-solving.</li>
              <li>Collaborated with team members in development and testing tasks.</li>
            </ul>
          </div>
        </div>
            </section>

      <section id="education" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">
            <p className="text-blue-400 font-semibold mb-2">Current</p>
            <h3 className="text-2xl font-bold text-white mb-2">
  Bachelor of Information Technology (Hons.) in Software Engineering
</h3>
<p className="text-blue-300 font-semibold mb-3">
  Universiti Kuala Lumpur
</p>
            <p className="text-slate-300 leading-7">
              Currently pursuing a degree focused on software development, database systems,
              web application development, and software engineering practices.
            </p>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-8 shadow-xl">
            <p className="text-blue-400 font-semibold mb-2">Previous</p>
            <h3 className="text-2xl font-bold text-white mb-2">
  Diploma in Software Engineering
</h3>
<p className="text-blue-300 font-semibold mb-3">
  German-Malaysian Institute
</p>
            <p className="text-slate-300 leading-7">
              Completed studies in information technology with exposure to programming,
              web development, database management, and system development projects.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div key={skill} className="bg-white/10 border border-white/10 rounded-2xl p-5 text-center font-semibold hover:bg-blue-500/20 hover:border-blue-400 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold mb-6">Projects</h2>

  <div className="grid md:grid-cols-3 gap-6">
    {projects.map((project) => (
      <a
  key={project.title}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:border-blue-400 transition block"
>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3" >{project.title}</h3>
          <p className="text-slate-300 mb-4 leading-7">{project.desc}</p>
          <p className="text-sm text-blue-400 font-semibold">{project.tech}</p>
        </div>
      </a>
    ))}
  </div>
</section>

      <section id="contact" className="max-w-6xl mx-auto py-20 px-6">
        <div className="bg-gradient-to-r from-emerald-700 to-blue-900 border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-blue-100 mb-6">
            Feel free to contact me for internship opportunities or project discussions.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
  <p className="bg-white text-blue-900 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
    <FaEnvelope />
    aafifariff@gmail.com
  </p>

  <p className="bg-white text-blue-900 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
    <FaPhoneAlt />
    +60 11-2140 3327
  </p>

  <a
    href="https://www.linkedin.com/in/afif-arif-ahmad-suhaimi-042900290"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-900 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
  >
    <FaLinkedin />
    LinkedIn Profile
  </a>

  <a
    href="https://github.com/Arif22222"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-blue-900 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
  >
    <FaGithub />
    GitHub Profile
  </a>
</div>

            

            </div>
          </div>
        </div>
      </section>

        <footer className="border-t border-white/10 text-center py-6 text-slate-400">
          <p>© 2026 Afif Arif. All Rights Reserved.</p>
        </footer>
    </div>
  );
}

export default App;