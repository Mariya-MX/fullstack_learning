// range
// low-1
// upp-15
// 1**2=1
// 2**2=4
// 3**2=9

var low=1
var upp=15
for(let i=low;i<=upp;i++){
    let res=i*i
    if(res>=low & res<=upp){
        console.log(res)
    }
}