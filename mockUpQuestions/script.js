var div =document.getElementById('invisibleBox');
var display = 0;


function showAnswer(){
    if(display == 1){
        div.style.display = 'none';
        display = 0;
    }
    else{
        div.style.display = 'block';
        div.style.visibility = 'visible';
        display = 1;
    }
}
