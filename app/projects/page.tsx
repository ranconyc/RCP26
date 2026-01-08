const projectsData = [
  {
    type: "Web app",
    name: "TravelMate",
    description:
      "Helping people find their next travelmate to explore the world with.",
    skills: ["User research", "Wireframe", "UI design", "typeScript", "React"],
    color: "orange",
  },
  {
    type: "commercial website",
    name: "TruCircle",
    description:
      "Improving the site experience for mental health product company.",
    skills: [
      "User research",
      "Wireframe",
      "UI design",
      "Figma",
      "prototyping",
      "User testing",
    ],
    color: "blue",
  },
];

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <div
      className={`px-6 py-4 min-h-60 bg-${project.color}-600/10 border border-${project.color}-300 rounded-xl`}
    >
      <h2 className="text-sm font-semibold uppercase">{project.type}</h2>
      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p>{project.description}</p>
      <ul className="flex gap-2 flex-wrap mt-4 text-sm">
        {project.skills.map((skill) => (
          <li
            key={`${skill}-${project.name}`}
            className={`px-2 py-1 border border-${project.color}-200 rounded-full`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function ProjectsPage() {
  return (
    <main className="p-6 bg-zinc-800 text-white min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </main>
  );
}
