import { ArrowDownCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Krittaphat Musrichon</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Experienced and versatile professional with expertise in Vue, Nuxt, Node.js, and Golang. I enjoy
              collaborating, am solution-oriented, and always open to learning new technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" className="border-gray-300">
                <a href="#experience">
                  View Experience
                  <ArrowDownCircle className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200">
              <Image src="/images/profile.png" alt="Krittaphat Musrichon" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

