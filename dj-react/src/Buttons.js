import React from 'react';

const Buttons = ({ handleSmallTime, handleParty, handleBlueOne, handleBlueTwo }) => {
   
    return(
        <div className='buttons'>
            <button onClick={handleSmallTime}>Small Time</button>
            <button onClick={handleParty}>Party</button>
            <button onClick={handleBlueOne}>Left Blue</button>
            <button onClick={handleBlueTwo}>Right Blue</button>
        </div>
    )
}

export default Buttons;