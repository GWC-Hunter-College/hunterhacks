// I want to see viewer count
import { Analytics } from '@vercel/analytics/react'; 

// Import useRefs to keep track of section components
// Pass refs to navigation to scroll to them
import { useRef } from "react";

// Below are the components being used, go into their
// respective jsx files to read specific details
import Navbar from "./components/Navbar";
// import FAQ from './components/FAQ'
import FAQHolder from "./components/FAQHolder";

import Footer from "./components/Footer";

import Tracks from "./components/Tracks";
import ScheduleList from "./components/ScheduleList";

// Imports for picture board

import Abbe from "./assets/Abbe.jpg";
import Ahmed from "./assets/Ahmed.jpg";
import Isabella from "./assets/Isabella.jpg";
import Justin from "./assets/Justin.jpg";
import Kevin from "./assets/Kevin.jpg";
import Leyla from "./assets/Leyla.jpg";
import Melissa from "./assets/Melissa.jpg";
import Susan from "./assets/Susan.jpg";
import Kareem from "./assets/Kareem.jpg";
import Georgina from "./assets/Georgina.png";


import PictureBoard from "./components/PictureBoard";

// =========================
// // picture board prop stuff

// picture board prop stuff
const judgeProfiles = [
  { src: Abbe, name: "Abby Tse", profession: "SWE @ IBM" },
  { 
    src: Ahmed, 
    name: "Ahmed Alsubai", 
    profession: "PM @ Capital One, Hunter Alum" 
  },
  {
    src: Isabella,
    name: "Isabel Abonitalla",
    profession: "Prev MLH Coach, Prev Intern @ Microsoft & Roblox",
  },
  { src: Justin, name: "Justin Tojeira", profession: "Hunter CS Professor" },
  { 
    src: Kevin, 
    name: "Kevin Granados", 
    profession: "SWE @ Microsoft, Hunter Alum" 
  },
  { 
    src: Leyla, 
    name: "Leyla Tuon Cao", 
    profession: "SWE @ Google, Hunter Alum" 
  },
  { src: Melissa, name: "Melissa Lynch", profession: "Hunter CS Professor" },
  { src: Susan, name: "Susan Sun", profession: "Data Scientist @ UpKeepCare" },
  { src: Kareem, 
    name: "Kareem Itani", 
    profession: "SWE @ TD, Brooklyn College Alum" 
  },
  { src: Georgina, 
    name: "Georgina Woo", 
    profession: "TA and Research Assistant at Hunter College" 
  },
];
const judgeBoardSizing = [
  { breakpoint: -1, size: 2 },
  { breakpoint: 950, size: 3 },
  //{ breakpoint: 1200, size: 3 },
  { breakpoint: 1410, size: 5 },
];

// Section is important as this is how navigation knows
// where everything is, as well as a way to organize
// each section into its own component
//
// all section content should be a child, while it's header
// and reference should be passed as components
import Section from "./components/Section";
import About from "./components/About";

import Sponsors from "./components/Sponsors";

function App() {
  // references for each section
  const aboutRef = useRef(null);
  const sponsorRef = useRef(null);
  const judgeRef = useRef(null);
  const scheduleRef = useRef(null);
  const trackRef = useRef(null);
  const faqRef = useRef(null);

  // function to scroll to each section,
  // pass down to navigation component
  const scrollToRef = (ref) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const top = ref.current.offsetTop;

    window.scrollTo({
      top: top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // array to pass down refs and navigation names
  // to navigation component dynamically
  const sectionArray = useRef([
    { sectionName: "About", sectionRef: aboutRef },
    { sectionName: "Judges", sectionRef: judgeRef },
    { sectionName: "Sponsors", sectionRef: sponsorRef },
    { sectionName: "Schedule", sectionRef: scheduleRef },
    { sectionName: "Tracks", sectionRef: trackRef },
    { sectionName: "FAQ", sectionRef: faqRef },
  ]);

  const footerRef = useRef(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
      }}
      className="All"
    >
      <Navbar
        sectionArray={sectionArray.current}
        scrollFunction={scrollToRef}
      ></Navbar>

      {/* 
				all of the body content should go in main

				if the section is a significant section the navigation
				bar should be able scroll to, pass it a reference
				and a header
			*/}
      <main className="responsive-container">
        {/* <h1>HunterHacks</h1> */}

        <Section title="" ref={aboutRef}>
          <About></About>
        </Section>

        <Section title="Judges" ref={judgeRef}>
          <PictureBoard 
          profileArray={judgeProfiles}
          sizingArray={judgeBoardSizing}
          ></PictureBoard>
        </Section>

        <Section title="Proudly Sponsored By: " ref={sponsorRef}>
          <Sponsors></Sponsors>
        </Section>

        <Section title="Hackathon Schedule:" ref={scheduleRef}>
          <ScheduleList></ScheduleList>
        </Section>

        <Section title="Tracks:" ref={trackRef}>
          <Tracks></Tracks>
        </Section>

        <Section title="Frequently Asked Questions:" ref={faqRef}>
          <FAQHolder />
        </Section>

        <Section title="" ref={footerRef}>
          <Footer></Footer>
        </Section>
      </main>

      {/* I want to see viewer count */}
      <Analytics/>
    </div>
  );
}

export default App;
