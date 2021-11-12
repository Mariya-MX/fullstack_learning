var num=4
if (num<0){
    console.log("error")
}
else if(num==0){
    console.log("fact of 0 is 1")
}
else{
      let fact=1
      let i=1
      while(i<=num){
          fact*=i
          i++
      }
      console.log(fact)

    }
