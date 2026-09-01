//your JS code here. If required.
function daysOfYear(year){
	if(year%4==0 || (year%400==0 && year%100!=0)){
		return 365
	}
	else{
		return 366
	}
}

daysOfYear(2022)