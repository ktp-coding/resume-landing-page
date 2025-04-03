import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      company: "Finnomena Co., Ltd",
      period: "2022 - Present",
      title: "Full Stack Developer",
      description: [
        "Developed an AI-based system to assist in investment portfolio management and fund recommendations.",
        "Enhanced and redesigned the company website for Finnomena, including a rebranding initiative.",
        "Designed and developed a coupon-based system for investment benefits with Finnomena.",
        "Developed the FINT system to provide investment benefits for Finnomena users.",
        "Built various systems related to mutual funds, stocks, and gold investments.",
        "Developed the Opportunity Hub platform to expand investment opportunities for customers.",
      ],
      technologies: ["Vue.js", "Nuxt.js", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      company: "Entronica Co., Ltd",
      period: "2021 - 2022",
      title: "Full Stack Developer",
      description: [
        "Developed the AppleCare+ product for customers using AIS services.",
        "Designed and developed a system for assigning tasks to AIS employees.",
        "Designed and built a backend system for AIS employees to manage customer data.",
        "Developed a system for handling communication and data exchange between AIS employees, customers, and partners.",
      ],
      technologies: ["Vue.js", "Node.js", "Express", "MongoDB"],
    },
    {
      company: "Chiangrai Technology Co., Ltd.",
      period: "2019 - 2021",
      title: "Backend Developer",
      description: [
        "Design and develop database architecture",
        "Create ER diagrams to visualize data relationships",
        "Design and document API specifications",
        "Develop and implement a backend system for data management",
      ],
      technologies: ["Golang", "PostgreSQL", "RESTful API", "Docker"],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                    <CardDescription className="text-gray-500">{exp.title}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit text-gray-700 border-gray-300">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 text-gray-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

