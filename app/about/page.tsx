import { Code, Figma, Search, CheckCircle2 } from "lucide-react";
interface SkillItem {
  label: string;
  items: string[];
}

interface SkillColumn {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const aboutData = {
  header: "Ranco",
  bio: [
    "Hello! I'm Ranco, a passionate software developer with a love for creating innovative digital solutions. With experience in various programming languages and frameworks, I enjoy building applications that make a difference.",
  ],
};

const columns: SkillColumn[] = [
  {
    title: "Research & Strategy",
    icon: <Search className="w-12 h-12 text-[#0AC6FF]" />,
    skills: [
      {
        label: "",
        items: [
          "User Research",
          "Market Research",
          "User Personas",
          "User Stories / Userflows",
          "Wireframing/Prototyping",
          "Usability Testing",
        ],
      },
    ],
  },
  {
    title: "Design & Prototyping",
    icon: <Figma className="w-12 h-12 text-[#0AC6FF]" />,
    skills: [
      {
        label: "Tools",
        items: ["Figma", "Sketch", "Photoshop/Illustrator"],
      },
      {
        label: "Prototyping",
        items: ["InVision", "Principle", "Flinto"],
      },
    ],
  },

  {
    title: "Development",
    icon: <Code className="w-12 h-12 text-[#0AC6FF]" />,
    skills: [
      {
        label: "Languages",
        items: ["JavaScript/TypeScript", "HTML", "CSS/Styled-Components"],
      },
      {
        label: "Frameworks",
        items: ["React / React Hooks", "Next.js", "Framer Motion"],
      },
      {
        label: "Backend/DB",
        items: ["Node.js / Express", "RESTful API", "MongoDB/SQL"],
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="">
      <h1 className="text-2xl md:text-3xl font-bold mt-16 mb-8">
        Technical Skills & Stack
      </h1>
      {/* skills columns */}
      <div className="grid gap-8 md:items-start md:grid-cols-3">
        {columns.map((column, index) => (
          // skill column
          <div key={index} className="grid gap-7">
            {/* skill header */}
            <div className="h-25 flex flex-col justify-between ">
              {column.icon}
              <h2 className="text-2xl font-bold md:text-xl">{column.title}</h2>
            </div>
            {/* skill items */}
            {column.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className=" ">
                {/* skill label */}
                <h3 className="text-gray-400 mb-4">{skill.label}</h3>
                {/* skill items */}
                <ul className="grid gap-2">
                  {skill.items.map((item, itemIndex) => (
                    // skill item
                    <li key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0AC6FF]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-zinc-800 text-white">
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">{aboutData.bio}</p>
        <SkillsSection />
      </main>
    </div>
  );
}
