import React ,{useState} from 'react'
import './ColorModeSwitch.css';
function ColorModeSwitch(){
    const[colorMode,setColorMode]=useState('red');
    const handleColorChange=(color)=>{
      setColorMode(color);
    };
    return(
      <div>
        
        <button onClick={()=>
        handleColorChange('red')}>Red</button>
        <button onClick={()=>
        handleColorChange('blue')}>Blue</button>
        <button onClick={()=>
        handleColorChange('green')}>Green</button>
        <div className={`content ${colorMode}-mode`}>    
        </div>
        </div>
    );
  }
  export default ColorModeSwitch;
