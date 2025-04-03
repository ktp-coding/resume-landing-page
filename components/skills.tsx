import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "Vue.js / Nuxt.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 60 },
        { name: "Angular", level: 50 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js (Express, NestJS)", level: 85 },
        { name: "Golang", level: 80 },
        { name: "RESTful API Design", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git / GitLab CI/CD", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 60 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Critical Thinking", level: 85 },
        { name: "Agile Methodology", level: 80 },
        { name: "Communication", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

