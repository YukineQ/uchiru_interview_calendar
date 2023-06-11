import React from 'react'
import { format, isToday } from 'date-fns'
import { styled } from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import IconButton from './IconButton'
import getDaysOfWeek from '../utils/daysOfWeek'
import formatDate from '../utils/format'

const Day = ({ date }) => {
    return (
        <DayContainer>
            <p>{format(date, 'eeeee')}</p>
            <DayCircle isToday={isToday(date)}>
                <p>{format(date, 'dd')}</p>
            </DayCircle>
        </DayContainer>
    )
}

const WeekBar = ({ currentWeek, changeWeek }) => {
    const daysOfWeek = getDaysOfWeek(currentWeek)

    return (
        <WeekBarContainer>
            <Wrap>
                {daysOfWeek.map((date) => (
                    <Day date={date} />
                ))}
            </Wrap>
            <WeekSwitcherContainer>
                <IconButton
                    icon={MdKeyboardArrowLeft}
                    iconColor='red'
                    onClick={() => changeWeek(-1)}
                />
                <p>{formatDate.toMonthAndYear(currentWeek)}</p>
                <IconButton
                    icon={MdKeyboardArrowRight}
                    iconColor='red'
                    onClick={() => changeWeek(1)}
                />
            </WeekSwitcherContainer>
        </WeekBarContainer>
    )
}

const WeekBarContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #efeeeeff;
    box-sizing: border-box;
    padding: 0.2rem;
    padding-left: 30px;
    border: 1px solid #e4e4e4ff;
    border-width: 1px 0 1px 0;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    p {
        font-size: x-small;
        font-weight: bolder;
    }
`

const DayCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${props => props.isToday ? 'red' : 'inherit'};
    color: ${props => props.isToday ? 'white' : 'inherit'};

    p {
        font-size: medium;
        font-weight: 600;
    }
`

const WeekSwitcherContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-block: 8px;
    padding-inline: 24px;

    p {
        font-size: 0.875rem;
        font-weight: bold;
    }

    @media (max-width: 480px) {
        padding-inline: 14px;
    }
`

export default WeekBar