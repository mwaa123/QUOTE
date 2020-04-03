import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'date',
  pure: true
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
            return 'Just now';
        const intervals = {
//             'year': 31536000,
//             'month': 2592000,
//             'week': 604800,
//             'day': 86400,
//             'hour': 3600,
//             'minute': 60,
//             'second': 1
//         };
//         let counter;
//         for (const i in intervals) {
//             counter = Math.floor(seconds / intervals[i]);
//             if (counter > 0)
//                 if (counter === 1) {
//                     return counter + ' ' + i + ' ago'; // singular (1 day ago)
//                 } else {
//                     return counter + ' ' + i + 's ago'; // plural (2 days ago)
//                 }
//         }
//     }
//     return value;
// }}
//   //   transform(value: any, ...args: any[]): any {
// //     let date:Date =new Date();
// //     let updateDate:any= new Date(date.getFullYear(),date.getMonth(),date. getDate());
// //     let dateDifference=Math.abs(updateDate.value);
// //     const secondsInDay=86400;
// //     let dateDifferenceInSeconds=dateDifference*0.001;
// //     let dateCount=dateDifferenceInSeconds/secondsInDay;

// //     if(dateCount>0.5){
// //       return Math.ceil(dateCount)+ " "+"days ago";
// //     }
// //     else{
// //     return null;
// //   }
// //   }
// // }
