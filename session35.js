let c = document.getElementById("count");
let eo = document.getElementById("eo");
let count = 0;
function incr() {
    if(count<20){
        count++;
        display();
    }
    else{
        alert("maximum count exceeded");
    }
}
function decr() {
    if(count!=0){
        count--;
        display();
    }
    else{
        alert("minimum count is 0");
    }
}
function display() {
    //alert("you clicked the button!");
    c.textContent=count;
    if(count%2 == 0) {
        eo.textContent = 'even'
    }else{
        eo.textContent = 'odd';
    }
}

function reset() {
    count = 0;
    display()
}
