import "./Sponsors.css";

import IBM from "../assets/sponsors/ibm.jpg";
import Redbull from "../assets/sponsors/redbull.png";
import Microsoft from "../assets/sponsors/microsoft.png";
import Simplify from "../assets/sponsors/simplify1.png";
import Codepath from '../assets/sponsors/codepath.png';
import MLT from '../assets/sponsors/mlt.png';
import Bloomberg from '../assets/sponsors/bloomberg.png';
import Hunter from '../assets/sponsors/hunter.png'
import HunterWorks from '../assets/sponsors/Hunter_Works_logo_79C90M.png'

function Sponsors() {
  return (
    <>
      <div className="sponsor-row">
        <img src={Codepath} alt="Codepath"></img>
        <img src={MLT} alt="MLT"></img>
        <img src={Bloomberg} alt="Bloomberg"></img>
      {/* </div>
      <div className="sponsor-row"> */}
        {/* <img src={IBM} alt="IBM"></img> */}
        <img src={Simplify} alt="Simplify"></img>
        <img src={Redbull} alt="Redbull"></img>
        <img src={Microsoft} alt="Microsoft"></img>
      {/* </div>
      <div className="sponsor-row"> */}
        <img src={Hunter} alt="Hunter"></img>
        <img src={HunterWorks} alt="HunterWorks"></img>
      </div>
    </>
  );
}
export default Sponsors;
