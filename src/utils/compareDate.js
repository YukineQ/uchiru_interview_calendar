import formatDate from "./format"

const compareDate = {
    byHour: (firstDate, secondDate) => {
        return formatDate.toDateAndHours(firstDate) === formatDate.toDateAndHours(secondDate)
    }
}

export default compareDate