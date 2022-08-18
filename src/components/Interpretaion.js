import { Typography , Stack} from '@mui/material'
import React  , {useEffect}from 'react'
import axios from 'axios'


const Interpretaion = (props) => {
    const desc = props.desc;
    const [na ,setNa] = React.useState([]);
    const [sample , setSample] = React.useState([]);
    const [MeanSar , setMeanSar] = React.useState([]);
    // first we need to get the data from the database

    async function getData(){
        await axios.get(`http://127.0.0.1:5000/na/${props.project_id}`)
            .then(res => {
                setNa(res.data)
                // console.log(res.data)
            })
            .catch(err => console.log(err))
        await axios.get(`http://127.0.0.1:5000/sample/${props.project_id}`)
            .then(res => {
                setSample(res.data)
                // console.log(res)
            })
            .catch(err => console.log(err))
        }
    useEffect(() => {
        getData()
    },[])
    // console.log(wqi)
    const max_na= Math.max(...na)
    const max_cl = desc.Cl[7]
    const max_ca = desc.Ca[7]
    const max_hc03 = desc.HCO3[7]
    const max_kna = desc.KNa[7]
    const max_mg = desc.Mg[7]
    const max_f = desc.F[7]
    const max_no3 = desc.NO3[7]
    const max_so4 = desc.SO4[7]
    // console.log(max_na,max_cl,max_ca,max_kna,max_mg,max_f,max_no3,max_so4 ,max_hc03)
    const cation={
        'Na':max_na,
        'Ca':max_ca,
        'KNa':max_kna,
        'Mg':max_mg,
    }
    const anion={
        'F':max_f,
        'NO3':max_no3,
        'SO4':max_so4,
        'Cl':max_cl,
        'HCO3':max_hc03,
    }
    const sorted_cation = Object.keys(cation).sort(function(a, b) { return cation[a] - cation[b] });
    // console.log(sorted_cation)
    const sorted_anion = Object.keys(anion).sort(function(a, b) { return anion[a] - anion[b] });
    // console.log(sorted_anion)
    // date from description
    // console.log(desc)
    const meanph = desc.pH[1]
    const minph = desc.pH[3]
    const maxph = desc.pH[7]
    const meanFUNC =(mean)=>{
        if(mean < 7.0 && mean >= 5.5){
            return "slightly  Acidic"
        }
        else if(mean >= 7.0 && mean < 8.0){
            return "Slightly alkaline"
        }
        else if(mean >= 8.0){
            return "Highly alkaline"
        }
        else if(mean < 5.5){
            return "Highly acidic"
        }
        else if (mean === 7.0){
            return "Neutral"
        }
    }
 // water quality index check
    const wqiQuality = (wqi)=>{
        if(wqi < 26){
            return "Excellent"
        }
        else if(wqi >= 26 && wqi < 50){
            return "Good  "
        }
        else if(wqi >= 51 && wqi < 75){
            return "Poor"
        }
        else if(wqi >= 76){
            return "Unsuitable"
        }
    }
    // water quality index
    const mean_sar = props.MeanSar
    const wqi = props.wqi
    console.log(props.MeanSar)
    const sar =(mean)=>{
        if(mean <= 9 && mean >= 1){
            return (["Sodium hazard of water is low" ,"Use on sodium sensitive crops must be cautioned"])
        }
        else if(mean >9 && mean <= 17){
            return (["Sodium  hazard of water is moderate" , "amendments such as gypsum,  lime, and calcium chloride are recommended"])
        }
        else if(mean > 17 && mean <= 25){
            return (["Sodium hazard of water is high" , "Generally unsuitable for continuous cultivation"])
        }
        else if(mean < 25){
            return (["Sodium hazard of water is very high" , "Unsuitable for use in cultivation"])
        }  
    }
    return (
        <Stack>
            <Typography variant="body" gutterBottom>
            The Groundwater of the given area was generally {meanFUNC(meanph)} with pH ranging from
                { minph } to { maxph}.
            {/* The Groundwater of the given area was generally {weakly} {alkaline} with pH ranging from
                {7.8 }to {8.5.} */}
                </Typography>
            <Typography varient="body1">
            {sorted_anion[4] } and {sorted_anion[3]} are the major anions and {sorted_cation[3]} and {sorted_anion[2]} are the major cations.
        </Typography>
        <Typography   varient="h6">
            Order of anions
            </Typography>
        <Typography varient="body1">
            {sorted_anion[4] } &gt; {sorted_anion[3]}  &gt; {sorted_anion[2]} &gt; {sorted_anion[1]} &gt; {sorted_anion[0]}  
        </Typography>
        <Typography varient="h6">
            Order of cation
            </Typography>
        <Typography varient="body1">
        {sorted_cation[3]}  &gt; {sorted_cation[2]} &gt; {sorted_cation[1]} &gt; {sorted_cation[0]}  
            </Typography>
            <Stack direction="row" spacing={3}> 
        <Typography varient="body1">
            mean sar of sample {mean_sar} so {sar(mean_sar)[0]}
            </Typography>
            <Typography varient="body1">
            {sar(mean_sar)[1]}
            </Typography>
            </Stack>
            <Stack>
                <Typography varient="body1">
                    the Water quality index of samples is { wqi } so sample is {wqiQuality(wqi)} for the purpose of drinking water.
                </Typography>
            </Stack>
        </Stack> 
    )

}

export default Interpretaion