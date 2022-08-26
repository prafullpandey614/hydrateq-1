import { Button } from "@mui/material";
import React, { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import "./table.css";
import "./Tabular.css";
const Gaurav = () => {
  //Real Input


  const [id, setId] = useState();
  const [sid, setSid] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
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
  const [na, setNa] = useState();
  const [kNa, setKNa] = useState();
  const [cl, setCl] = useState();
  const [sO4, setSO4] = useState();
  const [hCO3, setHCO3] = useState();
  const [nO3, setNO3] = useState();
  const [f, setF] = useState();
  const [basin, setBasin] = useState();
  const [date, setDate] = useState(Date().toLocaleString());
  // const [time, setTime] = useState(Time.now());

  const ref = useRef(null);

  const [data, setData] = useState([]);
  const headers = [
    {label: 'ID', key : 'id'},
    {label: 'ShortID', key : 'sid'},
    {label: 'X', key : 'x'},
    {label: 'Y', key : 'y'},
    {label: 'Longitude', key : 'longitude'},
    {label: 'Latitude', key : 'latitude'},
    {label: 'SY', key : 'sy'},
    {label: 'SM', key : 'sm'},
    {label: 'pH', key : 'ph'},
    {label: 'Alk', key : 'alk'},
    {label: 'Harndess', key : 'hardness'},
    {label: 'TDS', key : 'tds'},
    {label: 'Ca', key : 'ca'},
    {label: 'Mg', key : 'mg'},
    {label: 'K', key : 'k'},
    {label: 'Na', key : 'na'},
    {label: 'KNa', key : 'kNa'},
    {label: 'Cl', key : 'cl'},
    {label: 'SO4', key : 'sO4'},
    {label: 'HCO3', key : 'hCO3'},
    {label: 'NO3', key : 'nO3'},
    {label: 'F', key : 'f'},
    {label: 'Basin', key : 'basin'},
    {label: 'Date', key : 'date'}

  ];
  const csvReport = {
    filename : 'Report.csv',
    headers: headers,
    data: data,
  }
  /// function to add data
  const addd = () => {
    setDate();
    setData((prevData) => [
      ...prevData,
      { id,
        sid,
        x,
        y,
        longitude,
        latitude,
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
        f,
        date
      },
    ]



    );
    console.log(data);
  };
  /// fucntion to change UI after adding a tuple
  const [Value , setValue] = useState(false); 
  const changeUi = (e) => {
    addd();
    setValue(true);
    // console.log(data);
    let prev_table = ref.current;
    console.log(prev_table);
    prev_table.innerHTML += `
    <br>
    <tr>
            <td>${id}</td>
            <td>${sid}</td>
            <td>${x}</td>
            <td>${y}</td>
            <td>${longitude}</td>
            <td>${latitude}</td>
           
           
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
            <td>${na}</td>
            <td>${kNa}</td>
            <td>${cl}</td>
            <td>${sO4}</td>
            <td>${hCO3}</td>
            <td>${nO3}</td>
            <td>${f}</td>
            <td>${basin}</td>
           
            
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
                <th className="header-label">SNo.</th>
                <th className="header-label">S Id</th>
                <th className="header-label">X</th>
                <th className="header-label">Y</th>
                <th className="header-label">Longitude</th>
                <th className="header-label">Latitude</th>
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
                <th className="header-label">Basin</th>
                <th className="header-label">Date</th>
              </tr>
              <tr className="tr-inputs">
              <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                </th>
              <th>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setSid(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setX(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setY(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="number"
                      onChange={(e) => setLatitude(e.target.value)}
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
                      onChange={(e) => setNa(e.target.value)}
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
                </th><th>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setBasin(e.target.value)}
                    />
                  </div>
                </th>
                <th>
                  <div>
                    <input
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody ref={ref}></tbody>
          </table>
          <div className="sample cont">
            <button type="Submit" className="sample-add" onClick={changeUi}>
              Add Sample
            </button>
            <Button>
            <CSVLink {...csvReport} >Export </CSVLink></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaurav;