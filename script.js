//your JS code here. If required.
function daysOfAYear(year){
	if(year%4==0 && (year%400==0 || year%100!=0)){
		return 366
	}
	else{
		return 365
	}
}

daysOfYear(2022)
daysOfYear(2024)
daysOfYear(1900)
daysOfYear(2000)