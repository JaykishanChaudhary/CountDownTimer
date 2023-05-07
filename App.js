
let inputdata;

function getInput(){
    var inputData = document.getElementById('timeCount');
     inputdata=inputData.value;
    console.log(inputdata);
    
}


// var inputeledata=inputdata;
//  var Button= document.getElementById('EnterButton');
//  Button.addEventListener('click',()=>{
//     getInput();
//  })

 let Timer=document.getElementById("current-time");
 console.log(Timer)
 document.getElementById('timeCount').addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        getInput();
        setInterval(UpdateCountDown,1000)
    }
})
    // setInterval(UpdateCountDown,1000)
 
 function UpdateCountDown(){
    console.log(isNaN(inputdata))
    if(isNaN(inputdata)){
        Timer.innerText=`00 seconds`
    }else{
        if(inputdata>=0){
            if(inputdata<10){
                Timer.innerText=`0${parseInt(inputdata)} seconds`
            }else{
                Timer.innerText=`${parseInt(inputdata)} seconds`
            }
             console.log("timer",inputdata)
             inputdata--
         }else{
            Timer.innerText=`00 seconds`
         }
    }
         
  }