
let inputdata;

function getInput(){
    var inputData = document.getElementById('time');
     inputdata=inputData.value;
    console.log(inputdata);
    
}


// var inputeledata=inputdata;
 var Button= document.getElementById('EnterButton');
 Button.addEventListener('click',()=>{
    getInput();
 })

 let Timer=document.getElementsByClassName('timer')[0]
 console.log(Timer)
 setInterval(UpdateCountDown,1000)
 function UpdateCountDown(){
         if(inputdata>=0){
            if(inputdata<10){
                Timer.innerText=`0${inputdata}`
            }else{
                Timer.innerText=inputdata
            }
             console.log("timer",inputdata)
             inputdata--
         }
  }