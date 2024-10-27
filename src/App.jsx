import Hero from './components/Hero'
import Grid from './components/Grid'
import RecentProjects from './components/RecentProjects'
import Companies from './components/Companies'
import Experience from './components/Experience'
import Footer from './components/Footer'
import {Navbar} from './components/Navbar'
import * as Sentry from '@sentry/react'


const App = () => {
  return (
    <main className='m-2 sm:mx-11 font-inter h-[200vh]'>
      <Navbar />
      <Hero />
      <Grid />
      <RecentProjects />
      <Companies />
      <Experience />
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App)


