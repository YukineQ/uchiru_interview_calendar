import { isValid } from "date-fns";
import { useCallback, useReducer, useEffect } from "react";
import compareDate from "../utils/compareDate";

function eventsReducer(events, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...events,
                {
                    date: action.date,
                }
            ]
        }
        case 'delete': {
            return events.filter((t) => !compareDate.byHour(t.date, action.date))
        }
        default:
            throw new Error('No such action');
    }
}

const initEvents = () => {
    const eventsFromStorage = localStorage.getItem('savedEvents')
    const parsedEvents = eventsFromStorage ? JSON.parse(eventsFromStorage) : []
    return parsedEvents
}

const useEvent = () => {
    const [events, dispatchEvent] = useReducer(
        eventsReducer,
        [],
        initEvents
    )

    useEffect(() => {
        const saveEventsToStorage = () => {
            localStorage.setItem('savedEvents', JSON.stringify(events))
        }
        saveEventsToStorage()
    }, [events])

    const getEventByDate = useCallback((date) => {
        if(!isValid(new Date(date))) return []

        return events.filter(
            event =>
                compareDate.byHour(event.date, date)
        )
    }, [events])

    const addEvent = useCallback((date) => {
        const isEventAlreadyExists = !!getEventByDate(date).length
        
        if(isEventAlreadyExists) {
            return
        }

        dispatchEvent({
            type: 'add',
            date: date,
        })
    }, [getEventByDate])

    const deleteEvent = useCallback((date) => {
        dispatchEvent({
            type: 'delete',
            date: date,
        })
    }, [])

    return {
        events,
        addEvent,
        deleteEvent,
        getEventByDate,
    }
}

export default useEvent