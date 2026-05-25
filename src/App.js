import Smartkindy from "./assets/Smartkindy.png";
import Freshmart from "./assets/Freshmart.png";
import Enroll from "./assets/Enroll.png";
import Hostelhub from "./assets/Hostelhub.png";


function App() {
  const skills = [
    "HTML", "CSS", "Tailwind CSS", "JavaScript",
    "PHP", "MySQL", "ASP.NET WebForms", "Java", "JSP / Servlet"
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
          <h1 className="text-xl font-bold text-white">Afif Arif</h1>
          <div className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
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
              <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
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
              <h3 className="text-3xl font-bold mb-2">Afif Arif</h3>
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
            I am a Bachelor of Information Technology (Hons.) in Software Engineering student.
            I enjoy developing web applications using PHP, MySQL, ASP.NET WebForms, Java,
            JSP and Servlet. I am interested in creating practical systems that are easy to use
            and helpful for users.
          </p>
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-blue-100 mb-6">
            Feel free to contact me for internship opportunities or project discussions.
          </p>
          <p className="bg-white text-blue-900 inline-block px-6 py-3 rounded-xl font-semibold">
            aafifariff@gmail.com
          </p>
                    <p className="bg-white text-blue-900 inline-block px-6 py-3 ml-12 rounded-xl font-semibold">
            +60 11-2140 3327
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 text-center py-6 text-slate-400">
        <p>© 2026 Afif Arif. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;