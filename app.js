const input = document.getElementById('equation');
const buttons = document.getElementById('group');

buttons.addEventListener('click',function(e){
    const i = e.target.innerText;
    console.log(i);
    if(i == '='){
        input.value = eval(input.value);
    }
    else if(i == 'C'){
        input.value = ''
    }
    else if(i == '←'){
        input.value = input.value.slice(0,-1);
    }
    else if(i == '√'){
        input.value = Math.sqrt(parseFloat(input.value));
    }
    else{
        input.value += i ;
    }
})