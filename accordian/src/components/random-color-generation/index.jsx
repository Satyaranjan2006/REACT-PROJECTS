import { useState,useEffect } from "react"
export default function  RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setcolor] = useState('#000000')

    function randomColorUtility(length) {
        return  Math.floor(Math.random()*length)
        
    }

function handelCreateRandomHexColor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexcolor="#";


    for(let i=0;i<6;i++){
       hexcolor+=hex[randomColorUtility(hex.length)]
    }


    console.log(hexcolor);
    setcolor(hexcolor)

}

function handelCreateRandomRgbColor(){
  let r=randomColorUtility(256);
  let g=randomColorUtility(256);
  let b=randomColorUtility(256);

  setcolor(`rgb(${r},${g},${b})`)
}

useEffect(() => {
if(typeOfColor==='rgb' )handelCreateRandomRgbColor();
else handelCreateRandomHexColor();

  
}, [typeOfColor])




return <div style={{
    background:color,
    height:'100vh',
    width:'100vw',
    marginTop:'50px',
}}>

    <button onClick={()=>setTypeOfColor('hex')} >Create Hex Color</button>
    <button onClick={()=>setTypeOfColor('rgb')}>Create Rgb Color</button>
    <button onClick={typeOfColor==='hex' ? handelCreateRandomHexColor : handelCreateRandomRgbColor}>Generate Random Color</button>

<div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'#fff',
    fontSize:'60px',
    marginTop:'50px',
    flexDirection:'column',
     gap:'20px'
}}>
<h3>{typeOfColor==='rgb' ? 'RGB COLOR': 'HEX COLOR'}</h3>
<h1>{color}</h1>
</div>

</div>
}