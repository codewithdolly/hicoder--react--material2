import React, {useContext} from 'react'
import { festivelStatus } from '../Parent';

const Son2 = () => {
    const festv= useContext(festivelStatus);
    return (
        <div>
           <h2> Hi, I am 2nd son. {festv}</h2>
        </div>
    )
}

export default Son2
