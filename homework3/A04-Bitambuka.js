// Adding events to the buttons

let but1=document.getElementById("but1");
but1.addEventListener("click",function1);

let but2=document.getElementById("but2");
but2.addEventListener("click",function2);

let but3=document.getElementById("but3");
but3.addEventListener("click",function3);

let but4=document.getElementById("but4");
but4.addEventListener("click",function4);

//functions to handle events
function function1() {
   //answer.remove();
   let newAnsewer=document.getElementById("newAnswer");
   let child=newAnsewer.lastChild;
   while (child){
      newAnsewer.removeChild(child);
      child=newAnsewer.lastChild;
   }
   const ol = document.createElement("ol");
   const li1=document.createElement("li");
   const li2=document.createElement("li");
   const li3=document.createElement("li");
   const li4=document.createElement("li");
   const li5=document.createElement("li");
   li1.innerHTML="Setting goals: defining what you are researching"
   li2.innerHTML="Identifying Participants: your goals will help you understand the people from whom you will be collecting data"
   li3.innerHTML="Rlationship with participants: this means that you have to establish a professional relationshipp with your population"
   li4.innerHTML="Triangulation: this means investigating your data from different angles"
   li5.innerHTML="pilot studies: conducting small studies to test the method before the main study"
   ol.appendChild(li1)
   ol.appendChild(li2)
   ol.appendChild(li3)
   ol.appendChild(li4)
   ol.appendChild(li5)
   newAnsewer.appendChild(ol);
}
function function2(){
   //answer.remove();
   let newAnsewer=document.getElementById("newAnswer");
   let child=newAnsewer.lastChild;
   while (child){
      newAnsewer.removeChild(child);
      child=newAnsewer.lastChild;
   }
   // add element
   let ol = document.createElement("ol");
   let li1=document.createElement("li");
   let li2=document.createElement("li");
   let li3=document.createElement("li");
   let li4=document.createElement("li");
   let li5=document.createElement("li");
   let li6=document.createElement("li");
   li1.innerHTML="Interviews"
   li2.innerHTML="Focus group"
   li3.innerHTML="Questionnaires"
   li4.innerHTML="Direct observation in the field"
   li5.innerHTML="Direct obervation in a controlled environment"
   li6.innerHTML="Indirect observation"
   ol.appendChild(li1)
   ol.appendChild(li2)
   ol.appendChild(li3)
   ol.appendChild(li4)
   ol.appendChild(li5)
   ol.appendChild(li6)
   newAnsewer.appendChild(ol);
}

function function3(){

   //answer.remove();
   let newAnsewer=document.getElementById("newAnswer");
   let child=newAnsewer.lastChild;
   while (child){
      newAnsewer.removeChild(child);
      child=newAnsewer.lastChild;
   }
   const para = document.createElement("p");
   para.innerHTML="As a <role>, I want < behavior> so that < benefit>"
   newAnsewer.appendChild(para);


}
function function4(){
   
   //answer.remove();
   let newAnsewer=document.getElementById("newAnswer");
   let child=newAnsewer.lastChild;
   while (child){
      newAnsewer.removeChild(child);
      child=newAnsewer.lastChild;
   }
   let ol = document.createElement("ol");
   let li1=document.createElement("li");
   let li2=document.createElement("li");
   let li3=document.createElement("li");
   let li4=document.createElement("li");
   let li5=document.createElement("li");
   
   li1.innerHTML="Project drives: the purpose of the product"
   li2.innerHTML="Project constraints: Naming convestions and terminalogy"
   li3.innerHTML="Functional requirements: the scope of the work"
   li4.innerHTML="Nonfuctional requiremts: Performence requirements"
   li5.innerHTML="Project issues: tasks"
   ol.appendChild(li1)
   ol.appendChild(li2)
   ol.appendChild(li3)
   ol.appendChild(li4)
   ol.appendChild(li5)
   newAnsewer.appendChild(ol);
}

