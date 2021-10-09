import moment from 'moment';

moment.updateLocale('en', {
  monthsShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
});

export default function time(date) {
  if (moment().diff(date, "days") < 1) { // 6:30 PM
    return moment(date).format("h:mm A");
  } else if (moment().diff(date, "days") < 2) { // Yesterday, 6:30 PM
    return `Yesterday, ${moment(date).format("h:mm A")}`; 
  } else {
    return moment(date).format("MMM D, h:mm A"); // Jan 31, 6:30 PM
  }
}