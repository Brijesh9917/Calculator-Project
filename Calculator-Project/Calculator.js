// let displayData=document.getElementById('display');
// let buttonarray=document.querySelectorAll('button');
// ArrayData=Array.from(buttonarray)
// let string='';
// ArrayData.forEach(function(btn){
//     btn.addEventListener('click',function(event){
//         if(event.target.innerHTML=='DEL'){
//         string=string.substring(0,string.length-1)
//         displayData.value=string;
//         }
//         else if(event.target.innerHTML=='AC')
//         {
//         string=''
//         displayData.value=string;
//         }
//         else if(event.target.innerHTML=='=')
//         {
//             string=eval(string);
//             displayData.value=string;
//             string=displayData.value;
//         }
//         else
//         {
//         string+=event.target.innerHTML
//         displayData.value=string;
//         }
// })
// })

// let displayData=document.getElementById('display');

// let buttonarray=document.querySelectorAll('button');

// ArrayData=Array.from(buttonarray);
// let string='';
// ArrayData.forEach(function(btn)
// {
//     btn.addEventListener('click',fun)

// function fun(sapna)
// {
//     if(sapna.target.innerHTML=='DEL')
//     {
//         string=string.substring(0,string.length-1);
//         displayData.value=string;
//     }
//     else if(sapna.target.innerHTML=='AC')
//     {
//         string='';
//         displayData.value=string;
//     }
//     else if(sapna.target.innerHTML=='=')
//     {
        

//         string=eval(string);
//         displayData.value=string;
//         string=displayData.value;

//     }
//     else{
//     string+=sapna.target.innerHTML;
//     displayData.value=string;
//     }
// }
// })

let displayData=document.getElementById('display');

let buttonarray=document.querySelectorAll('button');

ArrayData=Array.from(buttonarray);
let string='';
ArrayData.forEach(function(btn)
{
    btn.addEventListener('click',s=>{
        if(s.target.innerHTML=='DEL')
        {
            string=string.substring(0,string.length-1);
            displayData.value=string;
        }
        else if(s.target.innerHTML=='AC')
        {
            string='';
            displayData.value=string;
        }
        else if(s.target.innerHTML=='=')
        {
            
    
            string=eval(string);
            displayData.value=string;
            string=displayData.value;
        
            
    
        }
        else{
        string+=s.target.innerHTML;
        displayData.value=string;
        }
    })
})