import 'date-fns';
import { format } from 'date-fns'

export function parseDate(date){
    let dateToString = format(new Date(date), 'yyyy-MM-dd')

    return dateToString 
}