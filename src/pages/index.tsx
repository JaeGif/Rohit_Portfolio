import Image from 'next/image';
import { Inter } from 'next/font/google';
import Timeline from '@/components/timeline/Timeline';
import About from './About';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`overflow-scroll`}>
      <About />
    </main>
  );
}
