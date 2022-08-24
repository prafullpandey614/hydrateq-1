import React from "react";
import "./analysis.css";
import pic from "./Photo/1.jpg";
import logo from "./Photo/2.jpg";
import pogo from "./Photo/3.jpg";
import nick from "./Photo/4.jpg";
import some from "./Photo/5.jpg";
import rome from "./Photo/6.jpg";
import dome from "./Photo/7.jpg";
import cat from "./Photo/8.jpg";
import dog from "./Photo/9.jpg";
import hen from "./Photo/10.jpg";
import goat from "./Photo/11.jpg";
import men from "./Photo/12.jpg";
import boy from "./Photo/13.jpg";
import gun from "./Photo/14.jpg";

const Analysis = () => {
  return (
    <>
      <div className="sonu">
        <b>Research</b>
      </div>

      <p>
        Groundwater in many areas depends on the pH values of it hence for this
        we calculate the min,max pH of samples.
      </p>
      <ul>
        <li>
          {" "}
          After taking input from user, we have calculated the Min, Max
          ,Mean,Standard Deviation using the Matplotlib
        </li>
        <li>Using the below formulae, we have calculated the value of -</li>
      </ul>
      <ol>
        <li>
          <b>SAR-</b> is a significant relationship between sodium adsorption
          ratio (SAR) values for irrigation water and the extent to which sodium
          is adsorbed by the soils. If water used for irrigation is high in
          sodium and low in calcium, the cation exchange complex may become
          saturated with sodium, which can destroy the soil structure owing to
          dispersion of clay particles
        </li>
        <img src={pic} alt="reload" className="dev"></img>
        <li>
          <b>Soluble Na%age-</b> Na% indicates that the groundwater is excellent
          to permissible for irrigation in the three groups
        </li>
        <img src={logo} alt="reload" className="mat"></img>

        <li>
          <b>RSC-</b> The Residual Sodium Carbonate(RSC) indicates the excess
          sum of carbonate and bicarbonate in groundwater over the sum of
          calcium and magnesium which also influences the unsuitability of
          groundwater for irrigation.
        </li>
        <img src={pogo} alt="reload" className="mat"></img>

        <li>
          <b>WQI-</b> The Drinking Water Quality Index model provides a method
          to access the quality of groundwater by converting the content of all
          kinds of ions into a sample value.It provides a single number that
          expresses the overall water quality, at certain location and time,
          based on several water quality parameters. The objective of WQI is to
          turn complex water quality data into information that is
          understandable and usable by the public.
        </li>
      </ol>
      <div className="sonu">
        <b>Analysis</b>
      </div>
      <ul>
        <li>
          We have written our Backend in Python Flask Framework and Frontend
          with React JS.
        </li>
        <li>
          We have generated different type of graph using Python Matplotlib
          library like-{" "}
        </li>
      </ul>
      <div className="fat">
        <div className="card" style={{ width: "18rem" }}>
          <img src={nick} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Color Piper Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={some} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gibbs Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={rome} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Durov Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={dome} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Hfed Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={cat} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chadha Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={dog} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Triangle Piper Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={hen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Rectangle Diagram</h5>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={goat} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Schoellar Diagram</h5>
          </div>
        </div>

        <div id="praful">
          <b>Condition For SAR,RSC and WQI</b>
        </div>

        <img src={men} alt="" className="rope" />

        <img src={boy} alt="" className="sun" />
      </div>
      <div className="sonu">
        <b>Interpretation</b>
      </div>

      <div className="last">
        <img src={gun} alt="" className="rose" />
        <ol>
          <li>We have calculated the pH using the mean value.</li>
          <li>
            On the basis of maximum value concentration of various indicators,we
            have found the major anions and cations in the given sample water.
          </li>
          <li>
            Using the value of different indicators on the basis of max
            concentration,we have found the relative order.
          </li>
          <li>
            On the basis of the standard CGWB data,we have figure out the sample
            which violates the standard.
          </li>
          <li>
            We have also showed the dynamic chart of the indications which have
            violated the standard.
          </li>
          <li>
            We have also mapped the reasoning and predicted the cause for such
            violations.
          </li>
          <li>
            The SAR,RSC,WQI and soluble Na %age have been used and the values
            have been interpreted according to conditions mentioned in Analysis
            Table.
          </li>
        </ol>
      </div>
    </>
  );
};

export default Analysis;
