// src/pages/HomePage.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slideshow from "../../components/body/Slides";
import GenresTable from "../../components/body/GenresTable";
import OtherSource from "../../components/body/OtherSource";

import ItemSlider from "../../components/item_slide/ItemSlides";

const HomePage = () => {
  // This is just a placeholder. In a real application, you'd check if the user is logged in.

  return (
    <div>

       {/**Body */} 
      <div className="d-flex justify-content-between">
        <div style={{ width: "25%", height: "100%" }}>
          <GenresTable />
        </div>

        <div class="container-fluid mt-1" style={{ width: "60%" }}>
          <Slideshow />
        </div>
        <div style={{ width: "25%", height: "100%" }}>
          <OtherSource />
        </div>
      </div>

      <div>
        <ItemSlider/>
      </div>
      <div>
        <ItemSlider/>
      </div>
    </div>
  );
};

export default HomePage;
