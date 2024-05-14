import ContactUsform from "@/components/forms/ContactUsform";
import AboutCompany from "@/components/shared/AboutCompany";
import HeroSection from "@/components/shared/HeroSection";
import TeamSection from "@/components/shared/TeamSection";

export default function Home() {
  return (
    <main className=" relative flex flex-col  place-items-center ">
      <HeroSection />
      <AboutCompany />
      <TeamSection />
      <ContactUsform />
    </main>
  );
}

// lg:w-[89%] md:px-9 max-md:px-5
