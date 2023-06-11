import React, { useState } from 'react'
import { styled } from 'styled-components'

import Header from './Header'
import WeekBar from './WeekBar'
import Body from './Body'
import useEvent from '../../hooks/useEvent'
import useDate from '../../hooks/useDate'
import Footer from './Footer'

const Calendar = () => {
    const { getEventByDate, addEvent, deleteEvent } = useEvent()
    const { currentWeek, changeWeek, currentWeekToToday } = useDate()
    const [selectedEvent, setSelectedEvent] = useState('')

    return (
        <Wrap>
            <Header addEvent={addEvent} />
            <WeekBar
                changeWeek={changeWeek}
                currentWeek={currentWeek}
            />
            <Body
                currentWeek={currentWeek}
                getEventByDate={getEventByDate}
                setSelectedDate={setSelectedEvent}
            />
            <Footer
                selectedDate={selectedEvent}
                currentWeekToToday={currentWeekToToday}
                getEventByDate={getEventByDate}
                deleteEvent={deleteEvent}
            />
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 740px;
    background-color: white;
`

export default Calendar