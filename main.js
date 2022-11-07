const result=document.getElementById("result");

function  press(x){
    result.value=result.value+x;
}

function teng(){
   result.value=eval(result.value);
}

function cl(){
    result.value="";
}

function del(){
    result.value=result.value.substring(0,result.value.length-1);
}