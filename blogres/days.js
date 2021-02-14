function dateDiff(startDateString, endDateString){
if(!endDateString){
var now=new Date();
var month=now.getMonth()+1;
var endDateString=now.getFullYear()+"-"+month+"-"+now.getDate();
}
var separator = "-"; //日期分隔符
var startDates = startDateString.split(separator);
var endDates = endDateString.split(separator);
var startDate = new Date(startDates[0], startDates[1]-1, startDates[2]);
var endDate = new Date(endDates[0], endDates[1]-1, endDates[2]);
return parseInt(Math.abs(endDate - startDate ) / 1000 / 60 / 60 /24);//把相差的毫秒数转换为天数
};
