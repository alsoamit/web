import Contact from "@/components/homepage/Contact";
import Hero from "@/components/homepage/Hero";
import Insights from "@/components/homepage/Insights";
import Services from "@/components/homepage/Services";
// import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <div className="bg-black overflow-x-hidden">
        <Services />
      </div>
      <div className="bg-black">
        <Contact />
      </div>
      <div className="bg-black">
        <Insights />
      </div>
    </>
  );
}
