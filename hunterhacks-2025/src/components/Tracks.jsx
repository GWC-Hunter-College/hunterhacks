import "./Tracks.css";
import winbird from "../assets/bird1.png";
import plantbird from "../assets/bird2.png";
import deibird from "../assets/bird3.png";
import moneybird from "../assets/bird4.png";
import medbird from "../assets/bird5.png";
import techbird from "../assets/bird6.png";
import one from "../assets/1train.png";
import two from "../assets/2train.png";
import three from "../assets/3train.png";
import four from "../assets/4train.png";
import five from "../assets/5train.png";
import six from "../assets/6train.png";

const trackInformation = [
  {
    imgTrack: one,
    imgBird: winbird,
    trackName: "Best Overall",
    trackDescription:
      '"Winner Winner Hawk Dinner"! This prize celebrates the most outstanding hack across all tracks; the one that rises above in creativity, functionality, design, and impact. Judges may consider how well-rounded your project is, how clearly your team solved a problem, and how polished the final outcome feels.',
  },
  {
    imgTrack: two,
    imgBird: plantbird,
    trackName: "Best Sustainability Hack",
    trackDescription:
      '"Get our hawk to a more sustainable environment." This track focuses on social and environmental responsibility. Judges may take into account how your project promotes sustainability, how intentionally it’s designed for long-term impact, and how it encourages better choices for communities or the planet.',
  },
  {
    imgTrack: three,
    imgBird: deibird,
    trackName: "Best Diversity & Inclusion Hack",
    trackDescription:
      "This track honors hacks that center inclusion, representation, and accessibility. Judges may look at how thoughtfully your project considers diverse user needs, how it aims to create equitable outcomes, or how it empowers historically excluded communities.",
  },
  {
    imgTrack: four,
    imgBird: moneybird,
    trackName: "Best Financial Hack",
    trackDescription:
      "This track recognizes projects that explore financial systems, access, or decision-making. Judges may evaluate how effectively your project addresses a challenge related to money, economics, or financial literacy, and how clearly the solution is communicated.",
  },
  {
    imgTrack: five,
    imgBird: medbird,
    trackName: "Best Health & Wellness Hack",
    trackDescription:
      "Projects in this track aim to support well-being, health access, or personal care. Judges may assess how clearly your project identifies a health-related need, how users are supported through your design, and how your solution could make a difference in someone’s daily life.",
  },
  {
    imgTrack: six,
    imgBird: techbird,
    trackName: "Best AI/ML Immersion Hack",
    trackDescription:
      "This track is for projects that engage meaningfully with AI or machine learning. Judges may consider how well you explain your use of AI/ML, how it contributes to the core functionality of your project, and whether your approach shows curiosity, creativity, and care.",
  },
];

function Tracks() {
  return (
    <>
      {trackInformation.map((information, index) => (
        <Track
          imgTrack={information.imgTrack}
          imgBird={information.imgBird}
          trackName={information.trackName}
          trackDescription={information.trackDescription}
          key={index}
        ></Track>
      ))}
    </>
  );
}

function Track({ imgTrack, imgBird, trackName, trackDescription }) {
  return (
    <div className="track_container">
      <img src={imgTrack} className="track_img"></img>

      <img className="bird_img" src={imgBird}></img>

      <div className="title_container">
        <div className="title">{trackName}</div>
        <div className="subtitle">{trackDescription}</div>
      </div>
    </div>
  );
}
export default Tracks;
