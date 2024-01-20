import Image from 'next/image';
import { Inter } from 'next/font/google';
import About from '@/components/about/About';
const inter = Inter({ subsets: ['latin'] });
export default function Home() {
  return (
    <main className={`overflow-scroll`}>
      <About />
    </main>
  );
}
