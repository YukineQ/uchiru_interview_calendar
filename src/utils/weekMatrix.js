import { add, startOfWeek } from "date-fns";

export default function getWeekMatrix(date = new Date()) {
    const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 })
    const hoursMatrix = new Array(24).fill([]).map((_, hour) => {
        return new Array(7).fill().map((_, day) => {
            return add(startOfWeekDate, { days: day, hours: hour })
        })
    })

    return hoursMatrix
}