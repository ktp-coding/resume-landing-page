import { Code, Server, Database, Cpu } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          I want to utilize my creative thinking style and communication skills to add value to your projects. With
          expertise in both frontend and backend technologies, I can deliver complete solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-gray-900">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend</h3>
            <p className="text-gray-600">
              Expert in Vue.js and Nuxt.js with knowledge of React and Angular. Proficient in TypeScript and modern CSS
              frameworks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-gray-900">
              <Server size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend</h3>
            <p className="text-gray-600">
              Skilled in Golang and Node.js (Express, NestJS) for building robust and scalable server-side applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-gray-900">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Database</h3>
            <p className="text-gray-600">
              Experience with PostgreSQL, MongoDB, and Redis for efficient data storage and retrieval solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-4 text-gray-900">
              <Cpu size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">DevOps</h3>
            <p className="text-gray-600">
              Basic knowledge of Docker, Kubernetes, and CI/CD pipelines for streamlined development workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

