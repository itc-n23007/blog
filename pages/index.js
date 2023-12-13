import Head from 'next/head'
import Header from '../components/header.js'
import Hero from '../components/hero.js'
import Footer from '../components/footer.js'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>

      <Footer />
    </>
  )
}
