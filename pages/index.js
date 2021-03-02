import Head from 'next/head';
import { FirstImpression } from '../src/components/FirstImpression';
import { Habilities } from '../src/components/Habilities';
import { Header } from '../src/components/Header';

export default function Home() {
  return (
   <>
    <Head>
      <title>Kevin Alves | Portfolio</title>
    </Head>

    <Header />
    <FirstImpression />
    <Habilities />
   </> 
  )
}
