import React, { useCallback , useState} from "react";
import "./prafull.css";
import  Dropzone  from "../components/Dropzone.js";
import cuid from "cuid";
import ImageList from "../components/Imagelist";
import ButtonSelectGraph from "../components/ButtonSelectGraph";
const Prafull = () => {
    const [images, setImages] = useState([]);
    

  const onDrop = useCallback((acceptedFiles) => {
    // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
     // Loop through accepted files
     acceptedFiles.map(file => {
        // Initialize FileReader browser API
        const reader = new FileReader();
        // onload callback gets called after the reader reads the file data
        reader.onload = function(e) {
          // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
          setImages(prevState => [
            ...prevState,
            { id: cuid(), src: e.target.result }
          ]);
        };
        // Read the file as Data URL (since we accept only images)
        reader.readAsDataURL(file);
        return file;
      });
    }, []);
   

  return (
    <>
    <div className="cont">
    <div className="container-side">
    
        <div className="logo side"><img src="https://tse3.mm.bing.net/th?id=OIP.lCLulmLSKngZC3wJ3aLR2wHaF7&pid=Api&P=0" alt="set" className="logo" /><b>Hydrateq</b></div>
        <br />
        <br />
        <br />
        <div className="projects side">Projects</div>
        <div className="projects side">DashBoard</div>
        <hr />
        <div className="side"><img src="https://www.pikpng.com/pngl/m/82-827408_help-icon-png-play-button-icon-png-clipart.png" alt="set" className="icon" /> Aqua</div>
        <div className="side"><img src="https://www.pikpng.com/pngl/m/82-827408_help-icon-png-play-button-icon-png-clipart.png" alt="set" className="icon" /> Help</div>
        <div className="side"><img src="https://www.pikpng.com/pngl/m/112-1121340_settings-logo-png-white-png-download-setting-icon.png" alt="set" className="icon" /> Setting</div>
      </div>
      <div className="dropzone-area  mt-5">
       <div className="dropzone-d"> 
       
        <Dropzone onDrop={onDrop}  accept={"text/csv , application/pdf , image/*"} /></div>

        <div className="btn-generate">Generate</div>
      </div>
      <div className="select-graph">
          <br />
          <br />
          <h5>Select The Graph to be Selected</h5>
          <ButtonSelectGraph name_of_graph={"PiperDiagram"} />
          <ButtonSelectGraph name_of_graph={"Durov Diagram"} />
          <br />
          <ButtonSelectGraph name_of_graph={"Huffman Diagram"} />
          <ButtonSelectGraph name_of_graph={"Dijkstra Diagram"} />
          <br />
          <ButtonSelectGraph name_of_graph={"Swalo Diagram"} />
          <ButtonSelectGraph name_of_graph={"Djader Diagram"} />
          <br />
          
          <ButtonSelectGraph name_of_graph={"Swalo Diagram"} />
          <ButtonSelectGraph name_of_graph={"Djader Diagram"} />
          <br />
      </div>
        {/* <ImageList images={images} />   */}
     
    </div>
    
     
    </>
  );
};

export default Prafull;
