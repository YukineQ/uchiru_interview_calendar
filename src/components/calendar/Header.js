import React from 'react'
import { styled } from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { isValid } from 'date-fns'

import IconButton from '../IconButton'

const Header = ({ addEvent }) => {

    const handleAddNewEvent = () => {
        const promptString = prompt('Enter event time: YYYY-MM-DD HH:mm:ss')

        const dateFromPrompt = new Date(promptString)

        if (!isValid(dateFromPrompt)) return null

        addEvent(dateFromPrompt)
    }

    return (
        <HeaderWrap>
            <h2>Interview Calendar</h2>
            <IconButton
                icon={AiOutlinePlus}
                iconSize={24}
                iconColor='red'
                onClick={() => handleAddNewEvent()} />
        </HeaderWrap>
    )
}

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding-inline: 2rem;
    padding-block: 0.5rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 400;

        @media (max-width: 480px) {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 480px) {
        padding-inline: 1rem;
    }
`

export default Header