import React from 'react';

const Buttons = ({ handleSmallTime, handleParty, handleBlueOne, handleBlueTwo, handleGreatOne, handleGreatTwo, handleGreatThree, handleGreatFour }) => {
   
    return(
        <div className='buttons'>
            <button onClick={handleSmallTime}>Small Time</button>
            <button onClick={handleParty}>Party</button>
            <button onClick={handleBlueOne}>Left Blue</button>
            <button onClick={handleBlueTwo}>Right Blue</button>
            <button onClick={handleGreatOne}>Pro One</button>
            <button onClick={handleGreatTwo}>Pro Two</button>
            <button onClick={handleGreatThree}>Pro Three</button>
            <button onClick={handleGreatFour}>Pro Four</button>
        </div>
    )
}

export default Buttons;