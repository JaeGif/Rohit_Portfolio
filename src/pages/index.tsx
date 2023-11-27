import Image from 'next/image';
import { Inter } from 'next/font/google';
import Timeline from '@/components/timeline/Timeline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`overflow-scroll`}>
      <Timeline />
    </main>
  );
}
