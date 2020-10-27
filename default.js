function add(num1,num2=20){
    
    //nun2=num2||0;(if you do this if statement will not work)
    if(num2== undefined){
        num2=0;
    }
    return num1+num2;
}
const oscar=add(10,1)
console.log(oscar)