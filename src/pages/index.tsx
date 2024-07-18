import Home from '@/components/about/Home';
import Head from 'next/head';
export default function Index() {
  return (
    <>
      <Head>
        <title>Rohit Mallick</title>
        <meta name='description' content='Rohit Mallick home page' />
      </Head>
      <main className={`overflow-x-hidden`}>
        <Home />
      </main>
    </>
  );
}
