import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, Cloud, BarChart3, Shield, Brain } from 'lucide-react'

export default function Services() {
  const services = [
    { title: "웹 개발", description: "최신 기술을 활용한 반응형 웹사이트 개발", icon: Globe, gradient: "from-blue-500 to-cyan-500" },
    { title: "모바일 앱 개발", description: "iOS 및 Android 플랫폼을 위한 사용자 친화적인 앱 개발", icon: Smartphone, gradient: "from-green-500 to-emerald-500" },
    { title: "클라우드 솔루션", description: "안전하고 확장 가능한 클라우드 인프라 구축 및 관리", icon: Cloud, gradient: "from-purple-500 to-indigo-500" },
    { title: "데이터 분석", description: "빅데이터 처리 및 인사이트 도출을 위한 분석 서비스", icon: BarChart3, gradient: "from-yellow-500 to-orange-500" },
    { title: "사이버 보안", description: "최첨단 보안 솔루션으로 귀사의 디지털 자산 보호", icon: Shield, gradient: "from-red-500 to-pink-500" },
    { title: "AI 및 머신러닝", description: "비즈니스 프로세스 최적화를 위한 AI 솔루션 개발", icon: Brain, gradient: "from-teal-500 to-lime-500" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ASASA가 제공하는 솔루션</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className={`p-2 rounded-full bg-gradient-to-br ${service.gradient}`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

