// fizzbuzz
// num divisible by 3 fizz
// divisible by 5 buzz
// num div by 15 fizzbuzz

var num=11
if(num%15==0){
    console.log("fizzbuzz")
}
else if(num%5==0){
    console.log("buzz")
}
else if(num%3==0){
    console.log("fizz")
}
else{
    console.log("invalid")
}