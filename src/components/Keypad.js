// Code Keypad Component Here
import React, {useState} from 'react'

function Keypad (){
    const [keyPress, setKeyPad] = useState('')

    function handleKeyPress(e){
        console.log('Entering password...')
        setKeyPad(e.target.value)
    }

    return (
        <div>
            <label>
                <input 
                type='password'
                value={keyPress}
                onChange={handleKeyPress} 
                />
            </label>
        </div>
    )
}

export default Keypad;