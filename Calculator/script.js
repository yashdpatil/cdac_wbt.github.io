let input = document.getElementById('inp');
let buttons = document.querySelectorAll('input')
let string ="";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.value=='='){
            string = eval(string);
            input.value = string;
        }else if(e.target.value == 'C'){
            string ='';
            input.value ='';

        }

        else{
        string+=e.target.value;
        input.value = string;
        }
    })
})