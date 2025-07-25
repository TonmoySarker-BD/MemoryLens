import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
      <Navbar />
      </header>
      <main>
        <div>
          <Hero />
        </div>
      </main>
      
    </div>
  );
}
