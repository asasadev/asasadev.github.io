import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import RootLayout from "./layout";

export default function Home() {
    return (
        <RootLayout>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <main className="flex-grow">
                    <Hero/>
                    <Services/>
                </main>
                <Footer/>
            </div>
        </RootLayout>
    )
}

