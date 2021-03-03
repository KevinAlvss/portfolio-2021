import Head from 'next/head';
import { FirstImpression } from '../src/components/FirstImpression';
import { Footer } from '../src/components/Footer';
import { Habilities } from '../src/components/Habilities';
import { Header } from '../src/components/Header';
import { Projects } from '../src/components/Projects';

export default function Home() {
  return (
   <>
    <Head>
      <title>Kevin Alves | Portfolio</title>
    </Head>

    <Header />
    <FirstImpression />
    <Habilities />
    <Projects/>
    <Footer />
   </> 
  )
}
