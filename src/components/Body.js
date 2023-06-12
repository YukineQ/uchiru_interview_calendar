import React from 'react'
import { styled } from 'styled-components'

import getWeekMatrix from '../utils/weekMatrix'
import { hours } from '../utils/hoursOfDay'

const BodyHoursLabel = () => {
    return (
        <HourLabels>
            {hours.map((hour) => (
                <HourWrapper key={hour}>
                    <HourLabel>{hour}</HourLabel>
                </HourWrapper>
            ))}
        </HourLabels>
    )
}

const Cell = ({ dayWithHour, getEventByDate, onClick }) => {
    const hasEvent = !!getEventByDate(dayWithHour).length

    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }

    return (
        <TableCell onClick={handleClick}>
            <Hour hasEvent={hasEvent} />
        </TableCell>
    )
}

const Body = ({ currentWeek, getEventByDate, setSelectedDate }) => {
    const weekMatrix = getWeekMatrix(currentWeek)

    return (
        <Container>
            <BodyHoursLabel />
            <Table>
                <tbody>
                    {weekMatrix.map((day) => (
                        <tr key={day.toString()}>
                            {day.map((dayWithHour) => (
                                <Cell
                                    key={dayWithHour.toString()}
                                    onClick={() => setSelectedDate(dayWithHour)}
                                    dayWithHour={dayWithHour}
                                    getEventByDate={getEventByDate}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

const HourLabels = styled.div`
    height: 1012px;
    display: flex; 
    flex-direction: column; 
    justify-content: space-evenly;
    padding-top: 7px;
`

const Hour = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    ${props => props.hasEvent ? 'background-color: #ebecff' : 'background-color: white'};

    @media (hover: hover) {
        &:hover
        {
            background-color: #b3b7ff;
        }
    }

    @media (hover: none) {
        &:active
        {
            background-color: #b3b7ff;
        }
    }
`

const HourWrapper = styled.div`
    display: flex;
    align-items: end;
    padding-inline: 5px;
`

const HourLabel = styled.p`
    font-size: small;
    font-weight: 500;
    color: #a4a4a4;
`

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;
    overflow: auto;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
`

const TableCell = styled.td`
    &&& {
        height: 40px;
    }
    border: 1.5px solid #d4d4d4;
`

export default Body