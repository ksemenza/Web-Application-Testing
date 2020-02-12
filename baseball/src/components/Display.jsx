import React, { useState } from 'react'

const Display = () =>  {
const [ballCount, setBallCount] = useState(0)
const [strikeCount, setStrikeCount] = useState(0)

const addBall = e => {
    setBallCount(ballCount + 1)
}
 
        return (
            <div>
                <div className='strike-wrap'>{addBall}</div>

            </div>
        )
    

}