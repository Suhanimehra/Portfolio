// Project: Portfolio Website
'use client';
import React from 'react';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-pink-100 px-4">

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left h-screen max-w-6xl mx-auto">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-800">
              Hi, I'm Suhani Mehra 👋
            </h1>
            <h2 className="text-xl md:text-2xl text-black">
              A Web Developer & Computer Science Student
            </h2>
            <p className="text-md md:text-lg text-gray-700 max-w-xl">
              I’m passionate about building modern websites, exploring AI, and turning creative ideas into real web applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/SuhaniMehra_Resume.pdf"
                download
                className="bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition"
              >
                Download Resume
              </a>
              <button
                onClick={() => {
                  const section = document.getElementById('contact');
                  section && section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-purple-100 transition"
              >
                Contact Me
              </button>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center mb-10 md:mb-0">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 animate-pulse blur-sm scale-110 z-0" />
              <img
                src="/logo.png"
                alt="Suhani Mehra"
                className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-white shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen flex flex-col items-center justify-center text-center px-8 bg-white">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-800 max-w-2xl">
            I’m currently pursuing my B.Tech in Computer Science. I enjoy building web apps, exploring artificial intelligence,
            and contributing to open-source projects. My goal is to become a full-stack developer and create meaningful software that helps people.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="h-screen flex flex-col items-center justify-center text-center px-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-4">🧠 Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "C++", "SQL", "Python", "Git", "GitHub"].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-black">💬 Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Communication", "Teamwork", "Time Management", "Adaptability", "Problem Solving", "Creativity"].map((skill) => (
                  <span key={skill} className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 text-center bg-white px-8">
          <h2 className="text-3xl font-bold text-purple-800 mb-12">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Portfolio Website",
                desc: "My personal portfolio site built using Next.js.",
                link: "#",
                defaultImg: "/profile.png",
                hoverImg: "/hover.jpg"
              },
              {
                title: "To-Do List App",
                desc: "React app for daily task management.",
                link: "#",
                defaultImg: "/to-do.png",
                hoverImg: "/hover.jpg"
              },
              {
                title: "Weather App",
                desc: "Live weather info using OpenWeatherMap API.",
                link: "#",
                defaultImg: "/weather.png",
                hoverImg: "/weather-hover.jpg"
              },
              {title: "Face-Recognition Attendance System",
                desc: "Attendance system using face recognition.",
                link: "#",
                defaultImg: "/face.png",
                hoverImg: "/hover.jpg"
              },
              {
                title: "Image Cartoonifier",
                desc: "Turn images into cartoons using OpenCV.",
                link: "https://image-cartoonifier-1.onrender.com",
                defaultImg: "/cartoonifier.png",
                hoverImg: "/hover.jpg"
              },
              {
                title: "Chat Application",
                desc: "Real-time chat app using WebSocket.",
                link: "#",
                defaultImg: "/chat.png",
                hoverImg: "/hover.jpg"

              }
            ].map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                className="relative group h-64 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Default Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${project.defaultImg})`, zIndex: 0 }}
                />

                {/* Hover Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundImage: `url(${project.hoverImg})`, zIndex: 1 }}
                />

                {/* Overlay with Text */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-sm">{project.desc}</p>
                </div>

              </a>
            ))}
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="h-screen flex flex-col items-center justify-center text-center px-8 bg-gray-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">Contact Me</h2>
          <p className="text-md text-gray-700 max-w-xl mb-6">
            I'd love to hear from you! Feel free to reach out via email or through my social media.
          </p>
          <div className="space-y-2 text-gray-800">
            <p>Email: <a href="mailto:mehrasuhani.sm88@gmail.com" className="text-purple-600 underline">mehrasuhani.sm88@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/suhanimehra" target="_blank" className="text-purple-600 underline">linkedin.com/in/suhanimehra</a></p>
            <p>GitHub: <a href="https://github.com/Suhanimehra" target="_blank" className="text-purple-600 underline">github.com/Suhanimehra</a></p>
          </div>
        </section>

      </main>
    </>
  );
}
