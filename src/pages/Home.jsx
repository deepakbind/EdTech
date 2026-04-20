import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Courses from "../components/Courses";
import Trust from "../components/Trust";
import Mentors from "../components/Mentors";
import Companies from "../components/Companies";
import MentorStrip from "../components/MentorStrip";
import Testimonials from "../components/Testimonials";
import Placement from "../components/Placement";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">

      <Hero />
      <Stats />
      <Courses />
      <Trust />
      <Mentors />

      {/* ✅ ONLY ONCE (no duplicate) */}
      <Companies />

      <MentorStrip />
      <Testimonials />
      <Placement />
      <FAQ />
      <Footer />

    </div>
  );
}