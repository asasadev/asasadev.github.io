'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-white/[0.05]" />
      <div className="container mx-auto px-4 py-24 sm:py-40 relative z-10">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 text-center mb-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            ASASA
          </span>와 함께<br />혁신의 미래로
        </h1>
        <p className={`text-xl sm:text-2xl text-gray-700 text-center max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          우리는 첨단 기술과 창의적인 솔루션으로 당신의 비즈니스를 미래로 이끕니다
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}

