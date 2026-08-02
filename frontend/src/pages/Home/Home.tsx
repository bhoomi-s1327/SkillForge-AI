import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import Statistics from "../../components/home/Statistics";
import CTA from "../../components/home/CTA";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;