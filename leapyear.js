function checkLeapYear(year){
    if( year%400==0){
        
            return true;
        }
    
    else if(year%4==0 && year%100!=0){
        return true;
    }
    else{
        return false;
    }
}

var sal=prompt("enter");
sat=parseInt(sal);

var result = checkLeapYear(sal);
console.log(result);