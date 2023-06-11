import { format } from "date-fns"

const formatDate = {
    toMonthAndYear: (date) => format(new Date(date), 'MMMM yyyy'),
    toDateAndHours: (date) => format(new Date(date), 'yyyy MM d H')
}

export default formatDate