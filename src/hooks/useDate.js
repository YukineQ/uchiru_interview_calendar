import { add } from "date-fns"
import { useCallback, useState } from "react"

const useDate = () => {
    const [currentWeek, setCurrentWeek] = useState(new Date())

    const changeWeek = useCallback((num) => {
        setCurrentWeek(add(currentWeek, {
            weeks: num
        }))
    }, [currentWeek])

    const currentWeekToToday = useCallback(() => {
        setCurrentWeek(new Date())
    }, [])

    return {
        currentWeek,
        changeWeek,
        currentWeekToToday,
    }
}

export default useDate