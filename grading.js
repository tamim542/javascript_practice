function grade_marks(mark){

    if(mark<=59 && mark>=0){
        return "f";
    }
   else if(mark<=70 && mark>=60){
        return "d";
    }
    else if(mark<=80 && mark>=71){
        return "c";
    }
    else if(mark<=90 && mark>=81){
        return "b";
    }
    else if(mark<=100 && mark>=91){
        return "a";
    }
    else{
        return "input is invalid";
    }
}

let mark=90;
let result=grade_marks(mark);

console.log("grade: ",result);