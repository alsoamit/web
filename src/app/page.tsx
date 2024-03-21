import Hero from "@/components/homepage/Hero";
import Insights from "@/components/homepage/Insights";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <div className="bg-black">
        <Services />
      </div>
      <Testimonials />
      <div className="min-h-screen bg-white dark:bg-black flex justify-center items-center flex-col gap-8"></div>
      <Insights />
    </>
  );
}
