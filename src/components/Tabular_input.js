import React, { useState, useRef } from "react";
import "./table.css";
import "./Tabular.css";
const Gaurav = () => {
  
  //Real Input
  const [sy, setSy] = useState();
  const [sm, setSm] = useState();
  const [co32, setCo32] = useState();
  const [ph, setPh] = useState();
  const [alk, setAlk] = useState();
  const [hardness, setHardness] = useState();
  const [tds, setTds] = useState();
  const [ca, setCa] = useState();
  const [mg, setMg] = useState();
  const [k, setK] = useState();
  const [kNa, setKNa] = useState();
  const [cl, setCl] = useState();
  const [sO4, setSO4] = useState();
  const [hCO3, setHCO3] = useState();
  const [nO3, setNO3] = useState();
  const [f, setF] = useState();
  const [basin, setBasin] = useState();

  const ref = useRef(null);

  const [data, setData] = useState([]);
  /// function to add data
  const addd = () => {
    setData((prevData) => [
      ...prevData,
      {
        basin,
        sy,
        sm,
        co32,
        ph,
        alk,
        hardness,
        tds,
        ca,
        mg,
        k,
        kNa,
        cl,
        sO4,
        hCO3,
        nO3,
        f


      },
    ]);
    console.log(data);
  };
  /// fucntion to change UI after adding a tuple
  const changeUi = (e) => {
    addd();
    // console.log(data);
    let prev_table = ref.current;
    console.log(prev_table);
    prev_table.innerHTML += `
    <br>
    <tr>
    <td>${basin}</td>
            <td>${sy}</td>
            <td>${sm}</td>
            <td>${co32}</td>
            <td>${ph}</td>
            <td>${alk}</td>
            <td>${hardness}</td>
            <td>${tds}</td>
            <td>${ca}</td>
            <td>${mg}</td>
            <td>${k}</td>
            <td>${kNa}</td>
            <td>${cl}</td>
            <td>${sO4}</td>
            <td>${hCO3}</td>
            <td>${nO3}</td>
            <td>${f}</td>
           
            
          </tr>
    `;
  };

  return (
    <div className="container tb1-container">
      <div className="row table-wrapper">
        <div className="column-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th className="header-label">Basin</th>
                <th className="header-label">SY</th>
                <th className="header-label">SM</th>
                <th className="header-label">Co32-</th>
                <th className="header-label">Ph</th>
                <th className="header-label">Alk</th>
                <th className="header-label">Hardness</th>
                <th className="header-label">TDS</th>
                <th className="header-label">Ca</th>
                <th className="header-label">Mg</th>
                <th className="header-label">K</th>
                <th className="header-label">Na</th>
                <th className="header-label">KNa</th>
                <th className="header-label">Cl</th>
                <th className="header-label">SO4</th>
                <th className="header-label">HCO3</th>
                <th className="header-label">NO3</th>
                <th className="header-label">F</th>
              </tr>
              <tr className="tr-inputs">
              <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setBasin(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setSy(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setSm(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setCo32(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setPh(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setAlk(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setHardness(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setTds(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setCa(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setMg(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setK(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setKNa(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setCl(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setSO4(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setHCO3(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setNO3(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setF(e.target.value)}
                    />
                  </div>
                </th>
                {/* <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setSeventeen(e.target.value)}
                    />
                  </div>
                </th> */}
              </tr>
            </thead>
            <tbody ref={ref}></tbody>
          </table>
          <div className="sample cont">
            <button type="Submit" className="sample-add" onClick={changeUi}>
              Add Sample
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaurav;
