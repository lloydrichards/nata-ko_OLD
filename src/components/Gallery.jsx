import React from "react";
import { css } from "emotion";
import Desktop1 from "../images/nata-ko1.jpg";
import Desktop2 from "../images/nata-ko2.jpg";
import Desktop3 from "../images/nata-ko3.jpg";
import Desktop4 from "../images/nata-ko4.jpg";

function Gallery() {
  return (
    <div style={{ height: "90vh", overflow: "hidden" }} id="cf">
      <img className="bottom" alt="Front Page Image 1" src={Desktop1} />
      <img className="bottom" alt="Front Page Image 2" src={Desktop2} />
      <img className="bottom" alt="Front Page Image 3" src={Desktop3} />
      <img className="bottom" alt="Front Page Image 4" src={Desktop4} />
    </div>
  );
}

export default Gallery;
