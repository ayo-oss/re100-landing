import FeatureGrid from '../components/FeatureGrid.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Newsletter from '../components/Newsletter.jsx'

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default Home
