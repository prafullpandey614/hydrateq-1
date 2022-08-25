import React from 'react'
import "./help.css"
// import pic1 from "./helpPic/page1.png";
// import pic2 from "./helpPic/page2.png";
// import pic3 from "./helpPic/page3.png";
// import pic4 from "./helpPic/page4.png";
// import pic5 from "./helpPic/page6.png";




const HelpComponents = () => {
  return (
    <>
    <div>
        <h1>Help</h1>
        <h2 style={{textAlign: 'center'}}><u>How to use:</u></h2>
        <p>1.You can start your new projects and as well as can observe your previous projects by clicking on the <br /> <span style={{color: 'red'}}><b>PROJECT</b></span> button as shown:</p>
       
        <img src="https://raw.githubusercontent.com/shivam2003sy/hydrateq/gaurav/src/components/helpPic/page1.png?token=GHSAT0AAAAAABXZX5KSGHNHBNPRYUPPLIYQYYHBPQA" alt ="reload" width={530} height={410} ></img>
        <p>2.Dashboard provides you the access to browse your contents by clicking on <span style={{color: 'red'}}><b>BROWSE</b></span> button as well as you can drag and <br /> drop them for results by
          clicking on <span style={{color: 'red'}}><b>DRAG and DROP</b></span> icon. <br />
          Also, you can input your hydrochemical data values and can generate your graph by clicking on <span style={{color: 'red'}}><b>GENERATE</b></span> button as <br /> shown:</p>
        <div className="row"> 
          <div className="column">
          <img src="https://raw.githubusercontent.com/shivam2003sy/hydrateq/gaurav/src/components/helpPic/page2.png?token=GHSAT0AAAAAABXZX5KSJNJZITFPL4ZAFERGYYHBS5Q" alt ="reload" width={530} height={410} ></img> 
          </div>
          <div className="column">
           
            <img src="https://raw.githubusercontent.com/shivam2003sy/hydrateq/gaurav/src/components/helpPic/page3.png?token=GHSAT0AAAAAABXZX5KSMBU6JCX4EL5PSJKCYYHBUIQ" alt ="reload" width={530} height={410} ></img>
          </div>
        </div>
        <p>3. For the research section of this web application you can hover through the aqua section in the side bar by
          clicking <br /> on the <span style={{color: 'red'}}><b>AQUA</b></span> button. The Auqa page consists of three sections
          <span style={{color: 'red'}}><b>RESEARCH, ANALYSIS, INTERPRETATION</b></span> . You
          can go <br /> through it by clicking on the <span style={{color: 'red'}}><b>RESEARCH, ANALYSIS and
              INTERPRETATION</b></span> as shown:
        </p>
       
        <img src="https://raw.githubusercontent.com/shivam2003sy/hydrateq/gaurav/src/components/helpPic/page4.png?token=GHSAT0AAAAAABXZX5KTLEZMVZKAOI6E4BAUYYHBU7A" alt ="reload" width={530} height={345} ></img>
        <p>4. You can also share your thoughts and reviews regarding this web application by clicking on the <span style={{color: 'red'}}><b>LAMP</b></span> icon in the side <br /> bar as shown:</p>
        
        <img src="https://raw.githubusercontent.com/shivam2003sy/hydrateq/gaurav/src/components/helpPic/page6.png?token=GHSAT0AAAAAABXZX5KTZTMBO6HOWU6AATCWYYHBVWQ" alt ="reload" width={1100} height={345} ></img>
      </div>

</>
  );
}

export default HelpComponents