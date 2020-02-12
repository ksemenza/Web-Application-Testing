import React, { useState } from "react"
import {ButtonStyled} from '../assests/Styled'
import useLocalStorage from './Hooks/useLocalStorage'

const Button = props => {

const [addBall, setAddBall] = useState(0)

const ballCall = e => {

    }

    const strikeCall = e => {
    }
        return(
            <div>
                <div className='count-btn-wrap'>
                <ButtonStyled className='ball-btn'>Ball</ButtonStyled>
                <ButtonStyled className='strike-btn'>Strike</ButtonStyled>
                </div>
            </div>
        )
    

}
export default Button