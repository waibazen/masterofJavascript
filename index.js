let count=0;
let countEl=document.getElementById("count")
console.log(countEl)

function increment(){
    count +=1

    countEl.innerText=count;

}
increment();
function decrement(){
    count -=1

    countEl.innerText=count;

}
decrement()
console.log(count)
