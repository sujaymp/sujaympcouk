import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white animate-gradient bg-[length:200%_200%]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="relative flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Sujay M P
          </h1>
          <p className="text-xl text-gray-300 mb-8">Solutions Architect</p>
          <div className="flex gap-4">
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Contact Me
            </Link>
            <Link 
              href="#projects" 
              className="glass-effect px-8 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:bg-white/10"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto text-gray-300">
          <p className="mb-4">
            I&apos;m a seasoned Solutions Architect with a proven track record in designing and implementing 
            scalable, resilient enterprise solutions. With extensive experience in cloud architecture 
            and distributed systems, I specialize in transforming complex business requirements into 
            efficient technical solutions.
          </p>
          <p className="mb-4">
            My expertise spans across cloud platforms, enterprise architecture, and modern development 
            practices. I excel in leading technical initiatives, mentoring teams, and bridging the gap 
            between business objectives and technical implementation.
          </p>
          <p>
            I&apos;m passionate about leveraging cutting-edge technologies to solve complex business challenges 
            while ensuring best practices in security, performance, and scalability.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            'Cloud Architecture',
            'AWS/Azure',
            'System Design',
            'Microservices',
            'DevOps',
            'Enterprise Architecture',
            'Solution Design',
            'API Design',
            'Infrastructure as Code',
            'Containerization',
            'Security & Compliance',
            'Agile Leadership'
          ].map((skill) => (
            <div 
              key={skill} 
              className="glass-effect text-center p-4 rounded-xl hover:scale-105 transition-all cursor-default hover:shadow-lg hover:shadow-blue-500/20"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Key Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Enterprise Cloud Migration",
              description: "Led the strategic migration of legacy systems to cloud infrastructure, implementing microservices architecture and reducing operational costs by 40%."
            },
            {
              title: "Digital Transformation Initiative",
              description: "Architected a scalable digital platform handling millions of transactions, implementing robust security measures and high-availability design."
            },
            {
              title: "DevOps Automation Pipeline",
              description: "Designed and implemented end-to-end CI/CD pipelines, improving deployment efficiency and reducing time-to-market by 60%."
            }
          ].map((project, index) => (
            <div key={index} className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all group">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/30 group-hover:to-purple-600/30"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <Link 
                  href="#" 
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  View Details 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form className="glass-effect p-8 rounded-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
        </div>
        <p>© {new Date().getFullYear()} Sujay M P. All rights reserved.</p>
      </footer>
    </main>
  );
}
