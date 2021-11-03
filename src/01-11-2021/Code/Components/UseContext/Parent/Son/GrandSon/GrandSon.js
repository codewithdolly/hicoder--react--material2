import React, {useContext} from 'react'

import { festivelStatus } from '../../Parent'

const GrandSon = () => {

    const festivale= useContext(festivelStatus)

    return (
        <div>
            <h3>I am Grand Son... <br />{festivale}</h3>
        </div>
    )
}

export default GrandSon
