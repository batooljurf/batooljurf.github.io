
function myfun()
{
	
   var Subject = document.getElementById("Subject").value;
   var email = document.getElementById("email").value;
   var ID = document.getElementById("ID").value;
   var URL = document.getElementById("URL").value;
   var massage = document.getElementById("massage").value;
   
   if(Subject == "" && email == "" && ID == "" && URL == "" && massage == ""){
    alert("All labels are empty");
   }
  else{
	  if(Subject == "" ){
    alert("Subject is empty");
  }
    if(email == "" ){
    alert("email is empty");
  }
    if(ID == "" ){
    alert("ID is empty");
  }
   if(URL == "" ){
    alert("URL is empty");
  }
   if(massage == "" ){
    alert("massage is empty");
  }
  }
  if(email != ""){
  var x = email;
  var start = email.indexOf("@");
  var y = "";
 
 for(var i = start + 1; i < x.length;i++){
     y+=x[i];
 }
 alert("email error");
  }
  



if(Subject != ""){
 for(var i = 0;i<Subject.length;i++){
   if(!(Subject[i] >= 'a' && Subject[i]<='z'|| Subject[i]>='A'&& Subject[i]<='Z')){
   alert("Subject error");
   break;
   }
   }
 }
 
 if (massage != ""){
 for(var i = 0; i< massage.length; i++){
  if(!(massage[i] >= 'a'&& massage[i] <= 'z'||massage[i] >= 'A'&& massage[i] <= 'Z')){
  alert("massage error");
  break;
  }
  }
}

  
  break;
  }

