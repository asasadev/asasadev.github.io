import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          ASASA
        </Link>
      </nav>
    </header>
  )
}

