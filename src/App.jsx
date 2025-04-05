import { useState } from 'react'
import Landing from './Landing'
import Navbar from './Navbar'
import Paragraph from './Paragraphs'
import About from './About'
import Video from './Video'
import PopularPlace from './PopularPlace'
import Blog from './Blog'
import TravelPlan from './TravelPlan'
import Testimonial from './Testimonials'
import Footer from './Footer'
import Preloader from "./Preloader";


// const Home1 = () => <section id="home">Home Section</section>;
// const About1 = () => <section id="about">About Section</section>;
// const Blog1 = () => <section id="blog">Blog Section</section>;
// const Contact1 = () => <section id="contact">Contact Section</section>;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={showPreloader ? "invisible" : "visible"}>
        {/* Your actual content here */}
        <div className="flex flex-col gap-7 md:gap-18 relative">
          <Navbar />
          <Paragraph />
        </div>
      </div>
    </>
  );
}

export default App
