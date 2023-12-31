import "./Forsidetickets.css";

import Galleri from "./Galleri";
import ProgramButton from "./ProgramButton";

function Forsidetickets(props) {
  return (
    <>
      <h1 className="titel">{props.titel}</h1>
      <p className="ptext">{props.ptext}</p>
      <div className="invis"></div>
      <h2 className="text">{props.text}</h2>
      <br />
    </>
  );
}

export default Forsidetickets;
