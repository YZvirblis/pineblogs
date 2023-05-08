export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

// ARRAY.SORT()
export function commentsOrderByDate(a, b) {
    return a.date < b.date ? -1 : (a.date > b.date ? 1 : 0);
}