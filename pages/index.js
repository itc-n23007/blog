import Header from '@/components/header.js'
import Hero from '@/components/hero.js'
import Footer from '@/components/footer.js'

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <Hero title='CUBE' subtitle='アウトプットしていくサイト' />
      </main>

      <Footer />
    </>
  )
}
