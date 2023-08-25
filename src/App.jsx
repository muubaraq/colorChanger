import { useState } from 'react'    
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'                      
import colors from './colors'    

function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = colors[currentColorIndex];
  const [displayMode, setDisplayMode] = useState('name'); // 'name' or 'hex'

  const toggleDisplayMode = (mode) => {
    setDisplayMode(mode);
  };
  const changeColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);      };
    return (                                            <>
      <header className="header">
   <nav className="nav-div">
     <div className="logo">                              <h1>Color Flipper</h1>
     </div>
     <div className="nav-link">
       <a href="#" onClick={() =>toggleDisplayMode('name')}>Simple</a>                                      <a href="#" onClick={() =>toggleDisplayMode
('hex')}>Hex</a>
	    </div>                                          </nav>
 </header>
 <main  style={{backgroundColor:currentColor.hex}}>
   <div className="container">
     <div className="color-wrapper">
      <h2 className="colorName">
          Background-color: {displayMode === 'name' ? currentColor.name : currentColor.hex}
            </h2>
     <p>Meaning: {currentColor.meaning}</p>
      <button className="btn" onClick={changeColor}  style={{backgroundColor: currentColor.hex }}>Change Color</button>
      </div>
   </div>
 </main>
    </>
  )
}
    export default App
