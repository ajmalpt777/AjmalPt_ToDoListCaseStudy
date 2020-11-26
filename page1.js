//restrict redirecting to list
window.history.forward(); 
function noBack() { 
    window.history.forward(); 
}

//ajax
callAjax();
function callAjax(){
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200)
     {
         var response=JSON.parse(this.responseText);
        //  console.log(response);
         var Jpeople=response;
        //  console.log(Jpeople);
         var row;
    for(var i=0; i<Jpeople.length;i++){
            row = ` <input type="checkbox" id="checkboxID" name="chk" onChange="track()" >
            <label>${Jpeople[i].title}</label>
             <hr>
                     `
         
        document.getElementById("label1").innerHTML+=row; 
        // console.log(row); 
               
    }
        }


    }
   xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
   xhttp.send();
}

//validation
var a=document.getElementsByName("chk");

function track(){
promise
.then(function(s){
   console.log(s);
   var newVar=0;
    var count;
    for(count=0;count<a.length;count++)
    {
        if(a[count].checked==true)
         {
             newVar= newVar+1;
             //preventing uncheck
             a[count].addEventListener("click", function(event){
                event.preventDefault()
                    }); 
            
         }
    }
    // console.log(newVar);
    // console.log(s);
    if(newVar==5){
     alert(s);
     }
      })

.catch(function(e){
   console.log(e);
   
 } )
  }


var promise=new Promise(function(resolve,reject){
    var success=false;
   if(!success){
       resolve("You Completed 5 Tasks");
   }
   else{
       reject("Not a Success promise")
   }
});