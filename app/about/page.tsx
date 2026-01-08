import { Code, Figma, Search, CheckCircle2, School } from "lucide-react";
import { title } from "process";
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

const JourneyData = [
  {
    title: "Design Empathy (UX/UI)",
    School: "General Assembly",
    year: "2019",
    p1: "My journey into design started at General Assembly, where I learned the fundamentals of UX/UI design. I discovered the power of user research, journey mapping, and designing with empathy at the core.",
    p2: "My time as an Apple Specialist taught me the importance of human-centered design in practice. Every customer interaction reinforced how technology should feel invisible—intuitive, accessible, and delightful.",
  },
  {
    title: "Technical Logic (Full-Stack)",
    School: "Le Wagon",
    year: "2020",
    p1: "To bring my designs to life, I enrolled in Le Wagon's full-stack development bootcamp. There, I mastered HTML, CSS, JavaScript, and React.",
    p2: "Learning to code transformed how I approach design. I no longer just hand off mockups—I build them. I understand technical constraints, performance considerations, and accessibility standards from the inside out.",
  },
];

const Badge = ({ text, color }: { text: string; color: string }) => {
  return (
    <span
      className={`w-6 h-6 bg-${color} rounded flex items-center justify-center text-xs font-semibold`}
    >
      {text}
    </span>
  );
};
const JourneySection = () => {
  return (
    <section className="mt-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">My Journey</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {JourneyData.map((journey, index) => (
          <div
            key={index}
            className="mb-12 border border-blue-300 bg-blue-600/10 rounded-xl p-6"
          >
            <h2 className="text-xl font-semibold mb-1">{journey.title}</h2>
            <div className="flex items-center">
              {journey.School === "General Assembly" ? (
                <Badge text="GA" color="red" />
              ) : (
                <Badge text="LW" color="blue" />
              )}
              <h3 className="text-md text-gray-400 mb-1">
                {journey.School} &#8226; {journey.year}
              </h3>
            </div>
            <p className="mb-2">{journey.p1}</p>
            <p>{journey.p2}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-zinc-800 text-white">
      <main className="max-w-240 mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <p className="text-lg mb-4">{aboutData.bio}</p>
        <JourneySection />
        <SkillsSection />
      </main>
    </div>
  );
}
