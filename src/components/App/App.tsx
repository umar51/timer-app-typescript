import React from 'react'
import "./App.css";
import Timer from '../Timer/Timer';

const App : React.FC= () => {
    return (
        <div className='app-container'>
            <Timer/>
            
        </div>
    )
}

export default App;