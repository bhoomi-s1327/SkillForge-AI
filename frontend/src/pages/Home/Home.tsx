import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Stats from "../../components/home/Stats";
import Trusted from "../../components/home/Trusted";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;