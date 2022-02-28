var entry =document.getElementById("submit");
entry.addEventListener("click",displayDetails);

var row=3;

function displayDetails(){
    
    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var website =document.getElementById("website").value;
    var link =document.getElementById("link").value;
    
    var ele = document.getElementsByName('gender');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        var gender=ele[i].value;
    }
    
    if(!name || !email){
        alert("Please Fill Compulsory Field");
        return;
    }

    if(document.getElementById("java").checked == true){
        var skill="Java";
    }
    if(document.getElementById("html").checked == true){
        if(skill=="Java"){
            var skill=skill+",Html";
        }
        else{
        var skill="Html";
        }
        
    }
    if(document.getElementById("css").checked == true){
        if(skill=="Java"||skill=="Java,Html"||skill=="Html"){
            var skill=skill+",CSS";
        }
        else{
            var skill="CSS";
        }
        
    }


    var display= document.getElementById("display");
    var newRow= display.insertRow(row);

    var cell1= newRow.insertCell(0);
    var cell2= newRow.insertCell(1);

    cell1.innerHTML = name+"<br>"+gender+"<br>"+email+"<br>"+website+"<br>"+skill;
    cell2.innerHTML = "<img src="+link+">";
    row++;

    alert("Student "+name+" Is Enrolled!");


}