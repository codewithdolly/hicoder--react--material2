import React from 'react'
import GrandSon from './GrandSon/GrandSon'

const Son = (props) => {
    const {festival}= props;
    return (

        <div>
            <h2>I am Son.</h2>
            <GrandSon/>

        </div>
    )
}

export default Son
