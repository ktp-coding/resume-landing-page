import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  return (
    <section id="education" className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>

        <Card className="border-gray-200 max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-100 rounded-full">
                <GraduationCap className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">University of Phayao</h3>
                <p className="text-gray-600 mb-2">
                  Computer Engineering in School of Information And Communication Technology
                </p>
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2010 - 2014</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

