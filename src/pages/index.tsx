import Image from 'next/image';
import { Inter } from 'next/font/google';
import Home from '@/components/about/Home';
const inter = Inter({ subsets: ['latin'] });
export default function Index() {
  return (
    <main className={`overflow-scroll`}>
      <Home />
    </main>
  );
}
