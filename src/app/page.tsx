import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { DrivingDemand } from "@/components/site/DrivingDemand";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Services } from "@/components/site/Services";
import { Pioneers } from "@/components/site/Pioneers";
import { WhatsNew } from "@/components/site/WhatsNew";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-[430px] bg-background">
      <AnnouncementBar />
      <div className="relative">
        <Navbar light />
        <Hero />
      </div>
      <DrivingDemand />
      <FeaturedWork />
      <Services />
      <Pioneers />
      <WhatsNew />
      <Footer />
    </main>
  );
}
