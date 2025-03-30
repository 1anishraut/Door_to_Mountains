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



// const Home1 = () => <section id="home">Home Section</section>;
// const About1 = () => <section id="about">About Section</section>;
// const Blog1 = () => <section id="blog">Blog Section</section>;
// const Contact1 = () => <section id="contact">Contact Section</section>;

function App() {

  return (
    <>
      <div className="flex flex-col gap-7 md:gap-14">
        <Navbar />
        <Paragraph/>
      </div>
    </>
  );
}

export default App
