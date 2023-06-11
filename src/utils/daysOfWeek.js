import { addDays, startOfWeek } from "date-fns";

export default function getDaysOfWeek(date = new Date()) {
    const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 })
    
    return new Array(7).fill().map((_, i) => {
        const day = addDays(startOfWeekDate, i)
        return day
    })
}