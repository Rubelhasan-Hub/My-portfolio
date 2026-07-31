import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

export const ProjectDetails = () => {
  const { id } = useParams();

  // প্রতিটি প্রজেক্টের বিস্তারিত ডাটা
  const projectsData = {
    flexflow: {
      title: "FLEXFLOW",
      description: "FlexFlow is a modern, full-stack web application designed to bridge the gap between fitness trainers and health enthusiasts. It provides a seamless platform for class scheduling, professional booking management, and interactive community engagement.",
      image: "/Image/project-5.png",
      techStack: ["Node.js", "Express.js", "Next.js", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://flexflow-gym.vercel.app",
      githubClient: "https://github.com/Rubelhasan-Hub/flexflow-client",
      challenges: [
        "Managing real-time class booking slots and preventing double-booking conflicts.",
        "Optimizing dashboard performance while fetching large sets of user activities.",
        "Ensuring secure authentication flows across client components."
      ],
      futurePlans: [
        "Integrating payment gateways for premium membership upgrades.",
        "Adding live video streaming features for virtual fitness sessions.",
        "Implementing push notifications for upcoming training schedules."
      ]
    },
    docappointment: {
      title: "DocAppointment",
      description: "Finding the right healthcare provider and booking medical consultations shouldn't be a hassle. To make healthcare more accessible and streamlined, I developed DocAppointment—a modern, responsive, and user-friendly web application designed to connect patients with top healthcare professionals effortlessly.",
      image: "/Image/project-6.png",
      techStack: ["Express.js", "Node.js", "Next.js", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://docappoint-client.vercel.app",
      githubClient: "https://github.com/Rubelhasan-Hub/docappoint-client",
      challenges: [
        "Designing an intuitive booking calendar with dynamic time-slot availability.",
        "Handling role-based access control and secure route protection.",
        "Ensuring smooth responsiveness across mobile and desktop viewports."
      ],
      futurePlans: [
        "Adding an in-app video consultation module.",
        "Integrating automated email/SMS reminders for appointments.",
        "Developing a mobile app version using React Native."
      ]
    },
    "keen-keeper": {
      title: "keen-keeper",
      description: "KeenKeeper is a clean and interactive relationship management app designed to track friendships, monitor communication patterns, and enable quick check-ins like call, text, and video in one place.",
      image: "/Image/project1.png",
      techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://keen-keeper-ashen.vercel.app",
      githubClient: "https://github.com/Rubelhasan-Hub/keen-keeper",
      challenges: [
        "Structuring local storage and state management for seamless offline interaction.",
        "Creating responsive notification reminders for check-ins."
      ],
      futurePlans: [
        "Cloud synchronization using backend databases.",
        "Adding data export features (PDF/CSV)."
      ]
    },
    "digitools-platform": {
      title: "DigiTools-Platform",
      description: "A fast and modern web app to explore and purchase premium digital assets like AI tools, design templates, and stock resources. Built with React & Vite, it offers a smooth shopping experience with cart management, real-time price updates, simple checkout, and instant action-based notifications.",
      image: "/Image/project2.png",
      techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://digitools-explore-the-new-world.netlify.app/",
      githubClient: "https://github.com/Rubelhasan-Hub/DigiTools-Platform",
      challenges: [
        "Managing cart state persistence across page reloads.",
        "Filtering through digital assets with instant search response."
      ],
      futurePlans: [
        "Adding user review and rating system.",
        "Implementing digital product instant download links after checkout."
      ]
    },
    "english-janala": {
      title: "English Janala",
      description: "An interactive English learning app where users can explore lesson-based vocabulary, view meanings and pronunciation, and access detailed information through a modal for better understanding.",
      image: "/Image/project3.png",
      techStack: ["JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://english-janala-code-nu.vercel.app",
      githubClient: "https://github.com/Rubelhasan-Hub/English-janala-code",
      challenges: [
        "Handling audio pronunciation fetching reliably without UI lags.",
        "Building dynamic modal popups cleanly with pure JavaScript."
      ],
      futurePlans: [
        "Adding quiz sections to test vocabulary proficiency.",
        "Integrating user progress tracking dashboards."
      ]
    },
    "github-issue-tracker": {
      title: "GitHub Issues Tracker",
      description: "A simple GitHub Issues Tracker web app where users can log in and view issues in card format. It shows total issues, filter by open/closed status, and allows searching issues easily. Built with modern frontend technologies.",
      image: "/Image/project4.png",
      techStack: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
      liveLink: "https://github-issue-tracker00112.netlify.app/",
      githubClient: "https://github.com/Rubelhasan-Hub/B13-A5-Github-Issue-Tracker",
      challenges: [
        "Parsing external issue data smoothly and mapping them into interactive filter tabs.",
        "Optimizing search filtering performance."
      ],
      futurePlans: [
        "Allowing users to create and push actual issues directly to their GitHub repos.",
        "Dark/Light theme toggle support."
      ]
    }
  };

  const project = projectsData[id] || {
    title: "Project Not Found",
    description: "The requested project could not be found.",
    image: "/Image/project1.png",
    techStack: [],
    liveLink: "#",
    githubClient: "#",
    challenges: [],
    futurePlans: []
  };

  return (
    <div className="min-h-screen bg-[#0b131a] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#00df9a] mb-8 hover:underline font-medium">
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
        
        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 mb-8 shadow-2xl aspect-video">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Links (Live Project & GitHub Client Link) */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#00df9a] text-[#0b131a] font-semibold px-6 py-3 rounded-xl hover:bg-[#00df9a]/80 transition-all shadow-lg"
          >
            <FaExternalLinkAlt /> Live Project Link
          </a>
          
          {project.githubClient && (
            <a 
              href={project.githubClient} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-700 transition-all shadow-lg"
            >
              <FaGithub className="text-lg" /> GitHub Repository (Client)
            </a>
          )}
        </div>

        {/* Brief Description */}
        <div className="bg-[#111a21] border border-gray-800 p-8 rounded-2xl mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#00df9a] mb-4">Brief Description</h2>
          <p className="text-gray-300 leading-relaxed text-base">{project.description}</p>
        </div>

        {/* Main Technology Stack */}
        <div className="bg-[#111a21] border border-gray-800 p-8 rounded-2xl mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#00df9a] mb-4">Main Technology Stack Used</h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-[#00df9a] border border-gray-700/60 px-4 py-2 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges Faced */}
        <div className="bg-[#111a21] border border-gray-800 p-8 rounded-2xl mb-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#00df9a] mb-4">Challenges Faced While Developing</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Potential Improvements & Future Plans */}
        <div className="bg-[#111a21] border border-gray-800 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#00df9a] mb-4">Potential Improvements & Future Plans</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed">
            {project.futurePlans.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};