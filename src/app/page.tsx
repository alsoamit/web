import Cta from "@/components/buttons/Cta";
import Insights from "@/components/homepage/Insights";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Work from "@/components/homepage/Work";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#0E161A] flex justify-center items-center flex-col gap-8">
        <div className="flex justify-center items-center text-6xl font-heading">
          We are arriving soon!
        </div>
        <div className="flex justify-center items-center text-xl font-mono">
          We&apos;re are here
        </div>
        <div className="flex justify-center items-center font-body">
          Coming soon!
        </div>
        <Cta>Get in touch</Cta>
      </div>
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
