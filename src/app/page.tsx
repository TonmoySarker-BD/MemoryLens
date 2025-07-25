import ExploreCategories from "@/components/home/ExploreCategories";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'MemoryLens - Professional Photography Services',
  description: 'Capturing life\'s precious moments with professional photography for weddings, birthdays, and corporate events.',
  keywords: ['photography', 'wedding photographer', 'event photography', 'professional photos'],
  authors: [{ name: 'Tonmoy Sarker', url: 'https://tonmoysarker.com' }],
  openGraph: {
    title: 'MemoryLens - Professional Photography',
    description: 'Preserving your memories with artistry and passion',
    url: 'https://memorylens.vercel.app',
    siteName: 'MemoryLens',
    locale: 'en_US',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <ExploreCategories/>
      </main>

    </div>
  );
}
