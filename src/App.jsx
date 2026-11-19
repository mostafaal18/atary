import AboutSection from "./components/home/AboutSection";
import BlogSection from "./components/home/BlogSection";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import HerbalTeaBanner from "./components/home/HerbalTeaBanner";
import Hero from "./components/home/Hero";
import NatureSecretBanner from "./components/home/NatureSecretBanner";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import PageBackground from "./components/PageBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <PageBackground />
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <HerbalTeaBanner />
        <FeaturedProducts />
        <NatureSecretBanner />
        <FeaturedProducts />
        <AboutSection />
        <BlogSection/>
      </main>

      <Footer />
    </div>
  );
}
export default App;